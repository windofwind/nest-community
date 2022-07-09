import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { baseResponse } from '../base.dto';

export class ReqLogin {
  @ApiProperty({ description: '아이디1', required: true })
  @IsString()
  user_id: string;

  @ApiProperty({ description: '패스워드', required: true })
  @IsString()
  user_pwd: string;
}

export class ResLogin extends baseResponse {
  @IsOptional()
  @ValidateNested()
  data: any[] = [];
}
