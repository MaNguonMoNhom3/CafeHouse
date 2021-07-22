import express from "express";
import {check, validationResult} from 'express-validator';
import {getSignUpUser, SignUp} from '../controllers/HomeController.js';
const router = express.Router();

router.get("/", getSignUpUser);
router.post("/", [
    check('name', 'Tên của bạn phải có ít nhất 2 ký tự')
    .exists()
    .trim()
    .isLength({min:2}),
    check('email','Email không được để trống')
    .isEmail()
    .trim()
    .normalizeEmail(),
    check("pass", "Invalid password")
        .isLength({ min: 4 })
        .custom((value,{req, loc, path}) => {
            if (value !== req.body.re_pass) {
                throw new Error("Passwords don't match");
            } else {
                return true;
            }
        }),
    check('agree-term', 'Vui lòng đọc và đồng ý với điều khoản')
    .exists()
  ],
  SignUp)

export default router;
