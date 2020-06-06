import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

import './database';
const app = express();

//CORS
app.use(
	cors({
		credentials: true,
		origin: true
	})
);
app.options('*', cors());
//body-parser
app.use(
	bodyParser.urlencoded({
		limit: '50mb',
		extended: true
	})
);

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
