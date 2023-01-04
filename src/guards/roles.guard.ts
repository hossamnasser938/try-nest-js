import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { Request } from "express"
import { Observable } from "rxjs"
import { IUser } from "src/models/user"

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    rolesMath(roles: string[], user: IUser) {
        return roles.every((role) => user.roles.includes(role))
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>(
            "roles",
            context.getHandler(),
        )
        if (!roles) return true

        const request = context.switchToHttp().getRequest<Request>()

        return this.rolesMath(roles, request.user)
    }
}
