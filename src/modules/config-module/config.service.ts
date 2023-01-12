import * as dotenv from "dotenv"
import { Inject, Injectable } from "@nestjs/common"
import { readFileSync } from "fs"
import { IConfigModuleObject } from "src/models/config-object"
import { IConfigModuleOptions } from "src/models/config-options"
import { PROVIDER_TOKENS } from "src/utils/provider-tokens"
import * as path from "path"

@Injectable()
export class ConfigService {
    private configObject: IConfigModuleObject

    constructor(
        @Inject(PROVIDER_TOKENS.CONFIG_OPTIONS)
        private configModuleOptions: IConfigModuleOptions,
    ) {
        const configFilePath = path.join(
            __dirname,
            "../../../",
            configModuleOptions.folder,
            ".env",
        )
        const configFile = readFileSync(configFilePath)
        this.configObject = dotenv.parse(configFile)
    }

    public get(key: string) {
        return this.configObject[key]
    }
}
