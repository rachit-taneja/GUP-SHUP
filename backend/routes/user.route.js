import express from 'express';
import { login } from '../controllers/user.controller.js';

const router=express.Router();

router.get('/register',register);
router.get('/login',login);

export default router;