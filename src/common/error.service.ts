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
