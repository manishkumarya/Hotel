const passport= require('passport')                      //authentication middleware
const LocalStrategy = require('passport-local').Strategy
const person = require('./model/Person');
passport.use(new LocalStrategy (async (username, password, done) => {
    try{
       const user=await person.findOne({username})
       if(!user)
        {
          return done(null,false,{message:"incorrect username"})
        }
        const ispasswordmatch=await user.comparePassword(password)
      if(ispasswordmatch){
        return done(null,user)
      }
      else
      return done(null, false, { message: 'Incorrect password.' })
    }
    catch(err){
      return done(err)
    }
  }))

  module.exports=passport