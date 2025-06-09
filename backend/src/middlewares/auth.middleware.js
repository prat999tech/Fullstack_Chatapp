import { apierror } from "../utils/apierror.js";
import { User } from "../models/User.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import jwt from "jsonwebtoken"
export const verifyJWT=asyncHandler(async(req,res,next)=>{
    try{
    const token=req.cookies?.accesstoken||req.header("Authorization")?.replace("Bearer ","")
    if(!token){
        throw new apierror(404,"token not found")
    }
    const decodedtoken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    const user=User.findById(decodedtoken?._id).select("-refreshtoken -password")
    if(!user){
        throw new apierror(404,"user not found")

    }
    req.user=user;
    next()
    }catch(error){
        
        throw new apierror(401,error?.message || "invalid access token or user not found")
        
    }

})