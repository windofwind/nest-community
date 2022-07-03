import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class baseHeader {
  @IsString()
  @IsOptional()
  authorization: string;

  @IsString()
  sid: string;
}

export class baseReqeust {}

export class baseResponse {
  @ApiProperty({ description: '성공 여부' })
  @IsBoolean()
  @IsNotEmpty()
  success: boolean;
}
