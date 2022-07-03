import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ReqLogin {
  @ApiProperty({ description: '아이디1', required: true })
  @IsString()
  user_id: string;

  @ApiProperty({ description: '패스워드', required: true })
  @IsString()
  user_pwd: string;
}
