import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { goodSignUpDetail, badSignUpDetails } from './mockData/userMockData';
import constants from '../utils/constants';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const { apiURL } = global;

describe('User test', () => {
  describe('SignUp a user', () => {
    describe('User with good details', () => {
      it('should return status code 201 and create a new user', (done) => {
        chai
          .request(app)
          .post(`${apiURL}/auth/signup`)
          .send(goodSignUpDetail[0])
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            expect(res.body.status).to.equal(201);
            expect(res.body.data).to.be.a('object');
            expect(res.body.data).to.have.property('token');
            expect(res.body.data).to.have.property('id');
            expect(res.body.data).to.have.property('firstName');
            expect(res.body.data).to.have.property('lastName');
            expect(res.body.data).to.have.property('email');
            expect(res.body.data).to.have.property('address');
            expect(res.body.data).to.have.property('createdAt');
            expect(res.body.data).to.have.property('updatedAt');
            done();
          });
      });
    });
  });
  describe('User signing up with existing email', () => {
    it('should return status code 409 and send an error message', (done) => {
      chai
        .request(app)
        .post(`${apiURL}/auth/signup`)
        .send(badSignUpDetails[0])
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(409);
          expect(res.body.error).to.equal(constants.MESSAGE_CONFLICT_EMAIL);
          done();
        });
    });
  });
  describe('User with empty details trying to signup', () => {
    it('should return status code 400 and send an error messages', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(badSignUpDetails[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.be.a('object');
          expect(res.body.error.firstName).to.equal(constants.MESSAGE_FIRSTNAME_REQUIRED);
          expect(res.body.error.lastName).to.equal(constants.MESSAGE_LASTNAME_REQUIRED);
          expect(res.body.error.email).to.equal(constants.MESSAGE_EMAIL_REQUIRED);
          expect(res.body.error.address).to.equal(constants.MESSAGE_ADDRESS_REQUIRED);
          expect(res.body.error.password).to.equal(constants.MESSAGE_PASSWORD_REQUIRED);
          expect(res.body.error.password_confirmation).to
            .equal(constants.MESSAGE_PASSWORD_CONFIRM_REQUIRED);
          done();
        });
    });
  });
});
