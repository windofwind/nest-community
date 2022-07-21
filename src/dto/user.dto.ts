import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class UserInfo {
  @Exclude()
  user_seq_no: string;

  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  user_nick: string;
}

export class UserDetail extends UserInfo {
  @ApiProperty()
  @IsNumber()
  user_point: number;
}
