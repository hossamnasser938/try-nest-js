import { BadRequestException } from "@nestjs/common";

export class ValidationException extends BadRequestException {
    constructor(validationErrorMessage: string) {
        super(validationErrorMessage, {description: 'Bad request - Validation Error'})
    }
}