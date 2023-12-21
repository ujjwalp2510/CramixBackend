import express from "express";
import Subject from "../models/Subject.js";
const dashboardRouter = express.Router();

dashboardRouter.get('/:year/:branch', async (req,res)=>{
    const Subjects = await Subject.find({year:req.params.year, branch:{$in:[req.params.branch]}});
    res.send(Subjects);
});

export default dashboardRouter;
