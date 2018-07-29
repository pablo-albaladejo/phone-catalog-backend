process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
chai.use(require('chai-things'));

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../server');

describe('routes : phones', () => {
    describe('GET /phones', () => {
        it('should respond with all phones', (done) => {
            chai.request(server)
                .get('/phones')
                .end((err, res) => {
                    // there should be no errors
                    should.not.exist(err);

                    // there should be a 200 status code
                    res.status.should.equal(200);

                    // the response should be JSON
                    res.type.should.equal('application/json');

                    // the JSON response body should have values
                    res.body.length.should.not.equal(0);

                    // have the right keys
                    res.body.should.all.have.property('id');
                    res.body.should.all.have.property('name');
                    res.body.should.all.have.property('color');
                    res.body.should.all.have.property('currency');
                    res.body.should.all.have.property('price');
                    res.body.should.all.have.property('thumb_url');

                    done();
                });
        });
    });

    describe('GET /phones:id', () => {
        it('should respond with a single phone', (done) => {
            chai.request(server)
                .get('/phones/111')
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
                    res.body.should.have.property('id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('color');
                    res.body.should.have.property('currency');
                    res.body.should.have.property('price');
                    res.body.should.have.property('image_url');

                    done();
                });
        });
    });

});