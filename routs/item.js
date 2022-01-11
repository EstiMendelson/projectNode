const express=require("express")
const router=express.Router()
const itemController=require('../controller/itemController')

router.get('/getByCategoryId/:id',itemController.getByCategoryId)
router.post('/addItem',itemController.addItem)
router.get('/getAll',itemController.getAll)
module.exports=router