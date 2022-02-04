var express = require('express');
var router = express.Router();
var supply = require('./Models/model')

//to fetch data
router.get('/stock',async(req,res)=>{
    const istock = await supply.find()
    res.send(istock)
})

//to add the movies
router.post("/stock",async(req,res)=>{
    const istock = new supply(req.body)

    await istock.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/stock/:id',async (req,res)=>{
    const istock= await stock.findOne({_id:req.params.id})
    istock.name = req.body.name
    istock.password = req.body.password
    await igadget.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/stock/:name",async(req,res)=>{
    await supply.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})
module.exports = router 