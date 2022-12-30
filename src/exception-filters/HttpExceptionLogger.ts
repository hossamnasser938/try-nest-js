import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionLoggerFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()
        const exceptionStatus = exception.getStatus()
        const requestUrl = request.baseUrl + request.url
        
        console.log(
            `Exception with statusCode=${exceptionStatus} on endpoint=${requestUrl}`
        )

        response.status(exceptionStatus).send({statusCode: exceptionStatus, message: exception.message})
    }
}