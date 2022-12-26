import { Controller, Get, Param, Query } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: {person?: string}): string {
    if (query.person) {
      return this.appService.getHelloPerson(query.person)
    }
    return this.appService.getHello()
  }
}
