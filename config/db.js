const mongoose=require('mongoose')
const connection = mongoose.createConnection('mongodb+srv://chialimouad:mouadchiali@cluster0.z6qhktx.mongodb.net/useres').on('open',()=>{
    console.log("connected")
}).on('error',()=>{
    console.log("not connected")
})
module.exports=connection