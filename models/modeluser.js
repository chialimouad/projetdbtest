const mongoose=require('mongoose')
const db=require('../config/db')
 const { Schema }=mongoose
const userschema =new Schema({
    email :{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
      
    },
    password :{
        type:String,
        required:true,
       
    }
})

// const iamgemodel =mongoose.Schema({
//     name:{
//         type:String,
//         required:true,

//     },
//     image:{
//     type:Buffer,
//     contentType:String

//     }
// })
// const imagedb=db.model('images',iamgemodel)
// module.exports=imagedb
const user=db.model('user',userschema)
module.exports=user