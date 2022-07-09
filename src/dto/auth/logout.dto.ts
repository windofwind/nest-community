import { IsOptional, ValidateNested } from 'class-validator';
import { baseResponse } from '../base.dto';

export class ReqLogout {}

export class ResLogout extends baseResponse {
  @IsOptional()
  @ValidateNested()
  data: any[] = [];
}
