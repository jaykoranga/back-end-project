import dotenv from 'dotenv'
import express from "express"
import  {connectDB}  from './db/index.js';
dotenv.config({
    path:'./env'
})
const app=express();
 
connectDB()





// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: server not able to speak")
//             throw(error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log("listening on port",process.env.PORT);
//         })
//     }
//     catch(err){
//          console.log("error :",err);
//     }
// })()