import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get(':person')
  getHelloPerson(@Param() params: {person: string}): string {
    return this.appService.getHelloPerson(params.person)
  }
}
