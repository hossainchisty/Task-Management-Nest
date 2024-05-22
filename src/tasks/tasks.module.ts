import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskService } from "./tasks.service";
import { TaskController } from "./tasks.controller";
import { TaskSchema } from "./schema/task.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Task", schema: TaskSchema }])],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
