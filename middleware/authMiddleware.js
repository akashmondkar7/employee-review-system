import express from 'express';


export const isAuthenticated = (req,res,next)=>{
    if(req.session.user){
        next();
    }else{
        res.redirect("/login");
    }
}