const Category=require('../models/Category')
const asyncHandler=require('express-async-handler')


const getAllCategories=asyncHandler(async(req,res)=>{

    try{
        const allCategories=await Category.find({})

       return res.status(200).json(allCategories);


    }
    catch(error){
        return res.status(500).json({error,errorMessage:"something went wrong"})
    }

})



const getCategoryById=asyncHandler(async(req,res)=>{

    try{
        const category=await Category.findById(req.params.id)
        if(!category){
            return res.status(400).json({errorMessage:'No Category Found'})
        }

       return res.status(200).json(category);


    }
    catch(error){
        return res.status(500).json({error,'errorMessage':'Something went wrong'})
    }

})


const addCategory=asyncHandler(async(req,res)=>{
    
    
    try{
        const {name,description,summary,subCategories}=req.body
       const isexits=await Category.findOne({name})
       
       if(isexits){
        return res.status(400).json({errorMessage:'Category with same name already exits'})
       }
       
        
       const category = new Category({
        name,
        description,
        summary,
        user:req.userId,
        subCategories
      });
     
      await category.save();
      return res.status(201).json({'message':'Category Added Successfully'})

    }
    catch(error){
        return res.status(500).json({error,errorMessage:"something went wrong"})
    }

})


const updateCategory=asyncHandler(async(req,res)=>{
    
    
    try{
        const {name,description,summary,subCategories}=req.body

        if(name){
            const isexits=await Category.findOne({name})
       
            if(isexits){
             return res.status(400).json({errorMessage:'Category with same name already exits'})
            }
        }
       
       const category=await Category.findById(req.params.id)

       
       
       if(!category){
        return res.status(400).json({errorMessage:'Category Not Found'})
       }
       


        
       category.name=name?name:category.name
       category.description=description?description:category.description
       category.summary=summary?summary:category.summary
       category.subCategories=subCategories?subCategories:category.subCategories


     
      await category.save();
      return res.status(200).json({'message':'Category Updated Successfully'})

    }
    catch(error){
        return res.status(500).json({error,errorMessage:"something went wrong"})
    }

})



const deleteCategory=asyncHandler(async(req,res)=>{
    
    
    try{
        
       
       const category=await Category.findById(req.params.id)

       
       
       if(!category){
        return res.status(400).json({errorMessage:'Category Not Found'})
       }
       


        
       


     
      await category.deleteOne();
      return res.status(200).json({'message':'Category delete Successfully'})

    }
    catch(error){
        return res.status(500).json({error,errorMessage:"something went wrong"})
    }

})

module.exports={getAllCategories,addCategory,updateCategory,deleteCategory,getCategoryById}