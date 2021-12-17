const mongoose=require('mongoose')

const connect=()=>{
    return mongoose.connect("mongodb+srv://coursera:coursera@courseradb.11upq.mongodb.net/courseraDB")
}





module.exports=connect