import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express()
app.use(cookieParser());
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN
    }
))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))
app.get('/', (req, res) => {
    console.log(req.cookies);   
   // Access cookies here
    res.send(req.cookies);
  });
export {app};