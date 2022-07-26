const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../data/zodiac');

describe('zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/zodiac returns a list of signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiac.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
