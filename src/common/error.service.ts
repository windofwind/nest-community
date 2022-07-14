export interface ICustomError {
  statusCode: number;
  errorCode: string;
}

export class CustomError extends Error implements ICustomError {
  statusCode: number = 400;
  errorCode: string = '';

  constructor(message: string = '') {
    super(message);
  }
}

export class LoginFailError extends CustomError {
  statusCode: number = 400;
  errorCode: string = '1001';

  constructor(message: string = '로그인에 실패 하였습니다.') {
    super(message);
  }
}
