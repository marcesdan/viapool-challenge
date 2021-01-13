// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'https://viapool.com/driver';
    this.get('/enabled', () => ({
      response: { ok: true },
      data: [
        'gmail.com',
        'outlook.com',
        'hotmail.com',
      ],
    }));
    this.post('/', () => ({ response: { ok: true } }));
  },
});
