import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('/Logout')
  // @ApiOkResponse({ description: 'success', type: baseResponse })
  // async doLogout(
  //   @Headers() headers: baseHeader,
  //   @Body() body: ReqLogin,
  // ): Promise<baseResponse> {
  //   const result = this.authService.login(body);
  //   return result;
  // }

  // @Get('/History')
  // async getHistory() {
  //   return { desc: 'history' };
  // }
}
