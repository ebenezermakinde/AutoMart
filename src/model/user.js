/**
 * User class.
 */
class User {
  /**
   * Populates the user with values from another object
   * @constructor
   */
  constructor() {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.password = null;
    this.address = null;
    this.isAdmin = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export default User;
