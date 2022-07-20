import { Body, Controller, Headers, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReqLogin, ResLogin } from 'src/dto/auth/login.dto';
import { baseHeader, baseResponse } from 'src/dto/base.dto';
import { LoginService } from './login.service';

@ApiTags('auth')
@Controller('auth/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/')
  @ApiOkResponse({ description: 'success', type: ResLogin })
  async doLogin(@Headers() headers: baseHeader, @Body() body: ReqLogin) {
    const result = this.loginService.login(headers, body);
    return result;
  }
}
