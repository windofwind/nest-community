import { ValidationPipe } from '@nestjs/common';

export const useValidate = (app): void => {
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
};
