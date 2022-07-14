import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth/regist')
export class RegistController {
  constructor() {
    //
  }

  @Post('/')
  async doRegist() {
    return {};
  }
}
