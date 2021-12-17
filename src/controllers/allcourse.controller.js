const express=require('express');
const mongoose=require('mongoose');
const allcourseModel = require('../models/allcourse.model');
// const degreeModel = require('../models/course.model');

const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const user_data=await allcourseModel.create(req.body)
        return res.status(201).json({data:user_data})
        
    }catch(err){
        return res.status(400).json({message:err.message,status:"Invalid Data"})
    }
})

router.get("/",async(req,res)=>{
    try{
        const user_data=await allcourseModel.find({}).lean().exec();
        return res.status(200).json({data:user_data})
    }catch(err){
        res.status(400).json(err)
    }
}
)

router.get("/home", function (req, res) {
    return res.render("products/index");
  });

router.get("",async function (req, res) {
    const data = await allcoursesModel.find({}).lean().exec();  
   return res.send(data)
          
 });

router.get("/search",async function (req, res) {
    const data = await allcourseModel.find().lean().exec(); 
    console.log(data) 
   return res.render("products/course_list_page",{
       data
   })
          
 });

module.exports=router;