const express =require('express')
const bodyparser =require('body-parser')
const useroute =require('./routes/router')
const app = express()
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',useroute)
module.exports=app