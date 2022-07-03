import * as Sentry from '@sentry/node';
import config from 'config';

export const useSentry = (app): void => {
  Sentry.init({
    dsn: config.get<string>('sentry.dsn'),
    serverName: config.get<string>('sentry.serverName'),

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

  // RequestHandler creates a separate execution context using domains, so that every
  // transaction/span/breadcrumb is attached to its own Hub instance
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.errorHandler());
};
