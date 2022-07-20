import { Inject, Injectable, Module } from '@nestjs/common';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';

import { UserInfo } from 'src/dto/user.dto';
import { ReqLogin, ResLogin } from 'src/dto/auth/login.dto';
import { baseHeader } from 'src/dto/base.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly authService: AuthService,
    @Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>,
  ) {}

  public async login(
    headers: baseHeader,
    reqLogin: ReqLogin,
  ): Promise<ResLogin> {
    let result = new ResLogin();

    try {
      const data = await this.pg.task<UserInfo>(
        'request login',
        async (t: ITask<any>) => {
          const user = await this.authService.findUserInfo(reqLogin.user_id, t);

          return user;
        },
      );

      result.data = [data];
    } catch (e: any) {
      console.error(e);
    }

    return result;
  }
}
