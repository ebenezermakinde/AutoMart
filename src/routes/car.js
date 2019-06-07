import express from 'express';
import { createACar, fetchAllCars, fetchACar } from '../controller/carController';
import CarValidator from '../middleware/carValidator';
import ValidationHelper from '../middleware/validationHelper';

const carRoute = express.Router();

// const { createCar, getACar, getAllCars } = CarController;
const { validateCar } = CarValidator;
const { validateID } = ValidationHelper;

carRoute.post('/car', validateCar, createACar);
carRoute.get('/car', fetchAllCars);
carRoute.get('/car/:id', validateID, fetchACar);

export default carRoute;
