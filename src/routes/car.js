import express from 'express';
import {
  createACar, fetchAllCars, fetchACar, deleteACar, updatePrice,
} from '../controller/carController';
import CarValidator from '../middleware/carValidator';
import ValidationHelper from '../middleware/validationHelper';

const carRoute = express.Router();

const { validateCar } = CarValidator;
const { validateID, validatePrice } = ValidationHelper;

carRoute.post('/car', validateCar, createACar);
carRoute.patch('/car/:id/price', validateID, validatePrice, updatePrice);
carRoute.get('/car', fetchAllCars);
carRoute.get('/car/:id', validateID, fetchACar);
carRoute.delete('/car/:id', validateID, deleteACar);

export default carRoute;
