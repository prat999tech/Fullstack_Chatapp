import mongoose from "mongoose"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
        },
           confirmPassword: {
        type: String,
    },
    refreshtoken:{
        type:String
    }

},{timestamps:true});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
        this.password= await bcrypt.hash(this.password,10);
    next()

})
userSchema.methods.isPasswordcorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({//sbse phle .sign() function m dunga payload mtlb kon kon se information m rkhna chahta hu or phir access token return kr dega
         _id:this.id,
         email:this.email, // jo hum this. se la rhe h woh database se aa rha ha
         username:this.username,
         fullName:this.fullname,
    },
process.env.ACCESS_TOKEN_SECRET,
{
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
}
)
}
userSchema.methods.generaterefreshtoken= function(){
    return jwt.sign({
        _id:this.id,
    },
process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
})
}


export const User= mongoose.model("User",userSchema)
