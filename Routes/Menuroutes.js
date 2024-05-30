const express=require('express')
const router=express.Router()
const menuitems=require('./../model/Menuitems')

//to saved the data 
router.post('/',async(req,res)=>{
    try{
      const data=req.body
      const newitem=new menuitems(data)
      const response=await newitem.save()
      console.log('data saved')
      res.status(200).json(response)
  
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"internal server error"})
    }
  })

  // to fetched the data of person
router.get('/',async(req,res)=>{
    try{
      const data=await menuitems.find()
      console.log('data fetched')
      res.status(200).json(data)
  
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"internal server error"})
    }
  })


  module.exports=router