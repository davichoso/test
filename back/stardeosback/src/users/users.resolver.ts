import { Inject } from '@nestjs/common';
import { UsersService } from './users.service';
import { Args, Mutation, Query, Resolver, Float, Int } from '@nestjs/graphql';
import { User } from './model/user.model'
import { text } from 'stream/consumers';

@Resolver(() => User)
export class UsersResolver {

    constructor(
        @Inject(UsersService) private readonly usersService: UsersService,
        // private readonly configService: ConfigService
    ) { }


    @Query(returns => String!)
    helloWord(): string {
        return 'hola mundo'
    }

    @Query(returns => [User], { description: 'funcion que retorna todos los usuarios' })
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }






    @Mutation(() => User, { description: 'funcion para crear al usuario' })
    createUser(
        @Args('title') title: string,
        @Args('username') username: string,
        @Args('password') password: string,
        @Args('email') email: string,
        @Args('birthDate', { type: () => Date }) birthDate: string
    ):Promise<User> 
    {
        console.log('test')
        console.log({ title, username, password, email, birthDate })
        return this.usersService.create({ title, username, password, email, birthDate });
    }


}
