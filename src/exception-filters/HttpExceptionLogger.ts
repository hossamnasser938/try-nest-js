import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

@Catch(HttpException)
export class HttpExceptionLoggerFilter implements ExceptionFilter {
    constructor(private readonly htppAdapterHost: HttpAdapterHost) {}

    catch(exception: HttpException, host: ArgumentsHost) {
        const {httpAdapter} = this.htppAdapterHost

        const ctx = host.switchToHttp()
        const request = ctx.getRequest()
        const response = ctx.getResponse()
        const exceptionStatus = exception.getStatus()
        const requestUrl = httpAdapter.getRequestUrl(request)
        
        console.log(
            `Exception with statusCode=${exceptionStatus} on endpoint=${requestUrl}`
        )

        const responseBody = {statusCode: exceptionStatus, message: exception.message}

        httpAdapter.reply(response, responseBody, exceptionStatus)
    }
}