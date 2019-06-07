import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { goodCarDetails, badCarDetails } from './mockData/carMockData';
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
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        expect(res.body.status).to.equal(201);
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
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(400);
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
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(400);
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
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        expect(res.body.status).to.equal(200);
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
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(404);
        expect(res.body.error).to.equal(constants.MESSAGE_NO_CAR);
        done();
      });
  });
  it('should return an error if the ID is not a number', (done) => {
    chai
      .request(app)
      .get(`${apiURL}/car/NOT_A_NUMBER`)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error');
        expect(res.body.status).to.equal(400);
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
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        expect(res.body.status).to.equal(200);
        expect(res.body.data).to.be.a('array');
        expect(res.body.data[0]).to.be.a('object');
        done();
      });
  });
});
