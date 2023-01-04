import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common"
import { plainToInstance } from "class-transformer"
import { validate } from "class-validator"
import { ValidationException } from "src/exceptions/validation.exception"

@Injectable()
export class ClassValidationPipe implements PipeTransform {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.metatypeShouldBeValidated(metatype)) {
            return value
        }

        const classValidatorInstance = plainToInstance(metatype, value)

        const errors = await validate(classValidatorInstance)
        if (errors.length > 0) {
            const errorsMessage = errors
                .map((error) => error.toString())
                .join(", ")
            throw new ValidationException(errorsMessage)
        }

        return value
    }

    metatypeShouldBeValidated(metatype: Function) {
        const jsNativeTypes: Function[] = [
            Number,
            String,
            Boolean,
            Object,
            Array,
        ]
        return !jsNativeTypes.includes(metatype)
    }
}
