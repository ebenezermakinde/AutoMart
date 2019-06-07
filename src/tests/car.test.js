import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { goodCarDetails, badCarDetails, updatePrice } from './mockData/carMockData';
import constants from '../utils/constants';


const { should, expect } = chai;
should();

chai.use(chaiHttp);

const { apiURL } = global;

describe('Create a car', () => {
  it('should create a new car with complete input', (done) => {
    chai
      .request(app)
      .post(`${apiURL}/car`)
      .send(goodCarDetails[0])
      .end((err, res) => {
        res.should.have.status(constants.STATUS_CREATED);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        expect(res.body.status).to.equal(constants.STATUS_CREATED);
        expect(res.body.data).to.be.a('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('owner');
        expect(res.body.data).to.have.property('createdOn');
        expect(res.body.data).to.have.property('state');
        expect(res.body.data).to.have.property('status');
        expect(res.body.data).to.have.property('price');
        expect(res.body.data).to.have.property('manufacturer');
        expect(res.body.data).to.have.property('bodyType');
        expect(res.body.data).to.have.property('transmission');
        done();
      });
  });
  it('should return an erorr if incorrect state is provided', (done) => {
    chai
      .request(app)
      .post(`${apiURL}/car`)
      .send(badCarDetails[0])
      .end((err, res) => {
        res.should.have.status(constants.STATUS_BAD_REQUEST);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(constants.STATUS_BAD_REQUEST);
        expect(res.body.error).to.be.a('object');
        expect(res.body.error).to.have.property('state');
        expect(res.body.error.state).to.equal(constants.MESSAGE_STATE_OPTIONS);
        done();
      });
  });
  it('should return an erorr if incorrect transmission is provided', (done) => {
    chai
      .request(app)
      .post(`${apiURL}/car`)
      .send(badCarDetails[1])
      .end((err, res) => {
        res.should.have.status(constants.STATUS_BAD_REQUEST);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(constants.STATUS_BAD_REQUEST);
        expect(res.body.error).to.be.a('object');
        expect(res.body.error).to.have.property('transmission');
        expect(res.body.error.transmission).to.equal(constants.MESSAGE_TRANSMISSION_OPTIONS);
        done();
      });
  });
});

describe('Get a car', () => {
  it('should get an available car present in db', (done) => {
    chai
      .request(app)
      .get(`${apiURL}/car/1`)
      .end((err, res) => {
        res.should.have.status(constants.STATUS_OK);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        expect(res.body.status).to.equal(constants.STATUS_OK);
        expect(res.body.data).to.be.a('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('owner');
        expect(res.body.data).to.have.property('createdOn');
        expect(res.body.data).to.have.property('state');
        expect(res.body.data).to.have.property('status');
        expect(res.body.data).to.have.property('price');
        expect(res.body.data).to.have.property('manufacturer');
        expect(res.body.data).to.have.property('bodyType');
        expect(res.body.data).to.have.property('transmission');
        done();
      });
  });
  it('should return an error if the car is not in the db', (done) => {
    chai
      .request(app)
      .get(`${apiURL}/car/190`)
      .end((err, res) => {
        res.should.have.status(constants.STATUS_NOT_FOUND);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(constants.STATUS_NOT_FOUND);
        expect(res.body.error).to.equal(constants.MESSAGE_NO_CAR);
        done();
      });
  });
  it('should return an error if the ID is not a number', (done) => {
    chai
      .request(app)
      .get(`${apiURL}/car/NOT_A_NUMBER`)
      .end((err, res) => {
        res.should.have.status(constants.STATUS_BAD_REQUEST);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(constants.STATUS_BAD_REQUEST);
        expect(res.body.error).to.equal(constants.MESSAGE_INVALID_ID);
        done();
      });
  });
});

describe('Get all cars', () => {
  it('should get all the cars in the db', (done) => {
    chai
      .request(app)
      .get(`${apiURL}/car`)
      .end((err, res) => {
        res.should.have.status(constants.STATUS_OK);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        expect(res.body.status).to.equal(constants.STATUS_OK);
        expect(res.body.data).to.be.a('array');
        expect(res.body.data[0]).to.be.a('object');
        done();
      });
  });
});

describe('DELETE a car', () => {
  it('should remove a car and display a success message', (done) => {
    chai
      .request(app)
      .delete(`${apiURL}/car/3`)
      .end((err, res) => {
        res.should.have.status(constants.STATUS_OK);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        expect(res.body.status).to.equal(constants.STATUS_OK);
        expect(res.body.data).to.be.a('object');
        expect(res.body.data).to.have.property('message');
        expect(res.body.data).to.have.property('car');
        expect(res.body.data.message).to.equal(constants.MESSAGE_DELETED_CAR);
        expect(res.body.data.car).to.have.property('id');
        expect(res.body.data.car).to.have.property('owner');
        expect(res.body.data.car).to.have.property('createdOn');
        expect(res.body.data.car).to.have.property('state');
        expect(res.body.data.car).to.have.property('status');
        expect(res.body.data.car).to.have.property('price');
        expect(res.body.data.car).to.have.property('manufacturer');
        expect(res.body.data.car).to.have.property('model');
        expect(res.body.data.car).to.have.property('bodyType');
        expect(res.body.data.car).to.have.property('transmission');
        done();
      });
  });
  it('should display an error 404 message if car is not available', (done) => {
    chai
      .request(app)
      .delete(`${apiURL}/car/190`)
      .end((err, res) => {
        res.should.have.status(constants.STATUS_NOT_FOUND);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(constants.STATUS_NOT_FOUND);
        expect(res.body.error).to.be.equal(constants.MESSAGE_NO_CAR);
        done();
      });
  });
});
