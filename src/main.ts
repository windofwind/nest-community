import { NestFactory } from '@nestjs/core';

import compression from 'compression';
import config from 'config';
// import { v4 } from 'internal-ip';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { AppModule } from './app.module';
import { useSwegger } from './lib/useSwegger';
import { useValidate } from './lib/useValidate';
import { useSentry } from './lib/useSentry';

async function bootstrap() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('Asia/Seoul');

  const app = await NestFactory.create(AppModule);

  app.use(compression());
  useValidate(app);
  useSwegger(app);
  useSentry(app);

  await app.listen(
    config.get<number>('server.port'),
    config.get<string>('server.host'),
  );

  console.log(`Application is running on: ${await app.getUrl()}/api`);
}

bootstrap();
