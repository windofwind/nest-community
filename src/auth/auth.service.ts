import { Inject, Injectable } from '@nestjs/common';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';

import { UserInfo } from 'src/dto/user.dto';
import { ReqLogin } from 'src/dto/auth/login.dto';
import { baseResponse } from 'src/dto/base.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>,
  ) {}

  /**
   * 로그인 성공 또는 실패시 로그인 테이블에 기록합니다.
   *
   * @param {ITask<any>} [t=this.pg]
   * @memberof AuthService
   */
  public async writeLoginInfo(t: ITask<any>) {
    const result = await t.none('', {});

    return result;
  }

  public async findUserInfo(
    user_id: string,
    dbConnection: ITask<any>,
  ): Promise<UserInfo> {
    let userInfo;
    try {
      userInfo = await dbConnection.one<UserInfo>(
        'SELECT * FROM user_info WHERE user_id = ${user_id};',
        { user_id },
      );
    } catch (e) {
      throw e;
    }

    return userInfo;
  }
}
