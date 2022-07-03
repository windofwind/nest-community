import { IsNotEmpty, IsString } from 'class-validator';
import {} from 'class-transformer';

export class ReqRegist {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  user_pwd: string;

  @IsString()
  @IsNotEmpty()
  user_email: string;

  @IsString()
  @IsNotEmpty()
  access_fl: string;
}

export class ResRegist {}
