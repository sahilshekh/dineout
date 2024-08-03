const express=require("express");

const North=require("../modules/5star");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const north=await North.create(req.body);
        return res.status(201).send(north)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const north=await North.find().lean().exec();
        return res.status(201).send(north)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})




module.exports=router