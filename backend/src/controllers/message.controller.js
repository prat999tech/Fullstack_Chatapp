import { conversation} from "../models/conversation.model.js";
import {message} from "../models/message.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { apierror } from "../utils/apierror.js";
import { apiresponse } from "../utils/apiresponse.js";

export const sendMessage=asyncHandler(async(req,res)=>{
    try{
        const {messagess}=req.body;
        const {id:receiverid}=req.params;
        const senderid=req.user._id;
        let newconversation=await conversation.findOne({
            member:{
                $all:[
                    {
                    senderid,receiverid
                    }
                ]
            }
        })
        if(!newconversation){
            newconversation=await conversation.create({
                member:[
                    senderid,receiverid
                ]
            })
        }
        const newmessage=new message({
            senderid,
            receiverid,
            messagess
        })
        if(newmessage){
            conversation.messages.push(newmessage._id)
        }
        await conversation.save()
        await newmessage.save()
        return res.status(200).json(
            new apiresponse(200,"message added successfully",newmessage)
        )
    }catch(error){
        console.log(error);
        throw new apierror(404,"internal server error",error)
        
    }
    
})
export const getusermessage=asyncHandler(async(req,res)=>{
    try{
        const {id:chatuser}=req.params;
        const senderid=req.user._id;
        const conversationopen=await conversation.findOne({
            member:{
                $all:[
                    senderid,chatuser
                    ]
                    }
        }).populate("messages")
        if(!conversationopen){
            throw new apierror(404,"no convo found")
        }
        const message=conversation.messages;
        if(!message){
            throw new apierror(404,"no message found")
        }
        return res.status(200).json(
            new apiresponse(200,"message found",message)
        )
    }catch(error){
        console.error(error);
        
    }
})