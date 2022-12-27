import { Injectable } from "@nestjs/common";
import { CreateCatDTO } from "./cats.dto";

@Injectable()
export class CatsService {
    findAll(): string {
        return 'This is intended to return all cats'
    }

    findOne(id: string): string {
        return `This is intended to return cat #${id}`
    }

    createOne(createCatDTO: CreateCatDTO): string {
        return `This is intended to create cat with name=${createCatDTO.name} and age=${createCatDTO.age}`
    }
}