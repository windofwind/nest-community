import {} from '@nestjs/swagger';
import { IsOptional, ValidateNested } from 'class-validator';
import { baseResponse } from '../base.dto';

export class ReqHistory {}

export class ResHistory extends baseResponse {
  @IsOptional()
  @ValidateNested()
  data: any[] = [];
}
