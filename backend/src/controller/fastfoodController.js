const express=require("express");

const Fast=require("../modules/fastFood");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const fast=await Fast.create(req.body);
        return res.status(201).send(fast)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const fast=await Fast.find().lean().exec();
        return res.status(201).send(fast)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})




module.exports=router