import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserService } from "./users.service";
import { UserController } from "./users.controller";
import { UserSchema } from "./schema/users.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
