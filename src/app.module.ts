import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { CatsModule } from './resources/cats/cats.module';
import { DogsModule } from './resources/dogs/dogs.module';
import { LoggerMiddleware } from './middlewares/Logger.middleware';
import { authMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [CatsModule, DogsModule],
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
