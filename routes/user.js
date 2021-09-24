const express=require('express')
const router=express.Router()
const User=require('../models/user')

//get all users
router.get('/users',async (req,res)=>{
    try { 
        const users= await  User.find()
        res.send({users,msg:"users successfully"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot get users :( "})
    }
})
//add a new user
router.post('/',async(req,res)=>{
    const {email}=req.body
    try { 
     const userExist= await User.findOne({email})
     if (userExist) {
         return (res.status(400).send({msg:"user exist with this email "}))

     } 
     const newUser= new User(req.body)
     await newUser.save()
     res.send({newUser,msg:"user added successfully :) "})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot post users :( "})
    }
})

//delete user
router.delete('/users/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        const result=await User.deleteOne({_id:req.params.id})
        result.deletedCount?
        res.send({msg:"user deleted successfully :) "}):
        res.send({msg:"user already deleted :( "})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot delete users :( "})
    }
})
//update user 
router.put('/:id',async(req,res)=>{
try {
    const userexist= await User.findOne({email:req.body.email})
    if (userexist) {
        return (res.status(400).send("email already exist"))
    }
    const result=await User.updateOne({_id:req.params.id},{$set:{...req.body}})
   const userUpdated= await User.findOne({_id:req.params.id})
   
    result.modifiedCount? 
    res.send({userUpdated,msg:"user updated successfully :D "}):
    res.send({msg:"oops! "})
} catch (error) {
    console.log(error)
        res.status(400).send({msg:"cannot update users :'( "})
}
})
module.exports=router