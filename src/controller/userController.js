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
}

export default UserController;
