import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import userModel from '../models/user.js';

dotenv.config();

const login = async (req, res) => {
    
    const username = req.body.username;

    const user = await userModel.findOne({username});
    if(!user){

        res.status(404).json("No user exists");

    }
    else{

        const password = req.body.password;

        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(isCorrectPassword){

            const userData = {
                id : user.id,
                name : user.name
            }

            const token = jwt.sign(userData , process.env.JWT_KEY);
            res
            .status(200)
            .cookie("user_data", token)
            .json("Login successfull !");

        }
        else{
            // incorrect password
            res.status(401).json("Wrong password");

        }
    }
}

export default login;