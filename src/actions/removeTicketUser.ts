///////////////////////////////////////
//TICKET REMOVE USER SYSTEM
///////////////////////////////////////
import {openticket, api, utilities} from "../index"
import * as discord from "discord.js"

const generalConfig = openticket.configs.get("openticket:general")

export const registerActions = async () => {
    openticket.actions.add(new api.ODAction("openticket:remove-ticket-user"))
    openticket.actions.get("openticket:remove-ticket-user").workers.add([
        new api.ODWorker("openticket:remove-ticket-user",2,async (instance,params,source,cancel) => {
            const {guild,channel,user,ticket,reason,data} = params
            if (channel.isThread()) throw new api.ODSystemError("Unable to remove user from ticket! Open Ticket doesn't support threads!")

            await openticket.events.get("onTicketUserRemove").emit([ticket,user,data,channel,reason])
            
            //update ticket
            const index = ticket.get("openticket:participants").value.findIndex((p) => p.type == "user" && p.id == data.id)
            if (index < 0) return cancel()
            ticket.get("openticket:participants").value.splice(index,1)
            ticket.get("openticket:participants").refreshDatabase()
            ticket.get("openticket:busy").value = true

            //update channel permissions
            try{
                await channel.permissionOverwrites.delete(data)
            }catch{
                openticket.log("Failed to remove channel permission overwrites on remove-ticket-user","error")
            }

            //update ticket message
            const ticketMessage = await openticket.tickets.getTicketMessage(ticket)
            if (ticketMessage){
                try{
                    ticketMessage.edit((await openticket.builders.messages.getSafe("openticket:ticket-message").build("other",{guild,channel,user,ticket})).message)
                }catch(e){
                    openticket.log("Unable to edit ticket message on ticket user removal!","error",[
                        {key:"channel",value:channel.id},
                        {key:"message",value:ticketMessage.id},
                        {key:"option",value:ticket.option.id.value}
                    ])
                    openticket.debugfile.writeErrorMessage(new api.ODError(e,"uncaughtException"))
                }
            }

            //reply with new message
            if (params.sendMessage) await channel.send((await openticket.builders.messages.getSafe("openticket:remove-message").build(source,{guild,channel,user,ticket,reason,data})).message)
            ticket.get("openticket:busy").value = false
            await openticket.events.get("afterTicketUserRemoved").emit([ticket,user,data,channel,reason])
        }),
        new api.ODWorker("openticket:discord-logs",1,async (instance,params,source,cancel) => {
            const {guild,channel,user,ticket,reason,data} = params

            //to logs
            if (generalConfig.data.system.logs.enabled && generalConfig.data.system.messages.removing.logs){
                const logChannel = openticket.posts.get("openticket:logs")
                if (logChannel) logChannel.send(await openticket.builders.messages.getSafe("openticket:ticket-action-logs").build(source,{guild,channel,user,ticket,mode:"remove",reason,additionalData:data}))
            }

            //to dm
            if (generalConfig.data.system.messages.removing.dm) await openticket.client.sendUserDm(user,await openticket.builders.messages.getSafe("openticket:ticket-action-dm").build(source,{guild,channel,user,ticket,mode:"remove",reason,additionalData:data}))
        }),
        new api.ODWorker("openticket:logs",0,(instance,params,source,cancel) => {
            const {guild,channel,user,ticket,data} = params

            openticket.log(user.displayName+" removed "+data.displayName+" from a ticket!","info",[
                {key:"user",value:user.username},
                {key:"userid",value:user.id,hidden:true},
                {key:"channel",value:"#"+channel.name},
                {key:"channelid",value:channel.id,hidden:true},
                {key:"reason",value:params.reason ?? "/"},
                {key:"method",value:source}
            ])
        })
    ])
    openticket.actions.get("openticket:remove-ticket-user").workers.backupWorker = new api.ODWorker("openticket:cancel-busy",0,(instance,params) => {
        //set busy to false in case of crash or cancel
        params.ticket.get("openticket:busy").value = false
    })
}