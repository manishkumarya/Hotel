const express = require('express');
const db=require('./db')


const app = express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello welcome to the Hotel ')
  })
const Personroutes=require('./Routes/Personroutes')
const Menuroutes=require('./Routes/Menuroutes')
app.use('/person',Personroutes)
app.use('/menu',Menuroutes)


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});