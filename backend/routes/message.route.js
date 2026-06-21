import express from 'express';
import {isAuthenticated} from '../middlewares/auth.js';

import { sendMessage } from '../controllers/message.controller.js';

const router=express.Router();

router.post('/send/:receiverID', isAuthenticated, sendMessage);
export default router;