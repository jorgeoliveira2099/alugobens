import * as Yup from 'yup';
import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.string().required(),
      description: Yup.string().required(),
     path: Yup.string().required(),

    });
    try {
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'validate fails adfgqui' });
      }
    } catch (error) {
      return res.status(400).json({ error });
    }



  const {  name,    price, description, path

  } = await Product.create(req.body);

  return res.json({
    name,    price, description, path

  });

  }


}

export default new ProductController();
