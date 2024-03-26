const app=require('./app')
const db =require('./config/db')
const db1 =require('./models/user_model')
var port =  3000 
app.get('/1',(req,res)=>{
    res.send("helloo")
})
app.listen(3000,()=>{
    console.log("start listening port 3000")
})
