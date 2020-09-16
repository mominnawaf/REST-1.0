const mongoose= require("mongoose");
var DbSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("users",DbSchema);