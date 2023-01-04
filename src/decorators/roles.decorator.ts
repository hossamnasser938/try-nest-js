import { SetMetadata } from "@nestjs/common"

export const SetRolesMetadata = (...roles: string[]) =>
    SetMetadata("roles", roles)
