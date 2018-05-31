'use strict';

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

import router from './api/api.js';

mongoose.connect(process.env.MONGODB_URI);

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(router);

let isRunning = false; 

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) { throw err; }
        isRunning = true;
        console.log(`Server is up and running on ${port}`);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    app.close(() => {
      isRunning = false; 
      console.log('Server has been stopped');
    });
  } // eslint-disable-line
};