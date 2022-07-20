import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { RegistController } from './regist.controller';

@Module({
  exports: [],
  imports: [],
  controllers: [AuthController, RegistController, LoginController],
  providers: [AuthService, LoginService],
})
export class AuthModule {}
