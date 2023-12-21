import mongoose, { model, connect } from "mongoose";
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    age:{type:Number,required:true},
    image:{type:String,required:true}
},{timestamps:true}
)
const user=model("users",userSchema)

export default user