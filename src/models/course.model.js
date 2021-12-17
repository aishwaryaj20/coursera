const mongoose=require('mongoose')

const courseSchema=mongoose.Schema({
    id:Number,
    coursename:String,
    institute:String,
    category:String,
    rating:Number,
    backgroundimage:String,
    logo:String,
    certificatetype:String
},
{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("course",courseSchema);