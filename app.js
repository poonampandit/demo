const model=require('./db')
const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()

app.use(bodyparser.json())
app.use(cors())
//api
app.get('/',(req,res)=>
{
  model.find().then(p=>res.json(p)).catch(err=>console.log(err))
})

app.post('/',(req,res)=>
{ 
   const data=new model(
    {
        "username":req.body.username,
        "password":req.body.password
    }
   )
   data.save().then(p=>res.status(200).json("data saved")).catch(err=>console.log(err))
})


app.listen(3000,(err)=>{
    if(!err)
    {
        console.log("server is on")
    }
})