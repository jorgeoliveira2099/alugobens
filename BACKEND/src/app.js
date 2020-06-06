import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';
var app = express();
app.use(cors());

class App {
  constructor() {
    this.server = express();
    this.middlerares();
    this.routes();
  }

  middlerares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  //isso talvez não faça sentido
  //cors(){
   // this.server.use(cors);
  //}
}

export default new App().server;
