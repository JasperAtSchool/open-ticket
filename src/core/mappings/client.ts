///////////////////////////////////////
//OPEN TICKET CLIENT MAPPINGS
///////////////////////////////////////
import * as api from "@open-discord-bots/framework/api"

/** (CONTRIBUTOR GUIDE) HOW TO ADD NEW COMMANDS?
 * - Register the command in loadAllSlashCommands() & loadAllTextCommands() in (./src/data/framework/commandLoader.ts)
 * - Add autocomplete for the command in OD(Slash/Text)CommandManagerIds_Default in (./src/core/api/defaults/client.ts)
 * - Add the command to the help menu in (./src/data/framework/helpMenuLoader.ts)
 * - If required, new config variables should be added (incl. logs, dm-logs & permissions).
 * - Update the Open Ticket Documentation.
 * - If the command contains complex logic or can be executed from a button/dropdown, it should be placed inside an `ODAction`.
 * - Check all files, test the bot carefully & try a lot of different scenario's with different settings.
 */

/**## ODSlashCommandManagerIdMappings `interface`
 * A list of all available IDs in the default `ODSlashCommandManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODSlashCommandManagerIdMappings extends api.ODSlashCommandManagerIdConstraint {
    "opendiscord:help":api.ODSlashCommand,
    "opendiscord:panel":api.ODSlashCommand,
    "opendiscord:ticket":api.ODSlashCommand,
    "opendiscord:close":api.ODSlashCommand,
    "opendiscord:delete":api.ODSlashCommand,
    "opendiscord:reopen":api.ODSlashCommand,
    "opendiscord:claim":api.ODSlashCommand,
    "opendiscord:unclaim":api.ODSlashCommand,
    "opendiscord:pin":api.ODSlashCommand,
    "opendiscord:unpin":api.ODSlashCommand,
    "opendiscord:move":api.ODSlashCommand,
    "opendiscord:rename":api.ODSlashCommand,
    "opendiscord:add":api.ODSlashCommand,
    "opendiscord:remove":api.ODSlashCommand,
    "opendiscord:blacklist":api.ODSlashCommand,
    "opendiscord:stats":api.ODSlashCommand,
    "opendiscord:clear":api.ODSlashCommand,
    "opendiscord:autoclose":api.ODSlashCommand,
    "opendiscord:autodelete":api.ODSlashCommand,
    "opendiscord:topic":api.ODSlashCommand,
    "opendiscord:priority":api.ODSlashCommand,
    "opendiscord:transfer":api.ODSlashCommand,
}

/**## ODTextCommandManagerIdMappings `interface`
 * A list of all available IDs in the default `ODTextCommandManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODTextCommandManagerIdMappings extends api.ODTextCommandManagerIdConstraint {
    "opendiscord:dump":api.ODTextCommand,
    "opendiscord:help":api.ODTextCommand,
    "opendiscord:panel":api.ODTextCommand,
    "opendiscord:close":api.ODTextCommand,
    "opendiscord:delete":api.ODTextCommand,
    "opendiscord:reopen":api.ODTextCommand,
    "opendiscord:claim":api.ODTextCommand,
    "opendiscord:unclaim":api.ODTextCommand,
    "opendiscord:pin":api.ODTextCommand,
    "opendiscord:unpin":api.ODTextCommand,
    "opendiscord:move":api.ODTextCommand,
    "opendiscord:rename":api.ODTextCommand,
    "opendiscord:add":api.ODTextCommand,
    "opendiscord:remove":api.ODTextCommand,
    "opendiscord:blacklist-view":api.ODTextCommand,
    "opendiscord:blacklist-add":api.ODTextCommand,
    "opendiscord:blacklist-remove":api.ODTextCommand,
    "opendiscord:blacklist-get":api.ODTextCommand,
    "opendiscord:stats-global":api.ODTextCommand,
    "opendiscord:stats-reset":api.ODTextCommand,
    "opendiscord:stats-ticket":api.ODTextCommand,
    "opendiscord:stats-user":api.ODTextCommand,
    "opendiscord:clear":api.ODTextCommand,
    "opendiscord:autoclose-disable":api.ODTextCommand,
    "opendiscord:autoclose-enable":api.ODTextCommand,
    "opendiscord:autodelete-disable":api.ODTextCommand,
    "opendiscord:autodelete-enable":api.ODTextCommand,
    "opendiscord:topic-set":api.ODTextCommand,
    "opendiscord:priority-set":api.ODTextCommand,
    "opendiscord:priority-get":api.ODTextCommand,
    "opendiscord:transfer":api.ODTextCommand,
}

/**## ODContextMenuManagerIdMappings `interface`
 * A list of all available IDs in the default `ODContextMenuManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODContextMenuManagerIdMappings extends api.ODContextMenuManagerIdConstraint {
    //"opendiscord:test-menu":ODContextMenu
}

/**## ODMappedClientManager `class
 * A special class with types for the Open Ticket `ODClientManager` class.
 */
export class ODMappedClientManager extends api.ODClientManager<ODSlashCommandManagerIdMappings,ODTextCommandManagerIdMappings,ODContextMenuManagerIdMappings> {}

/**## ODMappedSlashCommandManager `class
 * A special class with types for the Open Ticket `ODSlashCommandManager` class.
 */
export class ODMappedSlashCommandManager extends api.ODSlashCommandManager<ODSlashCommandManagerIdMappings> {}

/**## ODMappedTextCommandManager `class
 * A special class with types for the Open Ticket `ODTextCommandManager` class.
 */
export class ODMappedTextCommandManager extends api.ODTextCommandManager<ODTextCommandManagerIdMappings> {}

/**## ODMappedContextMenuManager `class
 * A special class with types for the Open Ticket `ODContextMenuManager` class.
 */
export class ODMappedContextMenuManager extends api.ODContextMenuManager<ODContextMenuManagerIdMappings> {}
