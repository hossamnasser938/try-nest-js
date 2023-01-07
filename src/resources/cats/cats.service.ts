import { Injectable } from "@nestjs/common"
import { IUser } from "src/models/user"
import { CreateCatDTO } from "./dto/create-cat.dto"

@Injectable()
export class CatsService {
    findAll(user: IUser): string {
        return `This is intended to return all cats for user ${user?.name}`
    }

    findOne(id: number): string {
        return `This is intended to return cat #${id}`
    }

    createOne(createCatDTO: CreateCatDTO): string {
        return `This is intended to create cat with name=${createCatDTO.name} and age=${createCatDTO.age}`
    }
}
