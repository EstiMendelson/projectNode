const mongoose=require('mongoose')
const itemsSchema=mongoose.Schema({
    
    categoryId:{
        type:Number
    },
       
    description:{
        type:String,
    },
    foundIn:{
        type:String,
    },
    phon:{
        type:String,
    },
    email:{
        type:String,
    },
   
       

})

module.exports=mongoose.model('items',itemsSchema)