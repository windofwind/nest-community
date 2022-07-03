import { Body, Controller, Headers, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReqLogin } from 'src/dto/auth/login.dto';
import { baseHeader, baseResponse } from 'src/dto/base.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/Login')
  @ApiOkResponse({ description: 'success', type: baseResponse })
  async doLogin(
    @Headers() headers: baseHeader,
    @Body() body: ReqLogin,
  ): Promise<any> {
    const result = this.authService.login(body);
    return result;
  }
}
