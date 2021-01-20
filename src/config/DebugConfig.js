import * as Sentry from '@sentry/react';
// import dotenv from 'dotenv';

const useReactotron = process.env.NODE_ENV === 'development';
const useMirage = process.env.NODE_ENV === 'development';

// dotenv.config();

Sentry.init({ dsn: process.env.SENTRY_DSN });
console.log(process.env.SENTRY_DSN, process.env.NODE_ENV);
console.log('eeeenv...', process.env.SENTRY_DSN, process.env.NODE_ENV);

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
