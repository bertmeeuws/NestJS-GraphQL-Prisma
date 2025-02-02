import { UsersService } from './users/users.service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core';
import { UsersModule } from './users/users.module';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLDateTime } from 'graphql-iso-date';
import { InjectRedis, RedisModule } from '@liaoliaots/nestjs-redis';
import { config, minio_config } from './config/index';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { Redis } from 'ioredis';
import { CoachModule } from './coach/coach.module';
import { ClientModule } from './client/client.module';
import { InviteModule } from './invite/invite.module';
import { NotificationModule } from './notification/notification.module';
import { MinioModule } from 'nestjs-minio-client';
import { MinioClientModule } from './minio-client/minio-client.module';
import { DietModule } from './diet/diet.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLUpload } from 'graphql-upload';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
      //plugins: [ApolloServerPluginLandingPageLocalDefault() , ApolloServerPluginLandingPageDisabled()],
      resolvers: { DateTime: GraphQLDateTime, Upload: GraphQLUpload },
      uploads: false,
      cors: {
        credentials: true,
        origin: [
          'https://studio.apollogaphql.com',
          'http://localhost:3000/graphql',
          'http://localhost:3002',
          '*'
        ],
        methods: 'GET, PUT, POST, DELETE'
      },
      context: ({ req, res }) => ({ req, res })
    }),
    RedisModule.forRoot({
      closeClient: true,
      config: {
        ...config.redis
      }
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    CoachModule,
    ClientModule,
    InviteModule,
    NotificationModule,
    MinioClientModule,
    DietModule,
    WorkoutModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
