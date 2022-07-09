import { NestFactory } from '@nestjs/core';

import config from 'config';
import { v4 } from 'internal-ip';
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

  useValidate(app);
  useSwegger(app);
  useSentry(app);

  await app.listen(
    config.get<number>('server.port'),
    config.get<string>('server.host'),
  );

  // console.info(`http://${v4.sync()}:${config.get<number>('server.port')}/api`);
  // console.info(
  //   `http://${'localhost'}:${config.get<number>('server.port')}/api`,
  // );
}

bootstrap();
