const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", 'ejs');

app.get("/", (req,res)=>{
    res.render('base', {title:"Login System"});
});










app.listen(8080, ()=>{
    console.log("Servidor ligado na porta 8080, http://localhost:8080");
});