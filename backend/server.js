import express from 'express';
const app=express();

const PORT=5000;


// Importing user routes   Will be showed in /api/v1/user/login
import userRoute from './routes/user.route.js';

app.use('/api/v1/user',userRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});