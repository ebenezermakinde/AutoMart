import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import database from '../dummyData/database';

const { users } = database;

/**
 * The helper class
 */
class Helpers {
  /**
   * Function: To find existing emails in the DB
   * @param {array} array - The array of emails
   * @param {strind} email - The email to check with
   * @returns{boolean} true -  If the email does exist.
   */
  static emailExist(array, email) {
    let result = false;
    array.forEach((data) => {
      if (data === email) {
        result = true;
      }
    });
    return result;
  }

  /**
   * Function: To collect all emails
   * @returns {array} AllEmails - returns all emails in the DB.
   */
  static allEmails() {
    const AllEmails = [];
    users.forEach((data) => {
      AllEmails.push(data.email);
    });

    return AllEmails;
  }

  /**
   * Function: Generates the token.
   * @param {object} user - the user passed in.
   * @return {token} token - The user token as generated.
   */
  static createUserToken(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: ONE_WEEK });
  }

  /**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }
}
export const {
  createUserToken, hashPassword, emailExist, allEmails,
} = Helpers;
