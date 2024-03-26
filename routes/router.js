const route=require('express').Router()
const dbcontrol=require('../controller/controllers')
const dbq=require('../models/modeluser')
route.post('/register',dbcontrol.register)
route.post('/login',dbcontrol.login)
route.get('/fetch',async (req,res)=>{
  try{
    const fetch =await dbq.find({})
    res.status(200).json(fetch)
    
  }catch(err){console.log(err)}
  
})
module.exports=route