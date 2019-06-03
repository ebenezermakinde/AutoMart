import express from 'express';
import { signUp, login } from '../controller/userController';
import { signUpValidator, emailCheck, loginValidator } from '../middleware/userValidator';

const userRoute = express.Router();

userRoute.post('/auth/signup', emailCheck, signUpValidator, signUp);
userRoute.post('/auth/signin', loginValidator, login);

export default userRoute;
