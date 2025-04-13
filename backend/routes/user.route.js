import express from 'express';
import { register } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/prfile/update").post(isAuthenticated, updateProfile);    //user can only update profile if he is authenticated

export default router;