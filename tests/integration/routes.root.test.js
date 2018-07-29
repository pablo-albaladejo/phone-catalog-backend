process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
chai.use(require('chai-things'));

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../server');

describe('routes : root', () => {
    
    describe('GET /', () => {
        it('should respond with app meta info', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    // there should be no errors
                    should.not.exist(err);

                    // there should be a 200 status code
                    res.status.should.equal(200);

                    // the response should be JSON
                    res.type.should.equal('application/json');

                    // the JSON response body should have data
                    should.exist(res.body);

                    // have the right keys
                    res.body.should.have.property('version');
                    res.body.should.have.property('name');
                    res.body.should.have.property('author');

                    done();
                });
        });
    });
    describe('GET /does/not/exists', () => {
        it('should throw an error', (done) => {
            chai.request(server)
                .get('/does/not/exists')
                .end((err, res) => {
                    // there should be a 400 status code
                    res.status.should.equal(400);

                    done();
                });
        });
    })
});
