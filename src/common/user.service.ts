import { Inject, Injectable } from '@nestjs/common';
import { UserInfo } from 'src/dto/user.dto';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';

@Injectable()
export class User {
  constructor(
    @Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>,
  ) {}

  public async find_user(user_id: string) {
    let userInfo;

    try {
      userInfo = await this.pg.task('find user', async (t: ITask<any>) => {
        const userInfo = await t.one<UserInfo>(
          'SELECT * FROM user_info WHERE user_id = ${user_id};',
          { user_id },
        );

        return userInfo;
      });
    } catch (e: any) {
      console.error(e);
    }

    return userInfo;
  }
}
