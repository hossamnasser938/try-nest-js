import { Controller, Get, Param } from '@nestjs/common';
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
}
