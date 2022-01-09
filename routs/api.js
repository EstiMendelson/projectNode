const express=require("express")
const router=express.Router()
const categoryController=require("../controller/categoryController")
const itemsController=require('../controller/itemsController')

router.get('/getByCategoryId/:id',itemsController.getByCategoryId)
router.get('/getCategory',categoryController.getCategory)
router.get('/getCategoryById/:id',categoryController.getCategoryById)
router.post('/addCategory',categoryController.addCategory)
router.post('/addItem',itemsController.addItem)
router.get('/getAll',itemsController.getAll)
module.exports=router