import * as Sentry from '@sentry/react';

const useReactotron = process.env.NODE_ENV === 'development';
const useMirage = process.env.NODE_ENV === 'development';

Sentry.init({ dsn: process.env.SENTRY_DSN });
Sentry.captureMessage('Hola mundo');
alert(process.env.SENTRY_DSN);

const mirageLoad = async () => useMirage && import(
  /* webpackChunkName: "mirage-config" */
  /* webpackMode: "lazy" */
  './MirageConfig'
);

const reactotronLoad = () => useReactotron && import(
  /* webpackChunkName: "reactotron-config" */
  /* webpackMode: "lazy" */
  './ReactotronConfig'
);

export default () => Promise.all([
  mirageLoad(),
  reactotronLoad(),
]);
