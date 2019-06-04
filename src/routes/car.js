import express from 'express';
import carController from '../controller/carController';
import carValidator from '../middleware/carValidator';

const carRoute = express.Router();

const { createCar } = carController;
const { validateCar } = carValidator;

carRoute.post('/car', validateCar, createCar);

export default carRoute;
