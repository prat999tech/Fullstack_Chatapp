import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors({

    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(cookieParser())
app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:false,limit:"10kb"}))
export {app}

