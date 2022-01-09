const category = require("../model/category");
const Category=require('../model/category')

const getCategory=((req,res)=>{
    category.find({}).then(d=>{res.status(200).send(d)}).catch(e=>console.log(e))
    console.log("hi");
})

const getCategoryById=(req,res)=>{
    category.findById({_id:req.params.id})
    .then(d=>res.send(d))
    .catch(e=>res.send(e))
}

const addCategory=(req,res)=>{
    const c=new Category(req.body)
    console.log(c);
   
   c.save().then(d=>res.send(d)).catch(e=>res.send(e))
}
module.exports={getCategory,getCategoryById,addCategory}
