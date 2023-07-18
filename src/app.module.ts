import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

////////////////////////////////////////////////////////////////////

import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongodbConfig from './config/mongodb.config';
import { HandbooksModule } from './handbook/handbooks.module';

////////////////////////////////////////////////////////////////////
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mongodbConfig],
      isGlobal: true
   }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   playground: false, // this line is the only change in your code
    //   // @ts-ignore
    //   plugins: [ApolloServerPluginLandingPageLocalDefault],
    // }),
    NestGraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        installSubscriptionHandlers: true,
        sortSchema: true,
        playground: false, // this line is the only change in your code
        // @ts-ignore
        plugins: [ApolloServerPluginLandingPageLocalDefault],
        debug: configService.get<boolean>("DEBUG"),
        uploads: false,
      }),
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI')
      })
    }),
    HelloWorldModule,
    HandbooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
