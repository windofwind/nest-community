import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from 'config';
import { NestPgpromiseModule } from 'nestjs-pgpromise';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

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
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
