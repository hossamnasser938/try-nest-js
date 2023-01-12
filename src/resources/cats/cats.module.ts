import { Module } from "@nestjs/common"
import { ConfigModule } from "src/modules/config-module/config.module"
import { CatsController } from "./cats.controller"
import { CatsService } from "./cats.service"

@Module({
    imports: [ConfigModule.register({ folder: "config" })],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
