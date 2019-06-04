import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import goodCarDetails from './mockData/carMockData';


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
});
