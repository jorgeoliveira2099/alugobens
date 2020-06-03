import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import ProductController from './app/controllers/ProductController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/products', upload.single('path'), ProductController.store);
//routes.post('/products', upload.single('product'), (req, res, next) => {
  //return res.send(req.file);
//});
//listar produto
routes.get('/products',  ProductController.index);

//excluir produto
//routes.delete('/products/:id',  ProductController.delete);

routes.put('/products/:id',  ProductController.update);

export default routes;
