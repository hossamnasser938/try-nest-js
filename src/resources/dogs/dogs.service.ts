import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    findAll(): string {
        return 'This is intended to return all dogs'
    }
}
