import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from './db/connection.db.js';
connectDB();
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
const PORT=process.env.PORT || 5000 ;

app.use(express.json());

// Importing user routes   Will be showed in /api/v1/user/login
import userRoute from './routes/user.route.js';
import messageRoute from './routes/message.route.js';
app.use('/api/v1/message',messageRoute);
app.use('/api/v1/user',userRoute);


// Middleware
import { errorhandler } from './middlewares/error.js';
app.use(errorhandler);
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});