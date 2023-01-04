import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
} from "@nestjs/common"
import { CreateCatDTO } from "./dto/create-cat.dto"
import { CatsService } from "./cats.service"
import { JoiValidationPipe } from "src/pipes/joi-validation.pipe"
import { createCatSchema } from "./schema/create-cat.schema"

@Controller("cats")
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll(): string {
        return this.catsService.findAll()
    }

    @Get("/:id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.catsService.findOne(id)
    }

    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema))
    createOne(@Body() body: CreateCatDTO): string {
        return this.catsService.createOne(body)
    }
}
