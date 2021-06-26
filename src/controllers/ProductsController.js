import { ProductModel } from '../models/Product.js';

export const ProductController = async (req, res) => {
    try {
        const product = await ProductModel.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json('error', err);
    }
}