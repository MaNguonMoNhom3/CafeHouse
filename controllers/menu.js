import {Categorys} from '../models/categoryModel.js';

export const CategoryController = async (req, res) => {
    try {
        const categorys = await Categorys.find();
        console.log('category',categorys);
        res.status(200).json(categorys);
    } catch (err) {
        res.status(500).json({error : err});
    }
};