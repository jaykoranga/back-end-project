import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

 const connectDB= async()=>{
    try{

        const connectionInstacnce = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGO DB CONNECTED !! DB HOST:${connectionInstacnce.connection.host}`)
    }
    catch(error){
        console.log(`error is ${error}`);
        process.exit(1);
    }

}
export  {connectDB}
