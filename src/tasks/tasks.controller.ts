import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll() {
    return this.taskService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() updateTaskDto: CreateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.taskService.delete(id);
  }
}
