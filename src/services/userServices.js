import database from '../dummyData/database';
import User from '../model/user';
import { createUserToken, hashPassword } from '../utils/helpers';
import constants from '../utils/constants';

const { users } = database;

/**
 * The User Services class.
 */
export default class UserServices {
  /**
   * Function: SignUp a user.
   * @param {string} firstName - firstName
   * @param {string} lastName - lastName
   * @param {string} password - password
   * @param {string} email - email
   * @param {string} address - address
   * @return {object} New user - The new user object
   */
  static signUp({
    firstName, lastName, password, email, address,
  }) {
    const hashedPassword = hashPassword(password);
    const user = new User();
    user.id = users[users.length - 1].id + 1;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = hashedPassword;
    user.address = address;

    users.push(user);
    return this.getJsonWebToken(user);
  }

  /**
   * Function to generate the token.
   * @param {object} user - The newly generated user object.
   * @returns {object} res - The user object
   */
  static getJsonWebToken(user) {
    const {
      id, firstName, lastName, email, address, createdAt, updatedAt,
    } = user;
    let userJson = JSON.stringify(user);
    userJson = JSON.parse(userJson);
    const res = {
      status: constants.STATUS_CREATED,
      data: {
        token: createUserToken(userJson),
        id,
        firstName,
        lastName,
        email,
        address,
        createdAt,
        updatedAt,
      },
    };
    return res;
  }
}
