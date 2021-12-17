const mongoose=require('mongoose')

const AllCourseSchema=mongoose.Schema({
    id:Number,
    coursename:String,
    institute:String,
    category:String,
    rating:Number,
    student_enroll:String,
    img:String,
    level:String,
    Language1:String,
    duration:Number,
    duration1:String,
    subject:String,
    skill:String,
    partner:String,
    learning:String,
    },
{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("allCourse",AllCourseSchema);