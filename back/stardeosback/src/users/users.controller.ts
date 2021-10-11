import { Controller, Get } from '@nestjs/common';
import { User } from './model/user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
