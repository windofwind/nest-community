import { ValidationPipe } from '@nestjs/common';

export const useValidate = (app): void => {
  app.disable('x-powered-by');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      validationError: { target: false },
      forbidNonWhitelisted: true,
      transform: true,
      skipMissingProperties: true,
    }),
  );
};
