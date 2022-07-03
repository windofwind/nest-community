import { ValidationPipe } from '@nestjs/common';

export const useValidate = (app): void => {
  app.disable('x-powered-by');
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
};
