import { User } from "./model/user.model";
import { Document, Schema as MongooseSchema } from 'mongoose';

export const userStub = (): User => {
  return { _id: new MongooseSchema.Types.ObjectId('234234'), title: 'test', username: 'test', birthDate: new Date('2021-10-11T11:15:07.180Z'), password: '', createdAt: new Date('2021-10-11T11:15:07.180Z'), updatedAt: new Date('2021-10-11T11:15:07.180Z') }
}