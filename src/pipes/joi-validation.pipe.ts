import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common"
import { Schema } from "joi"
import { ValidationException } from "src/exceptions/validation.exception"

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private readonly schema: Schema) {}

    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(value)

        if (error) throw new ValidationException(error.message)

        return value
    }
}
