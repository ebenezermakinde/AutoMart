import Validator from 'validatorjs';
import constants from '../utils/constants';

/**
 * Class to help with other validations
 */
class ValidationHelper {
  /**
   * Function: To help check valid IDs in params.
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - The next() function for routing requests to the next middleware
   * @returns{string} string - The error message.
   */
  static validateID(req, res, next) {
    const { id } = req.params;

    const rules = {
      id: ['required', 'regex:/^[0-9]+$/'],
    };

    const validation = new Validator(req.params, rules, { 'regex.id': constants.MESSAGE_INVALID_ID });
    if (validation.fails()) {
      return res.status(constants.STATUS_BAD_REQUEST).json({
        status: constants.STATUS_BAD_REQUEST,
        error: validation.errors.first('id'),
      });
    }
    req.params.id = id;
    return next();
  }
}

export default ValidationHelper;
