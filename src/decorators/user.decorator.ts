import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { Request } from "express"
import { IUser } from "src/models/user"

export const User = createParamDecorator(
    (data: unknown, context: ExecutionContext): IUser => {
        const request = context.switchToHttp().getRequest<Request>()
        return request.user
    },
)
