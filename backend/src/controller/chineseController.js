const express=require("express");

const Chinese=require("../modules/chinese");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const chinese=await Chinese.create(req.body);
        return res.status(201).send(chinese)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const chinese=await Chinese.find().lean().exec();
        return res.status(201).send(chinese)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})




module.exports=router