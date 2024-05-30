const express=require('express')
const router=express.Router()
const person=require('./../model/Person')
 //to saved the data 
 router.post('/',async(req,res)=>{
    try{
      const data=req.body
      const newPerson=new person(data)
      const response=await newPerson.save()
      console.log('data saved')
      res.status(200).json(response)
  
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"internal server error"})
    }
  })
// to update the data 

router.put('/:id',async (req,res)=>{
  try{
    const person_id=req.params.id    //extract the id from parameter
    const updatedPersondata=req.body     //update data for the person
    const response=await person.findByIdAndUpdate(person_id,updatedPersondata,{
      new:true,      //return the updated document
      runValidators:true //run mongoose validation
    })
    if(!response){
      return res.status(404).json({error:"personid not found"})
    }
    console.log("data updated")
    res.status(200).json(response)

  }
  catch(err){
    console.log(err)
    res.status(500).json({err:"internal server error"})
  }
})


//to delete 
router.delete('/:id',async (req,res)=>{
  try{
    const person_id=req.params.id    
    
    const response=await person.findOneAndDelete(person_id)
    if(!response){
      return res.status(404).json({error:"personid not found"})
    }
    console.log("data deleted")
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
      const data=await person.find()
      console.log('data fetched')
      res.status(200).json(data)
  
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"internal server error"})
    }
  })

  // to fetched the data by work
router.get('/:workType',async(req,res)=>{
    try{
      const workType= req.params.workType;
      if(workType=="chef" || workType=="manager" || worktype=="waiter"){
        const data=await person.find({work:workType})
        console.log('data fetched')
        res.status(200).json(data)
      }
      else{
        res.status(404).json({err:"invalid worktype"})
      }
    
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"internal server error"})
    }
})

module.exports=router