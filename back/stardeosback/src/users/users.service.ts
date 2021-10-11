import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './model/user.model';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    findAll(): Promise<UserDocument[]> {
        
        return this.userModel.find().sort({ $natural: -1 }).exec();
    }


    create(object): Promise<UserDocument> {
        const user = new this.userModel(object);
        return user.save();
    }
}
