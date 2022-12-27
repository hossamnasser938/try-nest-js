import { Controller, Get, Param, Query } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('person') person?: string): string {
    if (person) {
      return this.appService.getHelloPerson(person)
    }
    return this.appService.getHello()
  }
}
