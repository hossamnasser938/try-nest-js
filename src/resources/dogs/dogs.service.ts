import { Injectable } from "@nestjs/common"
import { CreateDogDTO } from "./dto/create-dog.dto"

@Injectable()
export class DogsService {
    findAll(): string {
        return "This is intended to return all dogs"
    }

    createOne(createDogDTO: CreateDogDTO): string {
        return `This is intended to create dog with name=${createDogDTO.name} and age=${createDogDTO.age}`
    }
}
