///////////////////////////////////////
//OPEN TICKET VERIFYBAR MAPPINGS
///////////////////////////////////////
import * as api from "@open-discord-bots/framework/api"

/**## ODVerifyBarManagerIdMappings `interface`
 * A list of all available IDs in the default `ODVerifyBarManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODVerifyBarManagerIdMappings extends api.ODVerifyBarManagerIdConstraint {
    "opendiscord:claim-ticket-ticket-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:claim-ticket",failureWorkerIds:"opendiscord:back-to-ticket-message"},
    "opendiscord:claim-ticket-unclaim-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:claim-ticket",failureWorkerIds:"opendiscord:back-to-unclaim-message"},
    "opendiscord:unclaim-ticket-ticket-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:unclaim-ticket",failureWorkerIds:"opendiscord:back-to-ticket-message"},
    "opendiscord:unclaim-ticket-claim-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:unclaim-ticket",failureWorkerIds:"opendiscord:back-to-claim-message"},
    "opendiscord:pin-ticket-ticket-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:pin-ticket",failureWorkerIds:"opendiscord:back-to-ticket-message"},
    "opendiscord:pin-ticket-unpin-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:pin-ticket",failureWorkerIds:"opendiscord:back-to-unpin-message"},
    "opendiscord:unpin-ticket-ticket-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:unpin-ticket",failureWorkerIds:"opendiscord:back-to-ticket-message"},
    "opendiscord:unpin-ticket-pin-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:unpin-ticket",failureWorkerIds:"opendiscord:back-to-pin-message"},
    "opendiscord:close-ticket-ticket-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:close-ticket",failureWorkerIds:"opendiscord:back-to-ticket-message"},
    "opendiscord:close-ticket-reopen-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:close-ticket",failureWorkerIds:"opendiscord:back-to-reopen-message"},
    "opendiscord:reopen-ticket-ticket-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:reopen-ticket",failureWorkerIds:"opendiscord:back-to-ticket-message"},
    "opendiscord:reopen-ticket-close-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:reopen-ticket",failureWorkerIds:"opendiscord:back-to-close-message"},
    "opendiscord:reopen-ticket-autoclose-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:reopen-ticket",failureWorkerIds:"opendiscord:back-to-autoclose-message"},
    "opendiscord:delete-ticket-ticket-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:delete-ticket",failureWorkerIds:"opendiscord:back-to-ticket-message"}
    "opendiscord:delete-ticket-close-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:delete-ticket",failureWorkerIds:"opendiscord:back-to-close-message"}
    "opendiscord:delete-ticket-reopen-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:delete-ticket",failureWorkerIds:"opendiscord:back-to-reopen-message"}
    "opendiscord:delete-ticket-autoclose-message":{successWorkerIds:"opendiscord:permissions"|"opendiscord:delete-ticket",failureWorkerIds:"opendiscord:back-to-autoclose-message"}
}

/**## ODMappedVerifyBarManager `class
 * A special class with types for the Open Ticket `ODVerifyBarManager` class.
 */
export class ODMappedVerifyBarManager extends api.ODVerifyBarManager<ODVerifyBarManagerIdMappings> {}