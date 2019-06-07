import _ from 'lodash';
import Validator from 'validatorjs';
import constants from '../utils/constants';
import common from '../utils/common';

const { error } = common;

/**
 * Car Validation class.
 * @class CarValidator
 */
class CarValidator {
  /**
   * Function: The create car function.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @param {function} next - The next() function for routing requests to the next middleware
   * @returns {object} JSON - representing the failure messages.
   */
  static validateCar(req, res, next) {
    const {
      manufacturer, model, state, price, bodyType, transmission,
    } = req.body;

    const rules = {
      manufacturer: 'required|min:3|string',
      model: 'required|min:2|string',
      state: 'required|in:New,Old,NEW,OLD,new,old',
      price: 'required|numeric',
      bodyType: 'required|string|min:3',
      transmission: 'required|in:automatic,manual,other,Automatic,Manual,Other,AUTOMATIC,MANUAL,OTHER',
    };

    const validation = new Validator(req.body, rules,
      { 'in.state': constants.MESSAGE_STATE_OPTIONS, 'in.transmission': constants.MESSAGE_TRANSMISSION_OPTIONS });
    if (validation.fails()) {
      // Source: https://github.com/skaterdav85/validatorjs/issues/156
      return error(res, constants.STATUS_BAD_REQUEST,
        _.mapValues(validation.errors.all(), value => _.toString(value)));
    }

    req.body.manufacturer = manufacturer.trim().toLowerCase();
    req.body.model = model.trim().toLowerCase();
    req.body.state = state.trim().toLowerCase();
    req.body.price = Math.abs(price);
    req.body.bodyType = bodyType.trim().toLowerCase();
    req.body.transmission = transmission.trim().toLowerCase();
    return next();
  }
}

export default CarValidator;
