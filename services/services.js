const dbq=require('../models/modeluser')
class serviceuser{
     static async registeruser(email,password){
       try{
       const par=new dbq({email,password})
       return await par.save()

       }catch(err){console.log(err)}
     }
     static async checkemail(email){
      try{
      return await dbq.findOne({email})

      }catch(err){console.log(err)}
    }
    static async checkpass(password){
      try{
      return await dbq.findOne({password})

      }catch(err){console.log(err)}
    }
  
}
module.exports=serviceuser