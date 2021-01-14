// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.urlPrefix = 'https://viapool.com/driver/';
    this.get('enabled', () => [
      'gmail.com',
      'outlook.com',
      'hotmail.com',

    ]);
    this.post('', () => {});
  },
});
