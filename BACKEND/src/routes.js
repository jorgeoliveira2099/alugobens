import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
//descomentar depois
//import SessionController from './app/controllers/SessionController';

import ProductController from './app/controllers/ProductController';
//descomentar depois
//import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
//descomentar depois
//routes.post('/sessions', SessionController.store);
//descomentar depois
//routes.use(authMiddleware);

routes.put('/users', UserController.update);

//aqui ele insere o caminho da imagem, descomentar depois
routes.post('/products', upload.single('path'), ProductController.store);

//routes.post('/products',  ProductController.store);

//routes.post('/products', upload.single('product'), (req, res, next) => {
  //return res.send(req.body);
//});

//listar produto
routes.get('/products',  ProductController.index);

//excluir produto
//routes.delete('/products/:id',  ProductController.delete);

routes.put('/products/:id',  ProductController.update);

export default routes;
