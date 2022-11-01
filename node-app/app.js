var express = require("express");
const cors = require('cors')
const config = require('./config.js')
var app = express();
const port = config.APP_PORT
let data = [
    {
        id:'IT100',
        login:'Tom100',
        name:'Tom Hardy',
        salary:10000,
        createdDate:new Date().toLocaleDateString(),
        updatedDate:new Date().toLocaleDateString()
    },
    {
        id:'IT101',
        login:'Dwayne101',
        name:'Mark Walberg',
        salary:11000,
        createdDate:new Date().toLocaleDateString(),
        updatedDate:new Date().toLocaleDateString()
    },
    {
        id:'IT103',
        login:'Jon103',
        name:'Jon Snow',
        salary:12000,
        createdDate:new Date().toLocaleDateString(),
        updatedDate:new Date().toLocaleDateString()
    }
]

app.get("/employees",cors(),(req,res)=>{
    res.json({data:data,code:200,status:'HR200'})
})

app.post('/employees/upload',cors(),(req,res)=>{
    const input = req.query

    res.json({status:'HR200',code:201})
})

app.put('/employees/:id',cors(),(req,res)=>{
    res.json({status:'HR200',code:204})
})

app.delete('/employees/:id',cors(),(req,res)=>{
    res.json({status:'HR200',code:204})
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})