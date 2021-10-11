import { userStub } from "../user.stub";

export const UsersService = jest.fn().mockReturnValue({
  // getUserById: jest.fn().mockResolvedValue(userStub()),
  findAll: jest.fn().mockResolvedValue([userStub()]),
  // createUser: jest.fn().mockResolvedValue(userStub()),
  // updateUser: jest.fn().mockResolvedValue(userStub()),
})