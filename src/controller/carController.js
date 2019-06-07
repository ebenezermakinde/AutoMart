import CarServices from '../services/carServices';
import constants from '../utils/constants';
import common from '../utils/common';

const { createCar, getACar, getAllCars } = CarServices;
const { success, error } = common;

/**
 * CarController class
 */
class CarController {
  /**
   * Function: create car function
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON - The created car object
   */
  static createACar(req, res) {
    const owner = 3; // This would be provided from jwt.
    const data = { ...req.body, owner };

    success(res, constants.STATUS_CREATED, createCar(data));
  }

  /**
   * Function: To return all the cars
   * @param {object} req - The request object
   * @param {object} res  - The response object
   * @returns {object} JSON - All the cars.
   */
  static fetchAllCars(req, res) {
    const response = getAllCars();
    res.status(constants.STATUS_OK).send(response);
  }

  /**
   * Function: To return a specific car
   * @param {object} req - The request object
   * @param {object} res  - The response object
   * @returns {object} JSON - The specific car chosen.
   */
  static fetchACar(req, res) {
    const { id } = req.params;
    const response = getACar(id);

    if (response.status === constants.STATUS_NOT_FOUND) {
      return error(res, constants.STATUS_NOT_FOUND, constants.MESSAGE_NO_CAR);
    }
    return success(res, constants.STATUS_OK, response);
  }
}
export const { createACar, fetchACar, fetchAllCars } = CarController;
