import {home} from '../routers/home.js';

function route(app){
    app.use('/home',home)
}

module.exports = route;