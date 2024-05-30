const express = require('express');
const db=require('./db')


const app = express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
const dotenv = require('dotenv')

// dot env config
dotenv.config()
app.get('/', (req, res) => {
    res.send('Hello welcome to the Hotel ')
  })
const Personroutes=require('./Routes/Personroutes')
const Menuroutes=require('./Routes/Menuroutes')
app.use('/person',Personroutes)
app.use('/menu',Menuroutes)

const Port=process.env.PORT || 3000
app.listen(Port, () => {
    console.log(`Server running on port 3000`);
});