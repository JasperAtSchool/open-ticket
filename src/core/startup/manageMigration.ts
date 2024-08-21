import {openticket, api, utilities} from "../../index"

export const loadVersionMigrationSystem = async () => {
    //ENTER MIGRATION CONTEXT
    await preloadMigrationContext()

    const lastVersion = isMigrationRequired()
    openticket.versions.add(lastVersion ? lastVersion : api.ODVersion.fromString("openticket:last-version",openticket.versions.get("openticket:version").toString()))
    if (lastVersion && !openticket.flags.get("openticket:no-migration").value){
        //MIGRATION IS REQUIRED
        openticket.log("Detected old data!","info")
        openticket.log("Starting closed API context...","debug")
        await utilities.timer(600)
        openticket.log("Migrating data to new version...","debug")
        await loadAllVersionMigrations(lastVersion)
        openticket.log("Stopping closed API context...","debug")
        await utilities.timer(400)
        openticket.log("All data is now up to date!","info")
        await utilities.timer(200)
        console.log("---------------------------------------------------------------------")
    }
    saveAllVersionsToDatabase()

    //DEFAULT FLAGS
    if (openticket.flags.exists("openticket:no-plugins") && openticket.flags.get("openticket:no-plugins").value) openticket.defaults.setDefault("pluginLoading",false)
    if (openticket.flags.exists("openticket:soft-plugins") && openticket.flags.get("openticket:soft-plugins").value) openticket.defaults.setDefault("softPluginLoading",true)
    if (openticket.flags.exists("openticket:crash") && openticket.flags.get("openticket:crash").value) openticket.defaults.setDefault("crashOnError",true)
    if (openticket.flags.exists("openticket:force-slash-update") && openticket.flags.get("openticket:force-slash-update").value) openticket.defaults.setDefault("forceSlashCommandRegistration",true)

    //LEAVE MIGRATION CONTEXT
    await unloadMigrationContext()
}

const preloadMigrationContext = async () => {
    openticket.debug.debug("-- MIGRATION CONTEXT START --")
    await (await import("../../data/framework/flagLoader.ts")).loadAllFlags()
    openticket.flags.init()
    await (await import("../../data/framework/configLoader.ts")).loadAllConfigs()
    await (await import("../../data/framework/databaseLoader.ts")).loadAllDatabases()
    openticket.debug.visible = true
}

const unloadMigrationContext = async () => {
    openticket.debug.visible = false
    openticket.databases.getAll().forEach((database) => openticket.databases.remove(database.id))
    openticket.configs.getAll().forEach((config) => openticket.configs.remove(config.id))
    openticket.flags.getAll().forEach((flag) => openticket.flags.remove(flag.id))
    openticket.debug.debug("-- MIGRATION CONTEXT END --")
}

const isMigrationRequired = (): false|api.ODVersion => {
    const rawVersion = openticket.databases.get("openticket:global").get("openticket:last-version","openticket:version")
    if (!rawVersion) return false
    const version = api.ODVersion.fromString("openticket:last-version",rawVersion)
    if (openticket.versions.get("openticket:version").compare(version) == "higher"){
        return version
    }else return false
}

const loadAllVersionMigrations = async (lastVersion:api.ODVersion) => {
    const migrations = (await import("./migration.ts")).migrations
    migrations.sort((a,b) => {
        const comparison = a.version.compare(b.version)
        if (comparison == "equal") return 0
        else if (comparison == "higher") return 1
        else return -1
    })
    for (const migration of migrations){
        if (migration.version.compare(lastVersion) == "higher"){
            const success = await migration.migrate()
            if (success) openticket.log("Migrated data to "+migration.version.toString()+"!","debug",[
                {key:"success",value:success ? "true" : "false"}
            ])
        }
    }
}

const saveAllVersionsToDatabase = async () => {
    const globalDatabase = openticket.databases.get("openticket:global")

    openticket.versions.getAll().forEach((version) => {
        globalDatabase.set("openticket:last-version",version.id.value,version.toString())    
    })
}