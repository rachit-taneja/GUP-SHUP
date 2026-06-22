import Message from "../models/user.model.js";
import conversation from "../models/converstion.model.js";
import { asynchandler } from "../utilities/asynchandler.js";
import Errorhandler from "../utilities/errorhandler.js";

export const sendMessage = asynchandler(async (req, res, next) => {
  const senderID = req.user._id;
  const receiverID = req.params.receiverID;
  const message = req.body.message;

  console.log(senderID, receiverID, message);

  if (!message || !senderID || !receiverID) {
    return next(new Errorhandler("All fields are required", 400));
  }

  const conversation = await conversation.findOne({
    participants: { $all: [senderID, receiverID] },
  });

  if (!conversation) {
    const newConversation = await conversation.create({
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
