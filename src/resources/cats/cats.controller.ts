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
import { SetRolesMetadata } from "src/decorators/roles.decorator"
import { User } from "src/decorators/user.decorator"

@Controller("cats")
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @SetRolesMetadata("admin")
    @Get()
    findAll(@User() user): string {
        return this.catsService.findAll(user)
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
