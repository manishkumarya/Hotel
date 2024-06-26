const mongoose=require('mongoose')
const bcrypt = require('bcrypt')
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

personSchema.pre('save',async function(next){
    const person=this
    //hash the password if it is modified or new.
    if(!person.isModified('password')) return next()
try{
   //hash password generation
   const salt=await bcrypt.genSalt(10)
   //hash pass
   const hashedpassword=await bcrypt.hash(person.password,salt)

   //override the plain password with the hashed one
   person.password=hashedpassword
   next()
}
catch(err){
  return next(err)
}
})
personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}
const person=mongoose.model('person',personSchema)
module.exports=person