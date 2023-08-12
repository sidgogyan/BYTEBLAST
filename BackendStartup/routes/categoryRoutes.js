const { getAllCategories, addCategory,updateCategory,deleteCategory,getCategoryById } = require('../controllers/CategoryControllers')
const { isAdmin } = require('../middleware/authMiddleware')

const router=require('express').Router()



router.get('/',getAllCategories)

router.get('/:id',getCategoryById)

router.post('/',isAdmin,addCategory)

router.put('/:id',isAdmin,updateCategory)

router.delete('/:id',isAdmin,deleteCategory)




module.exports=router