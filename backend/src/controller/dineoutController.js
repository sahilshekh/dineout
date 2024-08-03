const express=require("express");

const Dineout=require("../modules/Dineout");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const dineout=await Dineout.create(req.body);
        return res.status(201).send(dineout)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const dineout=await Dineout.find().lean().exec();
        return res.status(201).send(dineout)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports=router