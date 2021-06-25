import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import customers from "./routers/Customers.js";
import passport from "passport";
import session from "express-session";

import menu from './routers/menu.js';
import products from './routers/Product.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URI = 'mongodb+srv://admin:YsMgkjmq9rV85jJP@cluster0.y3awn.mongodb.net/CafeHouse?retryWrites=true&w=majority';

const app = express();

const port = 3000;

//add file css js img fonts
app.use("/public", express.static(__dirname + '/public'));

app.use(cors());
app.use(express.json({limit: '30mb'}));
app.use(express.urlencoded({extended: true, limit: '30mb'}));

app.get('/', (req, res) => {
  res.sendFile( __dirname + "/views/frontend/" + "index.html" );
});
app.get('/login', (req, res) => {
  res.sendFile( __dirname + "/views/frontend/" + "SingIn.html" );
});
app.get('/register', (req, res) => {
  res.sendFile( __dirname + "/views/frontend/" + "SingUp.html" );
});
app.get('/cart', (req, res) => {
  res.sendFile( __dirname + "/views/frontend/" + "cart.html" );
});
app.get('/contact', (req, res) => {
  res.sendFile( __dirname + "/views/frontend/" + "contact.html" );
});
app.get('/detail', (req, res) => {
  res.sendFile( __dirname + "/views/frontend/" + "detail.html" );
});
app.get('/menu', (req, res) => {
  res.sendFile( __dirname + "/views/frontend/" + "menu.html" );
});
app.get('/today-special', (req, res) => {
  res.sendFile( __dirname + "/views/frontend/" + "today-special.html" );
});

// app.use('/SingIn', customers);
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/SingUp',customers);

app.use('/menuDB',menu);
app.use('/productDB',products);

//connet DB + run server
mongoose
.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(port, () => {
        console.log(`Server runing on port ${port}`);
    });
})
.catch((err) => {
    console.log('err', err);
  });
