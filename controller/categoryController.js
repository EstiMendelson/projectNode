const category = require("../model/category");

const getCategories=((req,res)=>{
    category.find({})
    .then(d=>{res.status(200).send(d)})
    .catch(e=>console.log(e))
})

const getCategoryById=(req,res)=>{
    category.findById({_id:req.params.id})
    .then(d=>res.send(d))
    .catch(e=>res.send(e))
}

const addCategory=(req,res)=>{
    const c=new category(req.body)
    c.save().then(d=>res.send(d)).catch(e=>res.send(e))
}
module.exports={getCategories,getCategoryById,addCategory}
