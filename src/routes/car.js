import express from 'express';
import CarController from '../controller/carController';
import CarValidator from '../middleware/carValidator';
import ValidationHelper from '../middleware/validationHelper';

const carRoute = express.Router();

const { createCar, getACar } = CarController;
const { validateCar } = CarValidator;
const { validateID } = ValidationHelper;

carRoute.post('/car', validateCar, createCar);
carRoute.get('/car/:id', validateID, getACar);

export default carRoute;
