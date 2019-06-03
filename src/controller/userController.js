import UserServices from '../services/userServices';
import constants from '../utils/constants';


/**
 * User class.
 */
class UserController {
  /**
   * Create user function.
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON - The newly created user.
   */
  static signUp(req, res) {
    const data = req.body;
    res.status(constants.STATUS_CREATED).send(UserServices.signUp(data));
  }

  /**
   * User login function
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON - representing the logged in user
   */
  static login(req, res) {
    const data = req.body;
    const response = UserServices.login(data);

    if (response.status === constants.STATUS_FORBIDDEN) {
      return res.status(constants.STATUS_FORBIDDEN).send(response);
    }
    return res.status(constants.STATUS_OK).send(response);
  }
}

export const { signUp, login } = UserController;
