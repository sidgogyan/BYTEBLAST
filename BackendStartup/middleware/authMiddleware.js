const isAdmin=(req,res,next)=>{
    
    req.userId='64d6653dcce85406d80eaa4c'
     next()
}

module.exports={isAdmin}