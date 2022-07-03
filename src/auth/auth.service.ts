import { Inject, Injectable } from '@nestjs/common';
import { UserInfo } from 'dist/dto/user.dto';
import { ReqLogin } from 'dto/auth/login.dto';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';

@Injectable()
export class AuthService {
  constructor(
    @Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>,
  ) {}

  async login(reqLogin: ReqLogin): Promise<UserInfo | any> {
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

  async find_user() {
    console.info('find_user');
  }
}
