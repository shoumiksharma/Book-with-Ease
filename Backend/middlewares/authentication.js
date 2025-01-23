import jwt from "jsonwebtoken";
const authentication = async (req, res, next) => {
    console.log("authentication function");
    const cookie = req.cookies;

    if(!cookie){
        console.log("no user");
        res.json({ redirectTo : '/.home'});
    }

    console.log(cookie);

    try{
        const isLoggedIn = jwt.verify(cookie.user_data , process.env.JWT_KEY);
    }
    catch(err){
        console.log(err);
        if(!isLoggedIn){
            res
            .status(401)
            .json("Invalid Authorization");
        }
    }

    next();
    // res.json({ redirectTo : './user'});

}

export default authentication;