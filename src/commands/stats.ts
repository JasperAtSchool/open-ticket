///////////////////////////////////////
//STATS COMMAND
///////////////////////////////////////
import {openticket, api, utilities} from "../index"
import * as discord from "discord.js"

const generalConfig = openticket.configs.get("openticket:general")

export const registerCommandResponders = async () => {
    //STATS COMMAND RESPONDER
    openticket.responders.commands.add(new api.ODCommandResponder("openticket:stats",generalConfig.data.prefix,/^stats/))
    openticket.responders.commands.get("openticket:stats").workers.add([
        new api.ODWorker("openticket:permissions",1,async (instance,params,source,cancel) => {
            const permissionMode = generalConfig.data.system.permissions.stats
            
            //command is disabled
            if (permissionMode == "none"){
                //no permissions
                instance.reply(await openticket.builders.messages.getSafe("openticket:error-no-permissions").build("button",{guild:instance.guild,channel:instance.channel,user:instance.user,permissions:[]}))
                return cancel()
            }

            //reset subcommand is owner/developer only
            if (instance.options.getSubCommand() == "reset"){
                if (!openticket.permissions.hasPermissions("owner",await openticket.permissions.getPermissions(instance.user,instance.channel,instance.guild))){
                    //no permissions
                    instance.reply(await openticket.builders.messages.getSafe("openticket:error-no-permissions").build(source,{guild:instance.guild,channel:instance.channel,user:instance.user,permissions:["owner","developer"]}))
                    return cancel()
                }else return
            }

            //permissions for normal scopes
            if (permissionMode == "everyone") return
            else if (permissionMode == "admin"){
                if (!openticket.permissions.hasPermissions("support",await openticket.permissions.getPermissions(instance.user,instance.channel,instance.guild))){
                    //no permissions
                    instance.reply(await openticket.builders.messages.getSafe("openticket:error-no-permissions").build(source,{guild:instance.guild,channel:instance.channel,user:instance.user,permissions:["support"]}))
                    return cancel()
                }else return
            }else{
                if (!instance.guild || !instance.member){
                    //error
                    instance.reply(await openticket.builders.messages.getSafe("openticket:error").build(source,{guild:instance.guild,channel:instance.channel,user:instance.user,error:"Permission Error: Not in Server #1",layout:"advanced"}))
                    return cancel()
                }
                const role = await openticket.client.fetchGuildRole(instance.guild,permissionMode)
                if (!role){
                    //error
                    instance.reply(await openticket.builders.messages.getSafe("openticket:error").build(source,{guild:instance.guild,channel:instance.channel,user:instance.user,error:"Permission Error: Not in Server #2",layout:"advanced"}))
                    return cancel()
                }
                if (!role.members.has(instance.member.id)){
                    //no permissions
                    instance.reply(await openticket.builders.messages.getSafe("openticket:error-no-permissions").build(source,{guild:instance.guild,channel:instance.channel,user:instance.user,permissions:[]}))
                    return cancel()
                }else return
            }
        }),
        new api.ODWorker("openticket:stats",0,async (instance,params,source,cancel) => {
            const {guild,channel,user} = instance
            if (!guild){
                //error
                instance.reply(await openticket.builders.messages.getSafe("openticket:error-not-in-guild").build(source,{channel:instance.channel,user:instance.user}))
                return cancel()
            }
            const scope = instance.options.getSubCommand()
            if (!scope || (scope != "global" && scope != "ticket" && scope != "user" && scope != "reset")) return

            if (scope == "global"){
                await instance.reply(await openticket.builders.messages.getSafe("openticket:stats-global").build(source,{guild,channel,user}))
            
            }else if (scope == "ticket"){
                const id = instance.options.getChannel("ticket",false)?.id ?? channel.id
                const ticket = openticket.tickets.get(id)
                
                if (ticket) await instance.reply(await openticket.builders.messages.getSafe("openticket:stats-ticket").build(source,{guild,channel,user,scopeData:ticket}))
                else await instance.reply(await openticket.builders.messages.getSafe("openticket:stats-ticket-unknown").build(source,{guild,channel,user,id}))

            }else if (scope == "user"){
                const statsUser = instance.options.getUser("user",false) ?? user
                await instance.reply(await openticket.builders.messages.getSafe("openticket:stats-user").build(source,{guild,channel,user,scopeData:statsUser}))

            }else if (scope == "reset"){
                const reason = instance.options.getString("reason",false)
                openticket.stats.reset()
                await instance.reply(await openticket.builders.messages.getSafe("openticket:stats-reset").build(source,{guild,channel,user,reason}))

            }
        }),
        new api.ODWorker("openticket:logs",-1,(instance,params,source,cancel) => {
            const scope = instance.options.getSubCommand()
            let data: string
            if (scope == "ticket"){
                data = instance.options.getChannel("ticket",false)?.id ?? instance.channel.id
            }else if (scope == "user"){
                data = instance.options.getUser("user",false)?.id ?? instance.user.id
            }else data = "/"
            openticket.log(instance.user.displayName+" used the 'stats "+scope+"' command!","info",[
                {key:"user",value:instance.user.username},
                {key:"userid",value:instance.user.id,hidden:true},
                {key:"channelid",value:instance.channel.id,hidden:true},
                {key:"method",value:source},
                {key:"data",value:data},
            ])
        })
    ])
}