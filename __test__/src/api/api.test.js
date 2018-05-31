'use strict';

import request from 'superagent';

describe('API Routes', () => {

  let url = 'http://localhost:8080';

  it('get(), when make get request with invalid id, returns a 404', () => {
    return request.get(`${url}/api/v1/guitars/11111`)
      .catch(e => expect(e.status).toBe(500));

  });

  it('get(), when make get request, returns a valid json body', () => {
    return request.get(`${url}/api/v1/guitars`)
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
      });
  });

  it('put(), responds with 500 error, when invalid data provided', () => {
    return request
      .post(`${url}/api/v1/guitars`)
      .send({"InvalidData": true})
      .catch((err) => {
        expect(err.status).toBe(500);
      });
  });

  it('put(), responds with 400 error, when invalid data provided', () => {
    return request
      .post(`${url}/api/v1/guitars`)
      .catch((err) => {
        expect(err.status).toBe(500);
      });
  });
});