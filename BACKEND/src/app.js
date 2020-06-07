import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

import './database';
const app = express();

var corsOption = {
  origin: 'http://localhost:3000',
  optionSucessStatus:200
}
//CORS
//app.use(
	//cors(
		//credentials: true,
	//	origin: true
	//)
//);
app.options('*', cors());
//body-parser
app.use(
	bodyParser.urlencoded({
		limit: '50mb',
		extended: true
	})
);

app.use((req, res, next) => {
res.header("Acces-Control-Allow-Origin", "*");
app.use(cors());
//res.header('Acces-Control-Allow-Header',
//'Origin, X-Requested-With, Content-Type, Accept, Authorization',

//);
//if(res.method == 'OPTIONS'){
  //res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//return res.status(200).send({});
//}
next();
});

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
