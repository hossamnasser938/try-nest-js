import * as request from "supertest"
import { INestApplication } from "@nestjs/common"
import { Test } from "@nestjs/testing"
import { DogsController } from "../dogs.controller"
import { DogsService } from "../dogs.service"

describe("dogs resource", () => {
    let app: INestApplication
    const dogsService = { findAll: () => ["dog1", "dog2"] }

    beforeEach(async () => {
        const dogsModuleRef = await Test.createTestingModule({
            controllers: [DogsController],
            providers: [DogsService],
        })
            .overrideProvider(DogsService)
            .useValue(dogsService)
            .compile()

        app = dogsModuleRef.createNestApplication()
    })

    test("get dogs", () => {
        request(app.getHttpServer())
            .get("/dogs")
            .expect(200)
            .expect(dogsService.findAll())
    })

    afterAll(() => {
        app.close()
    })
})
