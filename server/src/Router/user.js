import express from "express";
import user from "../Models/user.js";
import { createAddUser, deleteUser, getAllUsers, getUsersById, updateUser } from "../Controller/usersController.js";



const router=express.Router()


//Get All Users

router.get("/",getAllUsers)

//User get by id

router.get("/:id",getUsersById)


//Add User
router.post("/",createAddUser)

//User Update
router.put("/:id",updateUser)

//Delete User

router.delete("/:id",deleteUser)

export default router