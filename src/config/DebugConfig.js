import * as Sentry from '@sentry/react';

const useReactotron = process.env.DEBUG === 'true';
const useMirage = useReactotron;

if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

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
