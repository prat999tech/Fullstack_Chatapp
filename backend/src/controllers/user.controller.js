import { asyncHandler } from "../utils/asynchandler.js";
import { apierror } from "../utils/apierror.js";
import { apiresponse } from "../utils/apiresponse.js";
import { User } from "../models/User.model.js";
import jwt from "jsonwebtoken"
const generateaccessandrefreshtoken=async(userId)=>{
    try{
    const user=await User.findById(userId)
    const accesstoken=await user.generateAccessToken() 
    const refreshtoken=await user.generateRefreshToken()
    user.refreshtoken=refreshtoken
    await user.save({validateBeforeSave:false}) 
     return {accesstoken,refreshtoken}
    }catch(error){
        console.log(error)
    }
   

}
const signup=asyncHandler(async(req,res)=>{
    try{
        const {fullname,email,password}=req.body
         if (
        [fullname, email, password].some((field) => field?.trim() === "")
    ) {
        console.log("Validation failed: Fields are empty."); // Log validation failure
        throw new apierror(400, "All fields are required");
    }
    const existeduser=await User.findOne({
        $or: [{ email }, { fullname }]
    })
    if(existeduser){
        throw new apierror(401,"User already exists")
    }
    const user=await User.create({
        fullname,
        email,
        password
    })
    console.log(`user crreated ${user}`);
    if(!user){
        throw new apierror(404,"User not created")
    }
    const createduser=await User.findById(user._id).select("-password -refreshtoken")
    if(createduser){
        return res.status(200).json(
            apiresponse(200, "User created successfully", createduser)
        )
    }
    else{
        throw new apierror(404,"not fetching craeted user or user not craeted")
    }
    

    }catch(error){
        console.log(error)
    }

})
const login=asyncHandler(async(res,req)=>{
    try{
        const {email,fullname,password}=req.body
        if(!fullname || !email){
            throw new apierror(400,"fullname and email are required")
        }
        const user=await User.findOne({
            $or: [{ email }, { fullname }]
        })
        if(!user){
            throw new apierror(401,"User not found")
        }
        const isPasswordCorrect=await user.isPasswordcorrect(password);
        if(!isPasswordCorrect){
            throw new apierror(401,"Invalid password")
        }
        const {accesstoken,refreshtoken}=await generateaccessandrefreshtoken(user._id)
         const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
         const options={
            httpOnly:true,
            secure:true,
         }
         return res.status(200)
         .cookie("accesstoken",accesstoken,options)
         .cookie("refreshtoken",refreshtoken,options)
         .json(
            apiresponse(200,"User logged in successfully",{user:loggedInUser,accesstoken,refreshtoken})
         )


    }catch(error){
        console.log(error)
    }
})
const logoutUser=asyncHandler(async (req,res)=>{
    try{
    await User.findByIdAndUpdate(req.user._id,{
        $set:{
            refreshtoken:undefined
        }
    },
    { new: true } // Return the updated document
)

    const options={
        httpOnly:true,
        secure:true,
       }
       return res
       .status(200)
       .clearCookie("accesstoken",options)
       .clearCookie("refreshtoken",options)
       .json(new apiresponse(200,{message:"user logged out successfully"},"user logged out successfully"))
    }catch(error){
        console.error(error)
    }
    
})
const changepassword=asyncHandler(async(req,res)=>{
    const {oldpassword,newpassword}=req.body
    const user=await User.findById(req.user._id).select("+password")
    const isPasswordCorrect=await user.isPasswordcorrect(oldpassword);
    if(!isPasswordCorrect){
        throw new apierror(401,"Invalid old password")
        }
        const updatedUser=await User.findByIdAndUpdate(req.user._id,{
            $set:{
                password:newpassword
                }
                },
                { new: true } // Return the updated document
                )
                return res.status(200).json(apiresponse(200,"password changed successfully",{user:updatedUser}))

})
   const refreshAcessToken=asyncHandler(async (req,res)=>{
        const incomingRefreshToken=req.cookies.refreshToken || req.body.refreshToken//here we are accessing refresh token as it is in our cookies or for mobile app it is in our header body
        if(!incomingRefreshToken){
            throw new apierror(401,"refresh token is required")
        }
        const decodedToken=jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)
        const user=await User.findById(decodedToken?._id)
        if(!user){
            throw new apierror(401,"unauthorized reinvalid refresh token")
      
        }
        //'user.refreshToken=refreshToken ' iska use krke humne refresh token ko save krwaya tha user m or jo abhi humne decode kra ha 'incoming refresh token' isse jo user dhundha ha hummne woh same hona chhaie issliye checking kenge 

        if(incomingRefreshToken!=user.refreshtoken){
            throw new apierror(401,"refresh token expired or user expired")
        }
        const options={
            httpOnly:true,
            secure:true
        }
       const {accessToken,newRefreshToken}= await generateaccessandrefreshtoken(user._id)
        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",newRefreshToken,options)
        .json(
            new apiresponse(
                200,
                {accessToken,refreshtoken:newRefreshToken},
                "Access token refreshed"
            )
        )
     })
     export{
        login,
        signup,
        refreshAcessToken,
        logoutUser,
        changepassword,


     }