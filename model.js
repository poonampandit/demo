const mongoose = require('mongoose');
const mageSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
   password: {
        type: String,
        require: true
    }

});


module.exports= mongoose.model("collectionlogin", mageSchema)
