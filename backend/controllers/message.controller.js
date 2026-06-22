import Message from "../models/message.model.js";
import Conversation from "../models/converstion.model.js";
import { asynchandler } from "../utilities/asynchandler.js";
import Errorhandler from "../utilities/errorhandler.js";

export const sendMessage = asynchandler(async (req, res, next) => {
  const senderID = req.user.id;
  const receiverID = req.params.receiverID;
  const message = req.body.message;

  console.log(senderID, receiverID, message);

  if (!message || !senderID || !receiverID) {
    return next(new Errorhandler("All fields are required", 400));
  }

  const conversation = await Conversation.findOne({
    participants: { $all: [senderID, receiverID] },
  });

  if (!conversation) {
    const newConversation = await Conversation.create({
      participants: [senderID, receiverID],
    });
  }

  const newMessage = await Message.create({
    senderID,
    receiverID,
    message,
  });

  if (newMessage) {
    conversation.messages.push(newMessage._id);
    await conversation.save();
  }

  return res.status(201).json({
    success: true,
    message: "Message sent successfully",
    newMessage,
  });
});

export const getMessage = asynchandler(async (req, res, next) => {
  const myID = req.user.id;
  const otherID = req.params.receiverID;
  

  console.log(myID, otherID);

  if ( !myID || !otherID) {
    return next(new Errorhandler("All fields are required", 400));
  }

  const conversation = await Conversation.findOne({
    participants: { $all: [myID, otherID] },
  }).populate("messages");

 
  return res.status(201).json({
    success: true,
    message: "Message sent successfully",
    conversation,
  });
});