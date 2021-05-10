const bodyParser = require('body-parser');
const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const _ = require('lodash');


// Import models
const userMessageSchema = require('./schemas/UserMessage')
//MongoDB Connection
mongoose.connect('mongodb+srv://admin-santiago:admin-santiago@cluster0.neqzd.mongodb.net/testDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


const app = express()
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'))

const UserMessage = mongoose.model('UserMessage', userMessageSchema)

let port = process.env.PORT;
if (port==null || port==""){
    port=9000;
}

app.get('/', function(req,res){
    return res.render('home',{})
})

app.post('/message',  function(req,res){
    const {fullname, email, content} = req.body;
    const newMessage = new UserMessage({
        fullname: fullname,
        email_address: email,
        content: content
    });
    newMessage.save((err, result)=>{
        if (err) return console.error(err)
        return res.send({message:"Thanks for writing, I'll contact you as soon as possible"})
    })
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})



