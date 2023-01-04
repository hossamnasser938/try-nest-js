import { Injectable } from "@nestjs/common"
import { CreateCatDTO } from "./dto/create-cat.dto"

@Injectable()
export class CatsService {
    findAll(): string {
        return "This is intended to return all cats"
    }

    findOne(id: number): string {
        return `This is intended to return cat #${id}`
    }

    createOne(createCatDTO: CreateCatDTO): string {
        return `This is intended to create cat with name=${createCatDTO.name} and age=${createCatDTO.age}`
    }
}
