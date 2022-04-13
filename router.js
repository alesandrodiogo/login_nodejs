const express = require('express');
const router = express.Router();

const credencial ={
    email: "admin@gmail.com",
    password: "12345"
}

router.post("/login", (req,res)=>{
    if(req.body.email == credencial.email && req.body.password == credencial.password){
        req.session.user = req.body.email;
        res.redirect("/route/dashboard");
       // res.end("Login SucessFull!");
    }else{
        res.end("Invalid username");
    }
});

router.get("/dashboard", (req,res)=>{
    if(req.session.user){
        res.render("dashboard", {user:req.session.user});
    }else{
        res.send("Unauthorize user");
    }
});

router.get("/logout", (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error");
        }else{
            res.render('base', {title:"Express", logout:"Logout SuccessFul!"});
        }
    });
});


module.exports = router;