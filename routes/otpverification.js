import generateOTP from "../util/GenerateOTP.js";
import sendOTPEmail from "../util/Nodemailer.js";
import express from "express";
const otpverificationRouter = express.Router();

otpverificationRouter.get("/:email", async(req,res)=>{
    const email = req.params.email;
    const otp = generateOTP();
    sendOTPEmail(email, otp);
    res.send({success:"true", message:"OTP sent", otp});
})
export default otpverificationRouter;