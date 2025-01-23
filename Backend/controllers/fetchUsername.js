import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'


dotenv.config();

const fetchUsername = async (req, res) => {
    console.log("here");
    const cookie = req.cookies;

    if(!cookie){
        res
            .status(401)
            .json("No cookie stored");
    }

    else{

        try{
            const user_data = jwt.verify(cookie.user_data, process.env.JWT_KEY);
            const username = user_data.name;
            res
                .status(200)
                .json({username});
        }

        catch(err){

            res
            .status(400)
            .json(err);

        }
    }
}

export default fetchUsername