import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDTO } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll(): string {
        return this.catsService.findAll()
    }

    @Get('/:id')
    findOne(@Param('id') id: string) {
        return this.catsService.findOne(id)
    }

    @Post()
    createOne(@Body() body: CreateCatDTO): string {
        return this.catsService.createOne(body)
    } 
}
