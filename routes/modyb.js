import express from "express";
import User from "../models/User.js";
const modybRouter = express.Router();

modybRouter.post('/year', async (req,res)=>{
    await User.findOneAndUpdate(
        { email: req.body.email },
        { $set: { year: req.body.mody } },
        { new: true }
      );
      res.send("Successful");
});
modybRouter.post('/branch', async (req,res)=>{
  await User.findOneAndUpdate(
      { email: req.body.email },
      { $set: { branch: req.body.modb } },
      { new: true }
    );
    res.send("Successful");
});
export default modybRouter;
