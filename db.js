const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/pp').then(p=>console.log("connected to db")).catch(err=>console.log(err))

const schema=mongoose.Schema(
    {
        "username":String,
        "password":String
    }
)


const model=mongoose.model('userdata',schema)
model.find().then(p=>console.log(p)).catch(err=>console.log(err))
module.exports=model