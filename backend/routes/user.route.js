import express from 'express';
import { login } from '../controllers/user.controller.js';
import { register } from '../controllers/user.controller.js';
import { getProfile } from '../controllers/user.controller.js';
import { logout } from '../controllers/user.controller.js';
import {isAuthenticated} from '../middlewares/auth.js';
import { getOtherProfile } from '../controllers/user.controller.js';
const router=express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/logout', isAuthenticated, logout);
router.get('/getProfile', isAuthenticated , getProfile);
router.get('/getOtherProfiles', isAuthenticated, getOtherProfile);


export default router;