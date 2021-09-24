const mongoose=require('mongoose')
const connectdb=async()=>{
    try {

        await mongoose.connect(process.env.MONGO_URI)
         console.log("you are connected to db")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectdb