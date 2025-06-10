import connectDB from "./db/index_db.js";
import dotenv from "dotenv"
dotenv.config({path:'./.env'})
import { server } from "./services/socket.io.js";
connectDB()
.then(()=>{
    server.listen(process.env.PORT||3000,()=>{
        console.log(`app is listening on port:${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("error in db connection",error)
})
