import express from 'express';
import dotenv from 'dotenv';


dotenv.config();



const app = express();


app.get("/",(req,resp)=>{
    resp.send("employee review system")
})


const port=process.env.PORT;
app.listen(port,(req,resp)=>{
    console.log(`Server is running on ${port}` )
});