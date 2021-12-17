const mongoose=require('mongoose')

const degreeSchema=mongoose.Schema({
    id:Number,
    coursename:String,
    institute:String,
    category:String,
    rating:Number,
    backgroundimage:String,
    logo:String,
    certificate_type:String
},
{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("degree",degreeSchema);