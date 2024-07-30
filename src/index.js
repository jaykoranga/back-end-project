import dotenv, { parse } from 'dotenv'
import express from "express"
import  {connectDB}  from './db/index.js';
import { app } from './app.js';
dotenv.config({
    path:'./env'
})

 
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log(`error in server connection :${error}`)
        throw error; 

    })
    
    app.listen(process.env.PORT||8000,()=>{
        console.log(`the server is running at port: ${process.env.PORT} `)
    })
})
.catch((err)=>{
    console.log(` error is in  :${err}`)
})






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