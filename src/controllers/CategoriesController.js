import { CategoryModel } from '../models/Category.js';

export const CategoryController = async (req, res) => {
    try {
        const categorys = await CategoryModel.find();

        res.status(200).json(categorys);
    } catch (err) {
        res.status(500).json('error', err);
    }
}