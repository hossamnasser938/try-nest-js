import { ArgumentsHost, Catch, HttpException } from "@nestjs/common";
import { BaseExceptionFilter, HttpAdapterHost } from "@nestjs/core";

@Catch(HttpException)
export class HttpExceptionLoggerFilter extends BaseExceptionFilter {
    constructor(private readonly htppAdapterHost: HttpAdapterHost) {
        super()
    }

    catch(exception: HttpException, host: ArgumentsHost) {
        const {httpAdapter} = this.htppAdapterHost

        const ctx = host.switchToHttp()
        const request = ctx.getRequest()
        const exceptionStatus = exception.getStatus()
        const requestUrl = httpAdapter.getRequestUrl(request)
        
        console.log(
            `Exception with statusCode=${exceptionStatus} on endpoint=${requestUrl}`
        )

        super.catch(exception, host)
    }
}