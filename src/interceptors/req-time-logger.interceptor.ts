import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from "@nestjs/common"
import { Request } from "express"
import { Observable, tap } from "rxjs"

@Injectable()
export class ReqTimeLoggerInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        const req = context.switchToHttp().getRequest<Request>()
        const reqUrl = req.baseUrl + req.url
        const now = Date.now()
        return next
            .handle()
            .pipe(
                tap(() =>
                    console.log(
                        `request ${reqUrl} = ${Date.now() - now} ms elapsed`,
                    ),
                ),
            )
    }
}
