import express from 'express';
import UserController from '../controller/userController';
import { signUpValidator, emailCheck } from '../middleware/userValidator';

const userRoute = express.Router();

const { signUp } = UserController;

userRoute.post('/auth/signup', emailCheck, signUpValidator, signUp);

export default userRoute;
