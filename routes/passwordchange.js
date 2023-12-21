import express from "express";
import passwordChange from '../controllers/passwordchangeController.js'
const passwordchangeRouter = express.Router();

passwordchangeRouter.post('/', passwordChange);
export default passwordchangeRouter;