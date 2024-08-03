const express=require("express");

const Buffet=require("../modules/buffet");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const buffet=await Buffet.create(req.body);
        return res.status(201).send(buffet)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const buffet=await Buffet.find().lean().exec();
        return res.status(201).send(buffet)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports=router