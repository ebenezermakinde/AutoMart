import CarServices from '../services/carServices';
import constants from '../utils/constants';
import common from '../utils/common';

const { createCar, getACar } = CarServices;
const { success } = common;

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
  static createCar(req, res) {
    const owner = 3; // This would be provided from jwt.
    const data = { ...req.body, owner };

    success(res, constants.STATUS_CREATED, createCar(data));
  }

  /**
   * Function: To return a specific car
   * @param {object} req - The request object
   * @param {object} res  - The response object
   * @returns {object} JSON - The specific car chosen.
   */
  static getACar(req, res) {
    const { id } = req.params;
    const response = getACar(id);

    success(res, constants.STATUS_OK, createCar(response));
  }
}
export default CarController;
