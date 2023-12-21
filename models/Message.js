import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
  {
    sendername: {
      type: String,
    },
    senderemail: {
        type:String,
    },
    content: {
      type: String,
      trim: true,
    },
    chatId: {
      type: String,
    },
  },
  {
    timeStamp: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
