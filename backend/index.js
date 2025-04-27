const express=require('express')
const cors =require('cors')
const db=require("./dbfunctions")
const app=express()
app.use(express.json()); // to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(cors())
app.listen(4000,()=>{
    console.log("server is running...")
})

app.get('/',(req,res)=>{
    res.send("server is running")
})

app.get('/transaction',(req,res)=>{
    db.getuser().then((data)=>
    {
        res.send(data)
    })
    
})


app.post('/transaction',(req,res)=>{
    db.adduser(req.body.name,req.body.datetime,req.body.description,req.body.price).then((data)=>
    {
        res.send(data)
    })
    
})

app.put('/transaction',(req,res)=>{
    db.updateuser(req.body.name,req.body.datetime,req.body.description,req.body.id).then((data)=>
    {
        res.send(data)
    })
    
})

app.delete('/transaction',(req,res)=>{
    db.deleteuser(req.body.id).then((data)=>
    {
        res.send(data)


    })
})

