import { Injectable } from "@nestjs/common"
import { Cron, CronExpression } from "@nestjs/schedule"

@Injectable()
export class TasksService {
    @Cron(CronExpression.EVERY_10_HOURS, { name: "Arbitrary cron job" })
    doSomething() {
        console.log("fancy thing occurs every 10 hours")
    }
}
