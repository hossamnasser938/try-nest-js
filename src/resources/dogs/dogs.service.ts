import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { CreateDogDTO } from "./dto/create-dog.dto"
import { Dog } from "./dog.entity"

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dog) private dogRepository: Repository<Dog>,
    ) {}

    findAll(): Promise<Dog[]> {
        return this.dogRepository.find()
    }

    async createOne(createDogDTO: CreateDogDTO): Promise<Dog> {
        const { name, age } = createDogDTO
        const dog = new Dog()
        dog.name = name
        dog.age = age
        await this.dogRepository.insert(dog)
        return dog
    }
}
