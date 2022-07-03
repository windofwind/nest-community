import { IsNotEmpty, IsString } from 'class-validator';
import {} from 'class-transformer';
export class reqRegist {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  user_pwd: string;

  @IsString()
  @IsNotEmpty()
  user_email: string;
}

export class resRegist {}
