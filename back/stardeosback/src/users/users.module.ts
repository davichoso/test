import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema, User} from './model/user.model';


@Module({
  providers: [UsersService, UsersResolver, UsersResolver],
  controllers: [UsersController],
  exports: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ]
})
export class UsersModule { }
