const mongoose=require('mongoose')
const categorySchema=mongoose.Schema({
    name:{
        type:String
    },      

    id:{
        type:Number
    }
})
module.exports=mongoose.model('category',categorySchema)