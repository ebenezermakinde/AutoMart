/**
 * Car Class.
 */
export default class Cars {
  /**
   * Populates the car with values from another object
   * @constructor
   */
  constructor() {
    this.id = null;
    this.owner = null;
    this.createdOn = new Date();
    this.state = null;
    this.status = 'available';
    this.price = null;
    this.manufacturer = null;
    this.model = null;
    this.bodyType = null;
    this.transmission = null;
  }
}
