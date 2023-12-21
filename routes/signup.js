import {Signup} from '../controllers/AuthController.js';
import express from 'express';
const signupRouter = express.Router();
signupRouter.post("/", Signup);

export default signupRouter;