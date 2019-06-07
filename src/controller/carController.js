import CarServices from '../services/carServices';
import constants from '../utils/constants';
import common from '../utils/common';

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

    success(res, constants.STATUS_CREATED, CarServices.createCar(data));
  }

  /**
   * Function: To return all the cars
   * @param {object} req - The request object
   * @param {object} res  - The response object
   * @returns {object} JSON - All the cars.
   */
  static fetchAllCars(req, res) {
    const response = CarServices.getAllCars();
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
    const response = CarServices.getACar(id);

    if (response.status === constants.STATUS_NOT_FOUND) {
      return error(res, constants.STATUS_NOT_FOUND, constants.MESSAGE_NO_CAR);
    }
    return success(res, constants.STATUS_OK, response);
  }

  /**
   * Function: To delete a specific car
   * @param {object} req - The request object
   * @param {object} res  - The response object
   * @returns {string} message - on successful deletion.
   */
  static deleteACar(req, res) {
    const { id } = req.params;
    const response = CarServices.removeACar(id);

    if (response.status === constants.STATUS_NOT_FOUND) {
      return res.status(constants.STATUS_NOT_FOUND).send(response);
    }
    return res.status(constants.STATUS_OK).send(response);
  }
}

export const {
  createACar, fetchACar, fetchAllCars, deleteACar,
} = CarController;
