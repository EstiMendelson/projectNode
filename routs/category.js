const express=require("express")
const router=express.Router()
const categoryController=require("../controller/categoryController")

router.get('/getCategories',categoryController.getCategories)
router.get('/getCategoryById/:id',categoryController.getCategoryById)
router.post('/addCategory',categoryController.addCategory)

module.exports=router