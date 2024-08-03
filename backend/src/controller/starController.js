const express=require("express");

const Star=require("../modules/5star");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const star=await Star.create(req.body);
        return res.status(201).send(star)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const star=await Star.find().lean().exec();
        return res.status(201).send(star)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})




module.exports=router