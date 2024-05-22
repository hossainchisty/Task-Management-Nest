import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app.module";
import { TaskService } from "./src/tasks/tasks.service";
import { UserService } from "./src/users/users.service";
import { CreateTaskDto } from "./src/tasks/dto/create-task.dto";
import { CreateUserDto } from "./src/users/dto/create-user.dto";
import { faker } from "@faker-js/faker";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const taskService = app.get(TaskService);
  const userService = app.get(UserService);

  // Create demo users
  for (let i = 0; i < 15; i++) {
    const createUserDto: CreateUserDto = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: "password123", // Ensure that this matches your CreateUserDto validation rules
    };
    await userService.create(createUserDto);
  }

  // Create demo tasks
  for (let i = 0; i < 15; i++) {
    const createTaskDto: CreateTaskDto = {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      status: Math.random() > 0.5 ? "completed" : "pending",
    };
    await taskService.create(createTaskDto);
  }

  console.log("Seeding completed");
  await app.close();
}

bootstrap();
