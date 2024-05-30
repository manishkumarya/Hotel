const mongoose=require("mongoose")

const mongoURL='mongodb://localhost:27017/Hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db=mongoose.connection;

db.on('connected', () => console.log('connected'));
db.on('disconnected', () => console.log('disconnected'));

//export module
module.exports=db;


