import {Login} from '../controllers/AuthController.js';
import express from 'express';
const loginRouter = express.Router();

loginRouter.post('/', Login);
export default loginRouter;