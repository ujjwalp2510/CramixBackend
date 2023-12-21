import Message from '../models/Message.js';

const allMessages = (async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId })
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const sendMessage = (async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.sendStatus(400);
  }

  var newMessage = {
    sendername: req.body.sendername,
    senderemail:req.body.senderemail,
    content: content,
    chatId: chatId,
  };

  try {
    var message = await Message.create(newMessage);
    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

export {allMessages, sendMessage};
