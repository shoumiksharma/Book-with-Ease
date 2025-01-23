import userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const signin = async (req, res) => {
    const body = req.body;

    try{

        const JWT_KEY = process.env.JWT_KEY;
        const salt = await bcrypt.genSalt(7);
        // console.log(body.password, salt);
        const hash_password = await bcrypt.hash(body.password, salt);
        const new_user = await userModel.create({
            name: body.name,
            username: body.username,
            password: hash_password
        })
        // console.log(new_user.id);

        const userData = {
            id : new_user.id,
            name : new_user.name
        };

        const jwtdata = jwt.sign(userData, JWT_KEY);
        // console.log("User sign in successfull !");
        res
        .status(200)
        .cookie("user_data",jwtdata,{
            httpOnly : true // restricts accessng cookie using js on frontend
        })
        .json("User sign in successful !");
    }

    catch (err){
        if(err.code == 11000){
            res
            .status(409)
            .json("User Already Exists");
        }
    };
}

export default signin;