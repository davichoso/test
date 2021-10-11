import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOURL),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,

  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
