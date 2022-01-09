const mongoose=require('mongoose')
const items = require('./items')
const categorySchema=mongoose.Schema({
    name:{
        type:String
    },      
    // items:[{
    //     type:mongoose.Types.ObjectId,
    //     ref:'Item'
    // }]
    id:{
        type:Number
    }
})
module.exports=mongoose.model('Category',categorySchema)