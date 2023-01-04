import { IsString, IsInt } from "class-validator"

export class CreateDogDTO {
    @IsString()
    name: string

    @IsInt()
    age: number
}
