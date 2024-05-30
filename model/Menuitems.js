const mongoose=require('mongoose')

const Menuitemschema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    taste:{
        type:String
    },
    is_drink:{
        type:Boolean,
        default:true
    },
    ingredients:{
        type:String,
        enum:["chicken wings","spices","sauce"]}
})

const menuitems=mongoose.model('menuitems',Menuitemschema)

module.exports=menuitems