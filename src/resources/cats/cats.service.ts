import { Injectable } from "@nestjs/common"
import { IUser } from "src/models/user"
import { ConfigService } from "src/modules/config-module/config.service"
import { CreateCatDTO } from "./dto/create-cat.dto"

@Injectable()
export class CatsService {
    constructor(private configService: ConfigService) {}

    findAll(user: IUser): string {
        return `This is intended to return all cats for user ${
            user?.name
        } on env ${this.configService.get("env")}`
    }

    findOne(id: number): string {
        return `This is intended to return cat #${id}`
    }

    createOne(createCatDTO: CreateCatDTO): string {
        return `This is intended to create cat with name=${createCatDTO.name} and age=${createCatDTO.age}`
    }
}
