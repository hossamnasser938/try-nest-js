import { Body, Controller, Get, Post } from "@nestjs/common"
import { DogsService } from "./dogs.service"
import { CreateDogDTO } from "./dto/create-dog.dto"

@Controller("dogs")
export class DogsController {
    constructor(private readonly dogsService: DogsService) {}

    @Get()
    findAll() {
        return this.dogsService.findAll()
    }

    @Post()
    createOne(@Body() body: CreateDogDTO) {
        return this.dogsService.createOne(body)
    }
}
