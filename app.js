const app=require('./app')
const db =require('./config/db')
const db1 =require('./models/user_model')
var port = process.env.PORT || 3000 
app.get('/1',(req,res)=>{
    res.send("helloo")
})
app.listen(port,()=>{
    console.log("start listening port 3000")
})
