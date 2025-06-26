import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import signinRouter from './routes/signinRouter.js';
import loginRouter from './routes/loginRouter.js';
import fetchUsernameRouter from './routes/fetchUsernameRouter.js';
import service_centre_Router from './routes/service_CentreRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';
import authentication from './middlewares/authentication.js';
import cookieParser from 'cookie-parser';
import register_Service_Center from "./routes/register_Service_CenterRouter.js"
import path from 'path';
import connectDB from './config/database.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

// mongoose
//     .connect(process.env.DB_URL)
//     .then(() => console.log("Connection Successfull !"))
//     .catch((err) => console.log("Error Occurred", err));

app.use(cookieParser())
app.use(express.json());
app.use(urlencoded({ extended: true }));

// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

app.use('/signin', signinRouter);
app.use('/login', loginRouter);
app.use('/fetch', fetchUsernameRouter);
app.use('/nearest-service-centre', service_centre_Router);
app.use('/serviceCentreReg', register_Service_Center);
// app.use('/fair-estimate', fair_estimateRouter);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})


    