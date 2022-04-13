const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const router = require('./router');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", 'ejs');


app.use(session({
    secret: uuidv4(), //  '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);

app.get("/", (req,res)=>{
    res.render('base', {titl:"Login System"});
});










app.listen(8080, ()=>{
    console.log("Servidor ligado na porta 8080, http://localhost:8080");
});