const express=require('express');
const app=express();
const tasks = require('./routes/tasks');
const connectDB=require('./db/connect')
require('dotenv').config()

// middlewares
app.use(express.static('./public'))
app.use(express.json())



// routes

app.get('/hello',(req,res)=>{
    res.send("Task Manager App")
})
app.use('/api/v1/tasks',tasks)

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(5000,()=>{
            console.log(`Server started on port 5000`);
        })

    } catch (error) {
        console.log(error);
    }
}
start()
