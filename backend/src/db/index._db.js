import mongoose from "mongoose"
const connectDB=async() => {
    try{
        const instance=await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log(`MongoDB connected: ${instance.connection.host}`)

    }catch(error){
        console.error(error)
        process.exit(1)

    }
}
export default connectDB