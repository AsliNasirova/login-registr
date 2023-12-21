import express from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

const app = express();
const port = 5000;

const UserSchema = new Schema({
  username: String,
  password: Number,
  role: String,
});

const User = mongoose.model("User", UserSchema);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const users = new User({ ...req.body });
    await req.save(users);
    res.status(200).send(created);
  } catch (error) {
    res.status(500).send(error);
  }
});

mongoose
  .connect("mongodb+srv://asli:asli123@cluster0.euc1dwy.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(()=>console.log("not connect db"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// import cors from "cors";
// import bodyParser from "body-parser";
// import mongoose, { model, connect } from "mongoose";
// import user from "./Models/user.js"
// import user from "./Router/user.js"

// const mongoose=require("mongoose")

// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

//Midleware
// app.use(cors())
// app.use(bodyParser.json())
// app.use("/users",userRouter)

// //Get All Users

// app.get("/users",async (req,res)=>{
//     try {
//         const users=await Users.find({})
//         res.send(users)
//     } catch (error) {
//         res.status(500).json({message:error})
//     }
// })

// //User get by id

// app.get("/users/:id",async (req,res)=>{
//     try {
//         const user=await Users.findById(req.params.id)

//             res.send(user)

//     } catch (error) {
//         res.status(500).json({message:error})
//     }
// })

// //Add User
// app.post("/users",(req,res)=>{
//     const user=new Users({
//         name:req.body.name,
//         surname:req.body.surname,
//         age:req.body.age,
//         image:req.body.image
//     })
//     user.save()
//     res.send({message:"User Created"})
// })

// //User Update
// app.put("/users/:id",async (req,res)=>{
//     try {
//         const user=await Users.findByIdAndUpdate(req.params.id)

//         if(user){
//             user.name=req.body.name,
//             user.surname=req.body.surname,
//             user.age=req.body.age,
//             user.image=req.body.image

//             await user.save()
//             res.json(user)
//         }else{
//             res.status(404).json({message:"Not Found"})
//         }
//     } catch (error) {
//         res.status(500).json({message:error})
//     }
// })

// //Delete User

// app.delete("/users/:id",async (req,res)=>{
//     try {
//        await Users.findByIdAndDelete(req.params.id)
//         res.status(200).json({message:"User Deleted"})

//     } catch (error) {
//         res.status(500).json({message:error})
//     }
// })
