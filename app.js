const express=require('express');
const mongoose=require('mongoose');

const connectDB=require('./config/db')
const dotenv=require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const port=process.env.PORT || 5000;

const app=express();

//middlware
//this helps us use the rq.body
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

app.use('/api/coach',require('./routes/coachRoutes'))
app.use('/api/instructor',require('./routes/instuctorRoutes'))  
app.use('/api/users',require('./routes/userRoutes'))

connectDB()

app.listen(port,()=> console.log(`Server started on port ${port}`));