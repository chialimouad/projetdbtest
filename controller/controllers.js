const userserv =require('../services/services')
const multer = require('multer')
const express=require('express')
const app =express()
const { Router } = require('express')
const imageshema =require('../models/modeluser')
// exports.uploads = async(req,res)=>{
//     try{
//       const storage =multer.diskStorage({
//         destination:"uploads",
//       filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//       }
//     })
//     const upload =multer({storage}).single("image")
   
//     }catch(err){
//         console.log(err)
//     }
// }
exports.register= async(req,res,next)=>{try{
    const {email,password}=req.body
    const usercontrol =await userserv.registeruser(email,password)

    res.json({status:true,success:"user succsefully"})
}catch(err){console.log(err)}}
exports.login= async(req,res,next)=>{
    try{
    const {email,password}=req.body
    const user=await userserv.checkemail(email)
    if(!user)
        throw new Error("user doesnt exist")
    
    const userpass= await userserv.checkpass(password)
    if(!userpass){
        throw new Error("password not match")
    }
    
    const jwtsign= await userserv.generatetoken({_id:user._id},"secretkey","1h")
    res.status(201).json({status:true,jwtsign})
    console.log(jwtsign)
}catch(err){console.log(err)}}