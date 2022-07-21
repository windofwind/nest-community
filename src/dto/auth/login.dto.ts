import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { userInfo } from 'os';
import { baseResponse } from '../base.dto';
import { UserInfo } from '../user.dto';

export class ReqLogin {
  @ApiProperty({ description: '아이디1', required: true })
  @IsString()
  user_id: string;

  @ApiProperty({ description: '패스워드', required: true })
  @IsString()
  user_pwd: string;
}

export class ResLogin extends baseResponse {
  @ApiProperty({
    description: '유저정보',
    required: true,
    type: UserInfo,
    isArray: true,
  })
  @IsOptional()
  @ValidateNested()
  data: UserInfo[] = [];
}
