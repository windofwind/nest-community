import { IsOptional, IsString } from 'class-validator';
import { baseResponse } from 'src/dto/base.dto';

export class ReqLogout {
  @IsString()
  @IsOptional()
  user_id: string;
}

export class ResLogout extends baseResponse {}
