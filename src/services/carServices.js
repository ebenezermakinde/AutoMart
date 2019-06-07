import database from '../dummyData/database';
import Car from '../model/car';
import constants from '../utils/constants';

const { cars } = database;

/**
 * CarServices Class
 */
class CarServices {
  /**
   * Function: Create A car.
   * @param {string} manufacturer -  manufacturer name.
   * @param {string} model -  model name.
   * @param {string} state -  either new or old.
   * @param {number} price -  price of car.
   * @param {string} bodyType - either car,suv,truck etc.
   * @param {string} transmission -  either auto, manual or other.
   * @returns {object} car - The created car object
   */
  static createCar({
    manufacturer,
    model,
    state,
    price,
    bodyType,
    transmission,
    owner,
  }) {
    const car = new Car();
    car.id = cars[cars.length - 1].id + 1;
    car.owner = owner;
    car.manufacturer = manufacturer;
    car.model = model;
    car.state = state;
    car.price = price;
    car.bodyType = bodyType;
    car.transmission = transmission;

    cars.push(car);

    return car;
  }

  /**
  * Function - To get all cars based on some criterium
  * @param {object} data - The data object
  * @returns {object} JSON - The result of the query.
  */
  static getAllCars() {
    return {
      status: constants.STATUS_OK,
      data: cars,
    };
  }

  /**
   * Function: Get a car by ID
   * @param {number} id - The carId
   * @returns {object} JSON - The car object
   */
  static getACar(id) {
    const car = cars.find(data => data.id === Number(id));
    if (!car) {
      return {
        status: constants.STATUS_NOT_FOUND,
        error: constants.MESSAGE_NO_CAR,
      };
    }
    return car;
  }
}

export default CarServices;
