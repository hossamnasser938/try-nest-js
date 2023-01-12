import { DynamicModule } from "@nestjs/common"
import { IConfigModuleOptions } from "src/models/config-options"
import { PROVIDER_TOKENS } from "src/utils/provider-tokens"
import { ConfigService } from "./config.service"

export class ConfigModule {
    public static register(configOptions: IConfigModuleOptions): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: PROVIDER_TOKENS.CONFIG_OPTIONS,
                    useValue: configOptions,
                },
                ConfigService,
            ],
            exports: [ConfigService],
        }
    }
}
