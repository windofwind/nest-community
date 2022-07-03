import { Exclude } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class UserInfo {
  @Exclude()
  user_seq_no: string;

  @IsString()
  userId: string;

  @IsString()
  user_nick: string;
}

export class UserDetail extends UserInfo {
  @IsNumber()
  user_point: number;
}
