import express from "express";
import Subject from "../models/Subject.js";
import protect from "../middlewares/AuthMiddleware.js";
const mainRouter = express.Router();

mainRouter.get('/:subjectname', protect, async (req,res)=>{
    const subjectData = await Subject.find({name:req.params.subjectname});
    res.send(subjectData[0]);
});

export default mainRouter;
