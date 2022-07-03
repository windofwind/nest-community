import { Inject, Injectable } from '@nestjs/common';
import { UserInfo } from 'dto/user.dto';
import { ReqLogin } from 'dto/auth/login.dto';
import { UserDetail } from 'dto/user.dto';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';

@Injectable()
export class AuthService {
  constructor(
    @Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>,
  ) {}

  public async login(reqLogin: ReqLogin): Promise<UserInfo | any> {
    let user;

    try {
      user = await this.pg.task('request login', async (t: ITask<any>) => {
        const user = await t.one<UserInfo>(
          'SELECT * FROM user_info WHERE user_id = ${user_id} AND user_pwd = ${user_pwd};',
          reqLogin,
        );

        return user;
      });

      return user;
    } catch (e: any) {
      console.error(e);
    }

    return user;
  }

  public async find_user(user_id: string) {
    let userInfo;

    try {
      userInfo = await this.pg.task('find user', async (t: ITask<any>) => {
        const userInfo = await t.one<UserDetail>(
          'SELECT * FROM user_info WHERE user_id = ${user_id};',
          { user_id },
        );

        return userInfo;
      });
    } catch (e: any) {}

    return userInfo;
  }
}
