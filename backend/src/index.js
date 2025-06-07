import connectDB from "./db/index._db.js";
import dotenv from "dotenv"
dotenv.config({path:'./env'})
import {app} from "./app.js";
connectDB()
.then(()=>{
    app.listen(process.env.Port||3000,()=>{
        console.log(`app is listening on port:${process.env.Port}`);
        
    })
    

})
.catch((error) => {
    console.log("error in db connection",error)
})

