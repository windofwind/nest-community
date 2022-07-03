import { Exclude } from 'class-transformer';
import { IsString } from 'class-validator';

export class userInfo {
  @Exclude()
  user_seq_no: string;

  @IsString()
  userId: string;

  @IsString()
  user_nick: string;
}
