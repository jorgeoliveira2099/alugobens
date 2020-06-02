import * as Yup from 'yup';
import Product from '../models/Product';

class ProductController {
  async store(req, res) {


//aqui funciona
const { destination } = req.file;
const { name, price, description } = req.body;


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
