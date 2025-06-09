import mongoose from "mongoose"
const conversationschema=new model.Schema({
    member:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
    ],
    messsagesid:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message",
        required:true

    }],
},{timestamp:true})
export const conversation= mongoose.model("conversation",conversationschema)
