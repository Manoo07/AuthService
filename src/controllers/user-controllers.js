
const UserService = require('../services/user-service');


const userService = new UserService();
const create = async (req,res)=>{
    try {
        const response = await userService.create({
            Email: req.body.email,
            Password: req.body.password,
        });
        return res.status(201).json({
            data: response,
            message: "Created User Successfully ",
            success: true,
            error: {}
        })
    } catch (error) {
        console.log("Error in Controllers layer : ",error);
        return res.status(500).json({
            message: "Something went wrong in creating User",
            data: {},
            error: error,
            success:false 
        })
    }
}
const signIn = async (req,res)=>{
    try {
        const response = await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data:response,
            message: "Successfully logged in",
            success:true,
            error:{}
        });
    } catch (error) {
        console.log("Error in Controllers layer : ",error);
        return res.status(500).json({
            message: "Something went wrong in creating User",
            data: {},
            error: error,
            success:false 
        })
    }
}
const isAuthenticated = async (req,res)=>{
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data:response,
            message: "Successfully logged in",
            success:true,
            error:{}
        });
    } catch (error) {
        console.log("Error in Controllers layer : ",error);
        return res.status(500).json({
            message: "Something went wrong in creating User",
            data: {},
            error: error,
            success:false 
        })
    }
}
module.exports ={
    create,signIn,
    isAuthenticated
}