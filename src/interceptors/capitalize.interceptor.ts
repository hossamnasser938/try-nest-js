import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from "@nestjs/common"
import { map, Observable } from "rxjs"

@Injectable()
export class CapitalizeInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        return next
            .handle()
            .pipe(
                map((val) =>
                    typeof val === "string" ? val.toUpperCase() : val,
                ),
            )
    }
}
