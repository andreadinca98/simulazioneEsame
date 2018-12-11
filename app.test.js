const request = require('supertest');
const app     = require('./app');

test('app module should be defined', () => {
  expect(app).toBeDefined();
});

test('GET / should return 200', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
});

describe('Protected API /api/v1/users/me', () => {

  test('GET /square?string=<> should return 404', async () => {
    const response = await request(app).get('/square?string=');
    expect(response.statusCode).toBe(401);
  });

  test('GET /square?string=<string> should return {result:(string.length*string.length)}', async () => {
    const response = await request(app).get('/square?string="fds');
    expect(response.statusCode).toBe(200);
  });

});
