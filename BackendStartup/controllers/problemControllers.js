const Problem=require('../models/Problem')
const asyncHandler=require('express-async-handler')


const addProblem=asyncHandler(async(req,res)=>{
    
    try{
        const {title,description,startercode,sample_tests}=req.body
       const isexits=await Problem.findOne({title})
       
       if(isexits){
        return res.status(400).json({errorMessage:'Problem with same name already exits'})
       }
       
        
       const problem = new Problem({
        title,description,startercode,sample_tests
      });
     
      await problem.save();
      return res.status(201).json({'message':'Problem Added Successfully'})

    }
    catch(error){
        return res.status(500).json({error,errorMessage:"something went wrong"})
    }
    
})

module.exports={addProblem}