import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import home from './routes/home';
import user from './routes/user';
import token from './routes/token';
import aluno from './routes/aluno';
import foto from './routes/foto';

const whiteList = [
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3000',
  'http://localhost:8080',
];

const corsOptions = {
  origin: (origin, cb) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by cors!'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/tokens', token);
    this.app.use('/alunos/', aluno);
    this.app.use('/fotos/', foto);
  }
}

export default new App().app;
