import express from 'express';
import {allMessages, sendMessage} from '../controllers/MessageController.js';

const discussionsRouter = express.Router();

discussionsRouter.get("/:chatId", allMessages);
discussionsRouter.post("/",  sendMessage);

export default discussionsRouter;
