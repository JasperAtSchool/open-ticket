///////////////////////////////////////
//OPEN TICKET BUILDER MAPPINGS
///////////////////////////////////////
import * as api from "@open-discord-bots/framework/api"
import { ODPermissionEmbedType } from "./permission"
import { ODTranscriptCompiler, ODTranscriptCompilerCompileResult } from "../api/transcript"
import { ODRoleOption, ODTicketOption, ODWebsiteOption } from "../api/option"
import { ODTicket, ODTicketClearFilter } from "../api/ticket"
import { ODRole, ODRoleUpdateResult } from "../api/role"
import { ODPriorityLevel } from "../api/priority"
import { ODPanel } from "../api/panel"
import * as discord from "discord.js"

/**## ODButtonManagerIdMappings `interface`
 * A list of all available IDs in the default `ODButtonManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODButtonManagerIdMappings extends api.ODButtonManagerIdConstraint {
    "opendiscord:verifybar-success":{source:"verifybar"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,customData?:string,customColor?:api.ODValidButtonColor,customLabel?:string,customEmoji?:string},workers:"opendiscord:verifybar-success"},
    "opendiscord:verifybar-failure":{source:"verifybar"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,customData?:string,customColor?:api.ODValidButtonColor,customLabel?:string,customEmoji?:string},workers:"opendiscord:verifybar-failure"},

    "opendiscord:error-ticket-deprecated-transcript":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{},workers:"opendiscord:error-ticket-deprecated-transcript"},
    
    "opendiscord:help-menu-previous":{source:"text"|"slash"|"button"|"other",params:{mode:"slash"|"text",page:number},workers:"opendiscord:help-menu-previous"},
    "opendiscord:help-menu-next":{source:"text"|"slash"|"button"|"other",params:{mode:"slash"|"text",page:number},workers:"opendiscord:help-menu-next"},
    "opendiscord:help-menu-page":{source:"text"|"slash"|"button"|"other",params:{mode:"slash"|"text",page:number},workers:"opendiscord:help-menu-page"}
    "opendiscord:help-menu-switch":{source:"text"|"slash"|"button"|"other",params:{mode:"slash"|"text",page:number},workers:"opendiscord:help-menu-switch"},

    "opendiscord:ticket-option":{source:"slash"|"text"|"auto-update"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,panel:ODPanel,option:ODTicketOption},workers:"opendiscord:ticket-option"},
    "opendiscord:website-option":{source:"slash"|"text"|"auto-update"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,panel:ODPanel,option:ODWebsiteOption},workers:"opendiscord:website-option"},
    "opendiscord:role-option":{source:"slash"|"text"|"auto-update"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,panel:ODPanel,option:ODRoleOption},workers:"opendiscord:role-option"}

    "opendiscord:visit-ticket":{source:"ticket-created"|"dm"|"logs"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:visit-ticket"},

    "opendiscord:close-ticket":{source:"ticket-message"|"reopen-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:close-ticket"},
    "opendiscord:delete-ticket":{source:"ticket-message"|"close-message"|"autoclose-message"|"reopen-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:delete-ticket"},
    "opendiscord:reopen-ticket":{source:"ticket-message"|"close-message"|"autoclose-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:reopen-ticket"},
    "opendiscord:claim-ticket":{source:"ticket-message"|"unclaim-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:claim-ticket"},
    "opendiscord:unclaim-ticket":{source:"ticket-message"|"claim-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:unclaim-ticket"},
    "opendiscord:pin-ticket":{source:"ticket-message"|"unpin-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:pin-ticket"},
    "opendiscord:unpin-ticket":{source:"ticket-message"|"pin-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:unpin-ticket"},

    "opendiscord:transcript-html-visit":{source:"channel"|"creator-dm"|"participant-dm"|"active-admin-dm"|"every-admin-dm"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<{url:string,availableUntil:Date},{auth:string}>,result:ODTranscriptCompilerCompileResult<{url:string,availableUntil:Date}>},workers:"opendiscord:transcript-html-visit"},
    "opendiscord:transcript-error-retry":{source:"slash"|"text"|"ticket-message"|"reopen-message"|"close-message"|"autoclose-message"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<any,object|null>,reason:string|null},workers:"opendiscord:transcript-error-retry"},
    "opendiscord:transcript-error-continue":{source:"slash"|"text"|"ticket-message"|"reopen-message"|"close-message"|"autoclose-message"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<any,object|null>,reason:string|null},workers:"opendiscord:transcript-error-continue"},

    "opendiscord:clear-continue":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,filter:ODTicketClearFilter,list:string[]},workers:"opendiscord:clear-continue"},
}

/**## ODDropdownManagerIdMappings `interface`
 * A list of all available IDs in the default `ODDropdownManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODDropdownManagerIdMappings extends api.ODDropdownManagerIdConstraint {
    "opendiscord:panel-dropdown-tickets":{source:"slash"|"text"|"auto-update"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,panel:ODPanel,options:ODTicketOption[]},workers:"opendiscord:panel-dropdown-tickets"}
}

/**## ODFileManagerIdMappings `interface`
 * A list of all available IDs in the default `ODFileManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODFileManagerIdMappings extends api.ODFileManagerIdConstraint {
    "opendiscord:text-transcript":{source:"channel"|"creator-dm"|"participant-dm"|"active-admin-dm"|"every-admin-dm"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<any,object|null>,result:ODTranscriptCompilerCompileResult<any>},workers:"opendiscord:text-transcript"}
}

/**## ODEmbedManagerIdMappings `interface`
 * A list of all available IDs in the default `ODEmbedManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODEmbedManagerIdMappings extends api.ODEmbedManagerIdConstraint {
    "opendiscord:error":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,error:string,layout:"simple"|"advanced",customTitle?:string},workers:"opendiscord:error"},
    "opendiscord:error-option-missing":{source:"slash"|"text"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,error:api.ODTextCommandErrorMissingOption},workers:"opendiscord:error-option-missing"},
    "opendiscord:error-option-invalid":{source:"slash"|"text"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,error:api.ODTextCommandErrorInvalidOption},workers:"opendiscord:error-option-invalid"},
    "opendiscord:error-unknown-command":{source:"slash"|"text"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,error:api.ODTextCommandErrorUnknownCommand},workers:"opendiscord:error-unknown-command"},
    "opendiscord:error-no-permissions":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,permissions:ODPermissionEmbedType[]},workers:"opendiscord:error-no-permissions"},
    "opendiscord:error-no-permissions-cooldown":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,until?:Date},workers:"opendiscord:error-no-permissions-cooldown"},
    "opendiscord:error-no-permissions-blacklisted":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-no-permissions-blacklisted"},
    "opendiscord:error-no-permissions-limits":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,limit:"global"|"global-user"|"option"|"option-user"},workers:"opendiscord:error-no-permissions-limits"},
    "opendiscord:error-responder-timeout":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-responder-timeout"},
    "opendiscord:error-ticket-unknown":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-ticket-unknown"},
    "opendiscord:error-ticket-deprecated":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-ticket-deprecated"},
    "opendiscord:error-option-unknown":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-option-unknown"},
    "opendiscord:error-panel-unknown":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-panel-unknown"},
    "opendiscord:error-not-in-guild":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-not-in-guild"},
    "opendiscord:error-channel-rename":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"ticket-pin"|"ticket-unpin"|"ticket-rename"|"ticket-move"|"ticket-priority"|"ticket-transfer"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,originalName:string,newName:string},workers:"opendiscord:error-channel-rename"},
    "opendiscord:error-ticket-busy":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-ticket-busy"},

    "opendiscord:help-menu":{source:"text"|"slash"|"button"|"other",params:{mode:"slash"|"text",page:number},workers:"opendiscord:help-menu"},
    
    "opendiscord:stats-global":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:stats-global"},
    "opendiscord:stats-ticket":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,scopeData:ODTicket},workers:"opendiscord:stats-ticket"},
    "opendiscord:stats-user":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,scopeData:discord.User},workers:"opendiscord:stats-user"|"opendiscord:easter-egg"},
    "opendiscord:stats-reset":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,reason:string|null},workers:"opendiscord:stats-reset"},
    "opendiscord:stats-ticket-unknown":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,id:string},workers:"opendiscord:stats-ticket-unknown"},
    
    "opendiscord:panel":{source:"slash"|"text"|"auto-update"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,panel:ODPanel},workers:"opendiscord:panel"},
    "opendiscord:ticket-created":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:ticket-created"},
    "opendiscord:ticket-created-dm":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:ticket-created-dm"},
    "opendiscord:ticket-created-logs":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:ticket-created-logs"},
    "opendiscord:ticket-message":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:ticket-message"},
    "opendiscord:close-message":{source:"slash"|"text"|"ticket-message"|"reopen-message"|"autoclose"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:close-message"},
    "opendiscord:reopen-message":{source:"slash"|"text"|"ticket-message"|"close-message"|"autoclose-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:reopen-message"},
    "opendiscord:delete-message":{source:"slash"|"text"|"ticket-message"|"reopen-message"|"close-message"|"autoclose-message"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:delete-message"},
    "opendiscord:claim-message":{source:"slash"|"text"|"ticket-message"|"unclaim-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:claim-message"},
    "opendiscord:unclaim-message":{source:"slash"|"text"|"ticket-message"|"claim-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:unclaim-message"},
    "opendiscord:pin-message":{source:"slash"|"text"|"ticket-message"|"unpin-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:pin-message"},
    "opendiscord:unpin-message":{source:"slash"|"text"|"ticket-message"|"pin-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:unpin-message"},
    "opendiscord:rename-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null,data:string},workers:"opendiscord:rename-message"},
    "opendiscord:move-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null,data:ODTicketOption},workers:"opendiscord:move-message"},
    "opendiscord:add-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null,data:discord.User},workers:"opendiscord:add-message"},
    "opendiscord:remove-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null,data:discord.User},workers:"opendiscord:remove-message"},
    "opendiscord:ticket-action-dm":{source:"slash"|"text"|"ticket-message"|"close-message"|"reopen-message"|"delete-message"|"claim-message"|"unclaim-message"|"pin-message"|"unpin-message"|"autoclose-message"|"autoclose"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,mode:"close"|"reopen"|"delete"|"claim"|"unclaim"|"pin"|"unpin"|"rename"|"move"|"add"|"remove",ticket:ODTicket,reason:string|null,additionalData:null|string|discord.User|ODTicketOption},workers:"opendiscord:ticket-action-dm"},
    "opendiscord:ticket-action-logs":{source:"slash"|"text"|"ticket-message"|"close-message"|"reopen-message"|"delete-message"|"claim-message"|"unclaim-message"|"pin-message"|"unpin-message"|"autoclose-message"|"autoclose"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,mode:"close"|"reopen"|"delete"|"claim"|"unclaim"|"pin"|"unpin"|"rename"|"move"|"add"|"remove",ticket:ODTicket,reason:string|null,additionalData:null|string|discord.User|ODTicketOption},workers:"opendiscord:ticket-action-logs"},

    "opendiscord:blacklist-view":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:blacklist-view"},
    "opendiscord:blacklist-get":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,data:discord.User},workers:"opendiscord:blacklist-get"},
    "opendiscord:blacklist-add":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,data:discord.User,reason:string|null},workers:"opendiscord:blacklist-add"},
    "opendiscord:blacklist-remove":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,data:discord.User,reason:string|null},workers:"opendiscord:blacklist-remove"}
    "opendiscord:blacklist-dm":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,mode:"add"|"remove",data:discord.User,reason:string|null},workers:"opendiscord:blacklist-dm"},
    "opendiscord:blacklist-logs":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,mode:"add"|"remove",data:discord.User,reason:string|null},workers:"opendiscord:blacklist-logs"},

    "opendiscord:transcript-text-ready":{source:"channel"|"creator-dm"|"participant-dm"|"active-admin-dm"|"every-admin-dm"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<{contents:string},null>,result:ODTranscriptCompilerCompileResult<{contents:string}>},workers:"opendiscord:transcript-text-ready"},
    "opendiscord:transcript-html-ready":{source:"channel"|"creator-dm"|"participant-dm"|"active-admin-dm"|"every-admin-dm"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<{url:string,availableUntil:Date},{auth:string}>,result:ODTranscriptCompilerCompileResult<{url:string,availableUntil:Date}>},workers:"opendiscord:transcript-html-ready"},
    "opendiscord:transcript-html-progress":{source:"channel"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<{url:string,availableUntil:Date},{auth:string}>,remaining:number},workers:"opendiscord:transcript-html-progress"},
    "opendiscord:transcript-error":{source:"slash"|"text"|"ticket-message"|"reopen-message"|"close-message"|"autoclose-message"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<any,object|null>,reason:string|null},workers:"opendiscord:transcript-error"},

    "opendiscord:reaction-role":{source:"panel-button"|"other",params:{guild:discord.Guild,user:discord.User,role:ODRole,result:ODRoleUpdateResult[]},workers:"opendiscord:reaction-role"},
    "opendiscord:reaction-role-dm":{source:"panel-button"|"other",params:{guild:discord.Guild,user:discord.User,role:ODRole,result:ODRoleUpdateResult[]},workers:"opendiscord:reaction-role-dm"},
    "opendiscord:reaction-role-logs":{source:"panel-button"|"other",params:{guild:discord.Guild,user:discord.User,role:ODRole,result:ODRoleUpdateResult[]},workers:"opendiscord:reaction-role-logs"},

    "opendiscord:clear-verify-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,filter:ODTicketClearFilter,list:string[]},workers:"opendiscord:clear-verify-message"},
    "opendiscord:clear-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,filter:ODTicketClearFilter,list:string[]},workers:"opendiscord:clear-message"},
    "opendiscord:clear-logs":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,filter:ODTicketClearFilter,list:string[]},workers:"opendiscord:clear-logs"},

    "opendiscord:autoclose-message":{source:"timeout"|"leave"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:autoclose-message"},
    "opendiscord:autodelete-message":{source:"timeout"|"leave"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:autodelete-message"},
    "opendiscord:autoclose-enable":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,time:number,reason:string|null},workers:"opendiscord:autoclose-enable"},
    "opendiscord:autodelete-enable":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,time:number,reason:string|null},workers:"opendiscord:autodelete-enable"},
    "opendiscord:autoclose-disable":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:autoclose-disable"},
    "opendiscord:autodelete-disable":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:autodelete-disable"},

    "opendiscord:topic-set":{source:"slash"|"text"|"ticket-action"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,topic:string},workers:"opendiscord:topic-set"},
    "opendiscord:priority-set":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,priority:ODPriorityLevel,reason:string|null},workers:"opendiscord:priority-set"},
    "opendiscord:priority-get":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,priority:ODPriorityLevel},workers:"opendiscord:priority-get"},
    "opendiscord:transfer-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,oldCreator:discord.User,newCreator:discord.User,reason:string|null},workers:"opendiscord:transfer-message"},
}

/**## ODMessageManagerIdMappings `interface`
 * A list of all available IDs in the default `ODMessageManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODMessageManagerIdMappings extends api.ODMessageManagerIdConstraint {
    "opendiscord:verifybar-ticket-message":{source:"verifybar",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,originalMessage:discord.Message<boolean>},workers:"opendiscord:verifybar-ticket-message"},
    "opendiscord:verifybar-close-message":{source:"verifybar",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,originalMessage:discord.Message<boolean>},workers:"opendiscord:verifybar-close-message"},
    "opendiscord:verifybar-reopen-message":{source:"verifybar",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,originalMessage:discord.Message<boolean>},workers:"opendiscord:verifybar-reopen-message"},
    "opendiscord:verifybar-claim-message":{source:"verifybar",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,originalMessage:discord.Message<boolean>},workers:"opendiscord:verifybar-claim-message"},
    "opendiscord:verifybar-unclaim-message":{source:"verifybar",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,originalMessage:discord.Message<boolean>},workers:"opendiscord:verifybar-unclaim-message"},
    "opendiscord:verifybar-pin-message":{source:"verifybar",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,originalMessage:discord.Message<boolean>},workers:"opendiscord:verifybar-pin-message"},
    "opendiscord:verifybar-unpin-message":{source:"verifybar",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,originalMessage:discord.Message<boolean>},workers:"opendiscord:verifybar-unpin-message"}
    "opendiscord:verifybar-autoclose-message":{source:"verifybar",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,verifybar:api.ODVerifyBar,originalMessage:discord.Message<boolean>},workers:"opendiscord:verifybar-autoclose-message"}
    
    "opendiscord:error":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,error:string,layout:"simple"|"advanced",customTitle?:string},workers:"opendiscord:error"},
    "opendiscord:error-option-missing":{source:"slash"|"text"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,error:api.ODTextCommandErrorMissingOption},workers:"opendiscord:error-option-missing"},
    "opendiscord:error-option-invalid":{source:"slash"|"text"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,error:api.ODTextCommandErrorInvalidOption},workers:"opendiscord:error-option-invalid"},
    "opendiscord:error-unknown-command":{source:"slash"|"text"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,error:api.ODTextCommandErrorUnknownCommand},workers:"opendiscord:error-unknown-command"},
    "opendiscord:error-no-permissions":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,permissions:ODPermissionEmbedType[]},workers:"opendiscord:error-no-permissions"},
    "opendiscord:error-no-permissions-cooldown":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,until?:Date},workers:"opendiscord:error-no-permissions-cooldown"},
    "opendiscord:error-no-permissions-blacklisted":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-no-permissions-blacklisted"},
    "opendiscord:error-no-permissions-limits":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,limit:"global"|"global-user"|"option"|"option-user"},workers:"opendiscord:error-no-permissions-limits"},
    "opendiscord:error-responder-timeout":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-responder-timeout"},
    "opendiscord:error-ticket-unknown":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-ticket-unknown"},
    "opendiscord:error-ticket-deprecated":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-ticket-deprecated"},
    "opendiscord:error-option-unknown":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-option-unknown"},
    "opendiscord:error-panel-unknown":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-panel-unknown"},
    "opendiscord:error-not-in-guild":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-not-in-guild"},
    "opendiscord:error-channel-rename":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"ticket-pin"|"ticket-unpin"|"ticket-rename"|"ticket-move"|"ticket-priority"|"ticket-transfer"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User,originalName:string,newName:string},workers:"opendiscord:error-channel-rename"},
    "opendiscord:error-ticket-busy":{source:"slash"|"text"|"button"|"dropdown"|"modal"|"other",params:{guild:discord.Guild|null,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:error-ticket-busy"},
    
    "opendiscord:help-menu":{source:"slash"|"text"|"button"|"other",params:{mode:"slash"|"text",page:number},workers:"opendiscord:help-menu"},
    
    "opendiscord:stats-global":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:stats-global"},
    "opendiscord:stats-ticket":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,scopeData:ODTicket},workers:"opendiscord:stats-ticket"},
    "opendiscord:stats-user":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,scopeData:discord.User},workers:"opendiscord:stats-user"|"opendiscord:easter-egg"},
    "opendiscord:stats-reset":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,reason:string|null},workers:"opendiscord:stats-reset"},
    "opendiscord:stats-ticket-unknown":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,id:string},workers:"opendiscord:stats-ticket-unknown"},
    
    "opendiscord:panel":{source:"slash"|"text"|"auto-update"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,panel:ODPanel},workers:"opendiscord:panel-layout"|"opendiscord:panel-components"},
    "opendiscord:panel-ready":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,panel:ODPanel},workers:"opendiscord:panel-ready"},
    
    "opendiscord:ticket-created":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:ticket-created"},
    "opendiscord:ticket-created-dm":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:ticket-created-dm"},
    "opendiscord:ticket-created-logs":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:ticket-created-logs"},
    "opendiscord:ticket-message":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:ticket-message-layout"|"opendiscord:ticket-message-components"|"opendiscord:ticket-message-disable-components"},
    "opendiscord:close-message":{source:"slash"|"text"|"ticket-message"|"reopen-message"|"autoclose"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:close-message"},
    "opendiscord:reopen-message":{source:"slash"|"text"|"ticket-message"|"close-message"|"autoclose-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:reopen-message"},
    "opendiscord:delete-message":{source:"slash"|"text"|"ticket-message"|"reopen-message"|"close-message"|"autoclose-message"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:delete-message"},
    "opendiscord:claim-message":{source:"slash"|"text"|"ticket-message"|"unclaim-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:claim-message"},
    "opendiscord:unclaim-message":{source:"slash"|"text"|"ticket-message"|"claim-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:unclaim-message"},
    "opendiscord:pin-message":{source:"slash"|"text"|"ticket-message"|"unpin-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:pin-message"},
    "opendiscord:unpin-message":{source:"slash"|"text"|"ticket-message"|"pin-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:unpin-message"},
    "opendiscord:rename-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null,data:string},workers:"opendiscord:rename-message"},
    "opendiscord:move-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null,data:ODTicketOption},workers:"opendiscord:move-message"},
    "opendiscord:add-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null,data:discord.User},workers:"opendiscord:add-message"},
    "opendiscord:remove-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null,data:discord.User},workers:"opendiscord:remove-message"},
    "opendiscord:ticket-action-dm":{source:"slash"|"text"|"ticket-message"|"close-message"|"reopen-message"|"delete-message"|"claim-message"|"unclaim-message"|"pin-message"|"unpin-message"|"autoclose-message"|"autoclose"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,mode:"close"|"reopen"|"delete"|"claim"|"unclaim"|"pin"|"unpin"|"rename"|"move"|"add"|"remove",ticket:ODTicket,reason:string|null,additionalData:null|string|discord.User|ODTicketOption},workers:"opendiscord:ticket-action-dm"},
    "opendiscord:ticket-action-logs":{source:"slash"|"text"|"ticket-message"|"close-message"|"reopen-message"|"delete-message"|"claim-message"|"unclaim-message"|"pin-message"|"unpin-message"|"autoclose-message"|"autoclose"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,mode:"close"|"reopen"|"delete"|"claim"|"unclaim"|"pin"|"unpin"|"rename"|"move"|"add"|"remove",ticket:ODTicket,reason:string|null,additionalData:null|string|discord.User|ODTicketOption},workers:"opendiscord:ticket-action-logs"},
    
    "opendiscord:blacklist-view":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User},workers:"opendiscord:blacklist-view"},
    "opendiscord:blacklist-get":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,data:discord.User},workers:"opendiscord:blacklist-get"},
    "opendiscord:blacklist-add":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,data:discord.User,reason:string|null},workers:"opendiscord:blacklist-add"},
    "opendiscord:blacklist-remove":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,data:discord.User,reason:string|null},workers:"opendiscord:blacklist-remove"},
    "opendiscord:blacklist-dm":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,mode:"add"|"remove",data:discord.User,reason:string|null},workers:"opendiscord:blacklist-dm"},
    "opendiscord:blacklist-logs":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,mode:"add"|"remove",data:discord.User,reason:string|null},workers:"opendiscord:blacklist-logs"},

    "opendiscord:transcript-text-ready":{source:"channel"|"creator-dm"|"participant-dm"|"active-admin-dm"|"every-admin-dm"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<{contents:string},null>,result:ODTranscriptCompilerCompileResult<{contents:string}>},workers:"opendiscord:transcript-text-ready"},
    "opendiscord:transcript-html-ready":{source:"channel"|"creator-dm"|"participant-dm"|"active-admin-dm"|"every-admin-dm"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<{url:string,availableUntil:Date},{auth:string}>,result:ODTranscriptCompilerCompileResult<{url:string,availableUntil:Date}>},workers:"opendiscord:transcript-html-ready"},
    "opendiscord:transcript-html-progress":{source:"channel"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<{url:string,availableUntil:Date},{auth:string}>,remaining:number},workers:"opendiscord:transcript-html-progress"},
    "opendiscord:transcript-error":{source:"slash"|"text"|"ticket-message"|"reopen-message"|"close-message"|"autoclose-message"|"autodelete"|"clear"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,compiler:ODTranscriptCompiler<any,object|null>,reason:string|null},workers:"opendiscord:transcript-error"},

    "opendiscord:reaction-role":{source:"panel-button"|"other",params:{guild:discord.Guild,user:discord.User,role:ODRole,result:ODRoleUpdateResult[]},workers:"opendiscord:reaction-role"},
    "opendiscord:reaction-role-dm":{source:"panel-button"|"other",params:{guild:discord.Guild,user:discord.User,role:ODRole,result:ODRoleUpdateResult[]},workers:"opendiscord:reaction-role-dm"},
    "opendiscord:reaction-role-logs":{source:"panel-button"|"other",params:{guild:discord.Guild,user:discord.User,role:ODRole,result:ODRoleUpdateResult[]},workers:"opendiscord:reaction-role-logs"},

    "opendiscord:clear-verify-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,filter:ODTicketClearFilter,list:string[]},workers:"opendiscord:clear-verify-message"},
    "opendiscord:clear-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,filter:ODTicketClearFilter,list:string[]},workers:"opendiscord:clear-message"},
    "opendiscord:clear-logs":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,filter:ODTicketClearFilter,list:string[]},workers:"opendiscord:clear-logs"},

    "opendiscord:autoclose-message":{source:"timeout"|"leave"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:autoclose-message"},
    "opendiscord:autodelete-message":{source:"timeout"|"leave"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:autodelete-message"},
    "opendiscord:autoclose-enable":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,time:number,reason:string|null},workers:"opendiscord:autoclose-enable"},
    "opendiscord:autodelete-enable":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,time:number,reason:string|null},workers:"opendiscord:autodelete-enable"},
    "opendiscord:autoclose-disable":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:autoclose-disable"},
    "opendiscord:autodelete-disable":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,reason:string|null},workers:"opendiscord:autodelete-disable"},

    "opendiscord:topic-set":{source:"slash"|"text"|"ticket-action"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,topic:string},workers:"opendiscord:topic-set"},
    "opendiscord:priority-set":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,priority:ODPriorityLevel,reason:string|null},workers:"opendiscord:priority-set"},
    "opendiscord:priority-get":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,priority:ODPriorityLevel},workers:"opendiscord:priority-get"},
    "opendiscord:transfer-message":{source:"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.GuildTextBasedChannel,user:discord.User,ticket:ODTicket,oldCreator:discord.User,newCreator:discord.User,reason:string|null},workers:"opendiscord:transfer-message"},
}

/**## ODModalManagerIdMappings `interface`
 * A list of all available IDs in the default `ODModalManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODModalManagerIdMappings extends api.ODModalManagerIdConstraint {
    "opendiscord:ticket-questions":{source:"panel-button"|"panel-dropdown"|"slash"|"text"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,option:ODTicketOption},workers:"opendiscord:ticket-questions"}
    "opendiscord:close-ticket-reason":{source:"ticket-message"|"reopen-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:close-ticket-reason"}
    "opendiscord:reopen-ticket-reason":{source:"ticket-message"|"close-message"|"autoclose-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:reopen-ticket-reason"}
    "opendiscord:delete-ticket-reason":{source:"ticket-message"|"reopen-message"|"close-message"|"autoclose-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:delete-ticket-reason"}
    "opendiscord:claim-ticket-reason":{source:"ticket-message"|"unclaim-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:claim-ticket-reason"}
    "opendiscord:unclaim-ticket-reason":{source:"ticket-message"|"claim-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:unclaim-ticket-reason"}
    "opendiscord:pin-ticket-reason":{source:"ticket-message"|"unpin-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:pin-ticket-reason"}
    "opendiscord:unpin-ticket-reason":{source:"ticket-message"|"pin-message"|"other",params:{guild:discord.Guild,channel:discord.TextBasedChannel,user:discord.User,ticket:ODTicket},workers:"opendiscord:unpin-ticket-reason"}
}

/**## ODMappedButtonManager `class
 * A special class with types for the Open Ticket `ODButtonManager` class.
 */
