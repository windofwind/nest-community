import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RegistController } from './regist.controller';

@Module({
  imports: [],
  controllers: [AuthController, RegistController],
  providers: [AuthService],
})
export class AuthModule {}
