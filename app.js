const bodyParser = require('body-parser');
const express = require("express");
const ejs = require("ejs");
// const mongoose = require('mongoose');

const app = express()
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'))



let port = process.env.PORT;
if (port==null || port==""){
    port=9000;
}

app.get('/', function(req,res){
    return res.render('home',{})
})
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})