export class ODMappedButtonManager extends api.ODButtonManager<ODButtonManagerIdMappings> {}

/**## ODMappedDropdownManager `class
 * A special class with types for the Open Ticket `ODDropdownManager` class.
 */
export class ODMappedDropdownManager extends api.ODDropdownManager<ODDropdownManagerIdMappings> {}

/**## ODMappedFileManager `class
 * A special class with types for the Open Ticket `ODFileManager` class.
 */
export class ODMappedFileManager extends api.ODFileManager<ODFileManagerIdMappings> {}

/**## ODMappedEmbedManager `class
 * A special class with types for the Open Ticket `ODEmbedManager` class.
 */
export class ODMappedEmbedManager extends api.ODEmbedManager<ODEmbedManagerIdMappings> {}

/**## ODMappedMessageManager `class
 * A special class with types for the Open Ticket `ODMessageManager` class.
 */
export class ODMappedMessageManager extends api.ODMessageManager<ODMessageManagerIdMappings> {}

/**## ODMappedModalManager `class
 * A special class with types for the Open Ticket `ODModalManager` class.
 */
export class ODMappedModalManager extends api.ODModalManager<ODModalManagerIdMappings> {}

/**## ODMappedBuilderManager `class
 * A special class with types for the Open Ticket `ODBuilderManager` class.
 */
export class ODMappedBuilderManager extends api.ODBuilderManager<ODButtonManagerIdMappings,ODDropdownManagerIdMappings,ODFileManagerIdMappings,ODEmbedManagerIdMappings,ODMessageManagerIdMappings,ODModalManagerIdMappings> {}