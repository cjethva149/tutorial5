var mongoose = require('mongoose')
var express = require('express')
var route = require('./routes')
var bodyParser =require('body-parser')

mongoose.connect('mongodb+srv://ctesting:bO2abElG5F05nWJZ@cluster0.zsl6n.mongodb.net/stock?retryWrites=true&w=majority').then(()=>{
    console.log('DB Connected....')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    app.listen((process.env.PORT||2000),()=>{
        console.log('server started')
    })
}).catch((e)=>{
    console.log(e.toString())
})