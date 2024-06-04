const express = require('express');
const db=require('./db')
const app = express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
const dotenv = require('dotenv')
const passport=require('./auth')
// dot env config
dotenv.config()

const Personroutes=require('./Routes/Personroutes')
const Menuroutes=require('./Routes/Menuroutes');


app.use(passport.initialize()) 
const localauthMiddleware=passport.authenticate('local',{session:false})
app.get('/', (req, res) => {
  res.send('Hello welcome to the Hotel ')
})
app.use('/person',Personroutes)
app.use('/menu',Menuroutes)

const Port=process.env.PORT || 3000
app.listen(Port, () => {
  console.log(`Server running on port `,{Port});
});