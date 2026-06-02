import express from 'express';

export const isAdmin = (req,res,next)=>{
    if(req.session.user.role==="admin"){
        next();
    }else{
        res.send("Access Denied");
    }
}