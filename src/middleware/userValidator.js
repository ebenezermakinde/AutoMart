/* eslint-disable camelcase */
import _ from 'lodash';
import Validator from 'validatorjs';
import { emailExist, allEmails } from '../utils/helpers';
import constants from '../utils/constants';

/**
 * Sign Up input validation class.
 * @class userValidator
 */
class userValidator {
  /**
   * Function: Check for email conflict
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - The next function used to pass control to another middleware
   * @returns{string} string -  Error message if duplicate email exists.
   */
  static emailCheck(req, res, next) {
    const { email } = req.body;
    const foundEmail = emailExist(allEmails(), email);

    if (foundEmail) {
      return res.status(constants.STATUS_CONFLICT).json({
        status: constants.STATUS_CONFLICT,
        error: constants.MESSAGE_CONFLICT_EMAIL,
      });
    }
    return next();
  }

  /**
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - The next() function for routing requests to the next middleware
   * @returns {object} JSON representing the failure messages
   */
  static signUpValidator(req, res, next) {
    const {
      firstName, lastName, email, address, password, password_confirmation,
    } = req.body;

    const rules = {
      firstName: 'required|min:4|alpha',
      lastName: 'required|min:4|alpha',
      email: 'required|email',
      address: ['required', 'regex:/^[\\d]+(,?)+(?: [A-Za-z0-9]+.+)?/'],
      password: 'required|min:8|alpha_num|confirmed',
      password_confirmation: 'required',
    };

    const validation = new Validator(req.body, rules);
    if (validation.fails()) {
      return res.status(constants.STATUS_BAD_REQUEST).json({
        status: constants.STATUS_BAD_REQUEST,
        // Source: https://github.com/skaterdav85/validatorjs/issues/156
        error: _.mapValues(validation.errors.all(), value => _.toString(value)),
      });
    }

    req.body.firstName = firstName.trim().toLowerCase();
    req.body.lastName = lastName.trim().toLowerCase();
    req.body.email = email.trim().toLowerCase();
    req.body.password = password.trim();
    req.body.password_confirmation = password_confirmation;
    req.body.address = address.trim().toLowerCase();
    return next();
  }
}

export const { emailCheck, signUpValidator } = userValidator;
