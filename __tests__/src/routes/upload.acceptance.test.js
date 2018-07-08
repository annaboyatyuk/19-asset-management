'use strict';

// require('dotenv').config({path: `${__dirname}/../../../.env`});

require('dotenv').config();
require('babel-register');

import {
  Mockgoose,
} from 'mockgoose';
import mongoose from 'mongoose';

import supertest from 'supertest';
import {
  server,
} from '../../../src/app.js';

const mockRequest = supertest(server);

jest.setTimeout(60000);

const mockgoose = new Mockgoose(mongoose);


afterAll((done) => {
  mongoose.disconnect().then(() => {
    console.log('disconnected');
    done();
  }).catch((err) => {
    console.error(err);
    done();
  });
});

beforeAll((done) => {
  console.log('before all console');
  
  mockgoose.prepareStorage().then(() => {
    mongoose.connect('mongodb://localhost/lab_19').then(() => {
      done();
    });
  });
});

afterEach((done) => {
  console.log('after each done');
  mockgoose.helper.reset().then(done);
});

describe('/upload', () => {

  it('mockRequest should exist', () => {
    expect(mockRequest).toBeDefined();
  });
  
  // it('gets a 401 on a empty login', () => {
  //   return mockRequest
  //     .get('/upload')
  //     .then(response => {
  //       expect(response.status).toEqual(401);
  //     });
  // });

  

  // it('POST /upload  200', () => {
  //   return mockRequest.get('/signin')
  //     .auth('john','john')
  //     .then(response => {
  //       return mockRequest.post(`/upload`)
  //         .set('Authorization', `Bearer ${response.text}`)
  //         .field('title', 'my image')
  //         .attach('img', `${__dirname}/asset/mario-sell.gif`)
  //         .then(res => {
  //           expect(res.status).toEqual(200);
  //           expect(res.body.url).toBeTruthy();
  //         });
  //     });
  // });
});


