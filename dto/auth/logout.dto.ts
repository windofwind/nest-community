import { IsOptional, IsString } from 'class-validator';
import { baseResponse } from 'dist/dto/base.dto';

export class ReqLogout {
  @IsString()
  @IsOptional()
  user_id: string;
}

export class ResLogout extends baseResponse {}
