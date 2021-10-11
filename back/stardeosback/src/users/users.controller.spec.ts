
import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserDocument } from './model/user.model';
import { userStub } from './user.stub';

jest.mock('./users.service');

describe('UsersController', () => {
    let usersController: UsersController;
    let usersService: UsersService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
          imports: [],
          controllers: [UsersController],
          providers: [UsersService]
        }).compile();
    
        usersController = moduleRef.get<UsersController>(UsersController);
        usersService = moduleRef.get<UsersService>(UsersService);
        jest.clearAllMocks();
      })

    describe('getUsers', () => {
        describe('when getUsers is called', () => {
          let users: User[];
    
          beforeEach(async () => {
            users = await usersController.getUsers();
            console.log(users);
          })
    
          test('then it should call usersService', () => {
            expect(usersService.findAll).toHaveBeenCalled();
          })
    
          test('then it should return users', () => {
            expect(users).toEqual([userStub()])
          })
        })
      })

});