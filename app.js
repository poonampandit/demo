var express=require('express');
var app=express();
var cors=require('cors')
var bodyParser=require('body-parser')
app.use(cors())
app.use(bodyParser.json())
const model=require("./model.js")
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/abcd");
  

console.log("done");

app.post('/login',(req, res)=>{

    const {username, password } = req.body;
   model.findOne({username}).then((data)=>{
    if (!data) {
        // Student not found
        return res.status(404).json({ status: false, message: 'Student not found' });
      }
      if (data.password !== password) {
        // Invalid password
        return res.status(401).json({ status: false, message: 'Invalid password' });
      }
       // Successful login
       res.status(200).json({ status: true, message: 'Login successful' });

}).catch((error) => {
    console.error(error);
    res.status(500).json({ status: false, message: 'An error occurred' });
  });});


app.listen(3000,()=>console.log("server on"))