const express=require("express");

const Pureveg=require("../modules/Pureveg");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const pureveg=await Pureveg.create(req.body);
        return res.status(201).send(pureveg)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const pureveg=await Pureveg.find().lean().exec();
        return res.status(201).send(pureveg)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports=router