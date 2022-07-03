import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import config from 'config';

export const useSwegger = (app): void => {
  if (process.env.NODE_ENV !== 'production') {
    const builderConfig = new DocumentBuilder()
      .setTitle(config.get<string>('swagger.title'))
      .setDescription(config.get<string>('swagger.description'))
      .setVersion(config.get<string>('swagger.version'))
      .build();

    const document = SwaggerModule.createDocument(app, builderConfig);
    SwaggerModule.setup(config.get<string>('swagger.path'), app, document, {
      swaggerOptions: {
        defaultModelsExpandDepth: -1,
        displayRequestDuration: true,
      },
    });
  }
};
