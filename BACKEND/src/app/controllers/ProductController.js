import * as Yup from 'yup';
import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const product = await Product.findAll({

      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['name', 'price', 'description', 'path',  'created_at'],

    });
    return res.json(product);
  }



  async update(req, res) {
   const schema = Yup.object().shape({

      name: Yup.string(),
      price: Yup.string(),
      description: Yup.string(),
     path: Yup.string(),

    });


const  destination  = req.file;
const { name, price, description } = req.body;


 const produto = await Product.update({

   name,
   price,
   description,
   path: destination,

  }, {where: { }},

  );



   // const { name, price,  description, path } = req.body;

    //const product = await Product.findByPk(req.userId);



  //  const { id, name, price,  description, path} = await product.update(req.body);

    return res.json({
     produto

    });
  }





  async store(req, res) {


//aqui funciona
const  destination  = req.file;
const { name, price, description, path } = req.body;


 const produto = await Product.create({
   name,
   price,
   description,
   path: destination,
 });

  return res.json(produto);
//return res.json(description);
  //return  await Product.create(req.body);
//aqui pode apagar


   //const schema = Yup.object().shape({
     // name: Yup.string().required(),
      //price: Yup.string().required(),
      //description: Yup.string().required(),
     //path: Yup.object().required(),
//    });
  //  console.log((schema.isValid));
    //try {
      //if (!(await schema.isValid(req.body))) {
        //return res.status(400).json({ error: 'validate fails adfgqui' });
      //}
    //} catch (error) {
     // return res.status(400).json({ error });
  // }



//  const {  name,    price, description, path

  //} = await Product.create(req.body);

  //return res.json({
   // name,    price, description, path

 // });

  }


}

export default new ProductController();
