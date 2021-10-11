import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';
import { ObjectType, Field, ArgsType, InputType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';


var timestamps = require('mongoose-timestamp2');
@ObjectType({ description: 'entidad del tipo usuarios' })
@Schema()
export class User {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  @Prop({
    required: true, minlength: [8, 'minimo 6 caracteres'],
    maxlength: 40
  })
  title: string;

  @Field()
  @Prop({
    index: true, unique: true, required: true, minlength: [6, 'minimo 6 caracteres'],
    maxlength: 100
  })
  username: string;

  @Field()
  @Prop({ type: Date, required: true })
  birthDate: Date;

  @Field()
  @Prop({ required: true })
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(passportLocalMongoose, { hashField: 'password' });
UserSchema.plugin(timestamps)


export type UserDocument = User & Document;
