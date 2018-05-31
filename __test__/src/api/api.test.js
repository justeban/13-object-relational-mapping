'use strict';

import request from 'superagent';

describe('API Routes', () => {

  let url = 'http://localhost:8080';

  it('get(), when make get request, returns a valid json body', () => {
    request.get(`${url}/api/v1/guitars`)
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

});