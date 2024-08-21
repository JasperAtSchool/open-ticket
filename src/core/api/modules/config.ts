///////////////////////////////////////
//CONFIG MODULE
///////////////////////////////////////
import { ODId, ODManager, ODManagerData, ODSystemError, ODValidId } from "./base"
import nodepath from "path"
import { ODDebugger } from "./console"

/**## ODConfigManager `class`
 * This is an open ticket config manager.
 * 
 * It manages all config files in the bot and allows plugins to access config files from open ticket & other plugins!
 * 
 * You will use this class to get/add a config file (`ODConfig`) in your plugin!
 * @example
 * //get ./config/general.json => ODConfig class
 * const generalConfig = openticket.configs.get("openticket:general")
 * 
 * //add a new config with id "test" => ./config/test.json
 * const testConfig = new api.ODConfig("test","test.json")
 * openticket.configs.add(testConfig)
 */
export class ODConfigManager extends ODManager<ODConfig> {
    constructor(debug:ODDebugger){
        super(debug,"config")
    }

    /**Add data to the manager. The id will be fetched from the data class! You can optionally select to overwrite existing data!
     * @example
     * //add a new config with id "test" => ./config/test.json
     * const testConfig = new api.ODConfig("test","test.json")
     * openticket.configs.add(testConfig)
    */
    add(data:ODConfig, overwrite?:boolean): boolean {
        return super.add(data,overwrite)
    }
    /**Get data that matches the `ODId`. Returns the found data.
     * @example
     * //get "./config/general.json" (ot-general) => ODConfig class
     * const generalConfig = openticket.configs.get("openticket:general")
     */
    get(id:ODValidId): ODConfig|null {
        return super.get(id)
    }
    /**Remove data that matches the `ODId`. Returns the removed data.
     * @example
     * //remove the "test" config
     * openticket.configs.remove("test") //returns null if non-existing
     */
    remove(id:ODValidId): ODConfig|null {
        return super.remove(id)
    }
    /**Check if data that matches the `ODId` exists. Returns a boolean.
     * @example
     * //check if "./config/general.json" (ot-general) exists => boolean
     * const exists = openticket.configs.exists("openticket:general")
     */
    exists(id:ODValidId): boolean {
        return super.exists(id)
    }
}

/**## ODConfig `class`
 * This is an open ticket config helper.
 * This class doesn't do anything at all, it just gives a template & basic methods for a config. Use `ODJsonConfig` instead!
 * 
 * You will only use this class if you want to create your own config implementation (e.g. `yml`, `xml`,...)!
 */
export class ODConfig extends ODManagerData {
    /**The full path to this config with extension */
    file: string = ""
    /**An object/array of the entire config file! Variables inside it can be edited while the bot is running! */
    data: any = undefined
}

/**## ODJsonConfig `class`
 * This is an open ticket config helper.
 * You will use this class to get & edit variables from the config files or to create your own config!
 * @example
 * //create a config from: ./config/test.json with the id "some-config"
 * const config = new api.ODJsonConfig("some-config","test.json")
 * 
 * //create a config with custom dir: ./plugins/testplugin/test.json
 * const config = new api.ODJsonConfig("plugin-config","test.json","./plugins/testplugin/")
 */
export class ODJsonConfig extends ODConfig {
    constructor(id:ODValidId, file:string, customPath?:string){
        super(id)
        try {
            const filename = (file.endsWith(".json")) ? file : file+".json"
            this.file = customPath ? nodepath.join("./",customPath,filename) : nodepath.join("./config/",filename)
            this.data = customPath ? require(nodepath.join("../../../../",customPath,filename)) : require(nodepath.join("../../../../config",filename))
        }catch{
            throw new ODSystemError("config \""+nodepath.join("./",customPath ?? "",file)+"\" doesn't exist!")
        }
    }
}