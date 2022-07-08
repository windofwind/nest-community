import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsIP,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

/**
 * Headers 정의
 *
 * @export
 * @class baseHeader
 */
export class baseHeader {
  /**
   * JWT 인증서
   *
   * @type {string}
   * @memberof baseHeader
   */
  @IsString()
  @IsOptional()
  authorization: string;

  @IsString()
  host: string;

  /**
   * cloudflare 에서 오는 데이터 - 실제 ip 체크용
   *
   * @type {string}
   * @memberof baseHeader
   */
  @IsString()
  @IsIP()
  ip: string;

  /**
   * cloudflare 에서 오는 국가 데이터 - 해외 접속 막기
   *
   * @type {string}
   * @memberof baseHeader
   */
  @IsString()
  @IsOptional()
  'cf-ipcountry': string;

  /**
   * session id
   *
   * @type {string}
   * @memberof baseHeader
   */
  @IsString()
  @IsNotEmpty()
  sid: string;

  @IsString()
  'user-agent': string;

  @IsString()
  path: string;

  @IsNumberString()
  page: string;

  @IsNumberString()
  limit: string;
}

export class baseReqeust {}

export class baseResponse {
  @ApiProperty({ description: '성공 여부' })
  @IsBoolean()
  @IsNotEmpty()
  success: boolean;
}
