import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from "@nestjs/common"
import { CatsModule } from "./resources/cats/cats.module"
import { DogsModule } from "./resources/dogs/dogs.module"
import { LoggerMiddleware } from "./middlewares/Logger.middleware"
import { authMiddleware } from "./middlewares/auth.middleware"
import { APP_FILTER, APP_GUARD, APP_PIPE } from "@nestjs/core"
import { HttpExceptionLoggerFilter } from "./exception-filters/http-exception-logger"
import { ClassValidationPipe } from "./pipes/class-validation.pipe"
import { RolesGuard } from "./guards/roles.guard"

@Module({
    imports: [CatsModule, DogsModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionLoggerFilter,
        },
        {
            provide: APP_PIPE,
            useClass: ClassValidationPipe,
        },
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes("*")

        consumer
            .apply(authMiddleware)
            .exclude({ path: "cats/:id", method: RequestMethod.GET })
            .forRoutes("cats", "dogs")
    }
}
