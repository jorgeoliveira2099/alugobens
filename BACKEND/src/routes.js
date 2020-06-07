import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
//descomentar depois
//import SessionController from './app/controllers/SessionController';

import ProductController from './app/controllers/ProductController';
//descomentar depois
//import authMiddleware from './app/middlewares/auth';


import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

var corsOption = {

  origin: "*",
  methods: "GET, POST, PUT, PATH, DELETE",
  prefligthContinue: false,
  optionSucessStatus:200
}
//CORS
app.use(
	cors({
		credentials: true,
		origin: true
  	}	)
);
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
res.header('Acces-Control-Allow-Header',
'Origin, X-Requested-With, Content-Type, Accept, Authorization',

);
if(res.method == 'OPTIONS'){
  res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
return res.status(200).send({});
}
next();
});












const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
//descomentar depois
//routes.post('/sessions', SessionController.store);
//descomentar depois
//routes.use(authMiddleware);

routes.put('/users', UserController.update);

//aqui ele insere o caminho da imagem, descomentar depois
routes.post('/products', cors(), upload.single('path'), ProductController.store);

//routes.post('/products',  ProductController.store);

//routes.post('/products', upload.single('product'), (req, res, next) => {
  //return res.send(req.body);
//});

//listar produto
routes.get('/products', cors(),  ProductController.index);

//excluir produto
//routes.delete('/products/:id',  ProductController.delete);

routes.put('/products/:id',  ProductController.update);

export default routes;
