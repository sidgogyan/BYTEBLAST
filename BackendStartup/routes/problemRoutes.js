const { addProblem } = require('../controllers/problemControllers')
const { isAdmin } = require('../middleware/authMiddleware')


const router=require('express').Router()





// router.get('/:id',getProblemById)

router.post('/',isAdmin,addProblem)






module.exports=router