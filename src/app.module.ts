import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { CatsModule } from './resources/cats/cats.module';
import { DogsModule } from './resources/dogs/dogs.module';
import { LoggerMiddleware } from './middlewares/Logger.middleware';
import { authMiddleware } from './middlewares/auth.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionLoggerFilter } from './exception-filters/HttpExceptionLogger';

@Module({
  imports: [CatsModule, DogsModule],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionLoggerFilter
  }]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*')

    consumer
      .apply(authMiddleware)
      .exclude({path: 'cats/:id', method: RequestMethod.GET})
      .forRoutes('cats', 'dogs')
  }
}
