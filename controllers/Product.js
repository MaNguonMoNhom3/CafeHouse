import { ProductModel } from '../models/productModel.js';

export const ProductController = async (req, res) => {
    try {
        // const pr = new ProductModel({
        //     Name : 'Đá',
        //     Price: 2,
        //     Discount : 10,
        //     Image : "../../public/img/menu-2.jpg",
        //     Hot : 12,
        //     Quantity : 110,
        //     Description: "đá rất lạnh",
        //     CategoryId : '60d2f2721f546229507bdc46'
        // });
        // await pr.save();
        const product = await ProductModel.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json('error', err);
    }
}