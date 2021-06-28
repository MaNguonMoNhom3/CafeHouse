import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import handlerbars from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import {connect} from './config/database/index.js'
// router import
import router from "./routers/index.js";
// 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;


const app = express();
connect();
//add file css js img fonts
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

// handlebars
app.engine('handlebars', handlerbars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'))

app.use('/', router)
//run server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
