import express from 'express';
import {isAuthenticated} from '../middlewares/auth.js';

import { sendMessage ,getMessage } from '../controllers/message.controller.js';

const router=express.Router();

router.post('/send/:receiverID', isAuthenticated, sendMessage);
router.get('/get/:receiverID', isAuthenticated, getMessage);
export default router;