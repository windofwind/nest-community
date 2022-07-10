import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from 'config';
import { MongooseModule } from '@nestjs/mongoose';
import { NestPgpromiseModule } from 'nestjs-pgpromise';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    NestPgpromiseModule.register({
      connection: {
        host: config.get<string>('postgres.host'),
        port: config.get<number>('postgres.port'),
        database: config.get<string>('postgres.database'),
        user: config.get<string>('postgres.user'),
        password: config.get<string>('postgres.password'),
      },
    }),
    MongooseModule.forRoot('mongodb://localhost/logData'),
    AuthModule,
    UploadModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
