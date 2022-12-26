import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  getHelloPerson(person: string): string {
    return `Hello ${person}!`
  }
}
