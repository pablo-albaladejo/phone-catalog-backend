const chai = require('chai');
const should = chai.should();

const phoneModel = require('../../src/models/phone');

describe('model: phones', () => {

  describe('getAll()', () => {
    it('should return all phones', async () => {
      const phones = await phoneModel.getAll();
      
      // the response body should have values
      phones.length.should.not.equal(0);

      // have the right keys
      phones.should.all.have.property('id');
      phones.should.all.have.property('name');
      phones.should.all.have.property('color');
      phones.should.all.have.property('currency');
      phones.should.all.have.property('price');
      phones.should.all.have.property('thumb_url');
    });
  });

  describe('getById(id)', () => {
    it('should return a single phone', async () => {
      const phone = await phoneModel.getById(111);

      // the response body should have values
      should.exist(phone);

      // have the right keys
      phone.should.have.property('id');
      phone.should.have.property('name');
      phone.should.have.property('description');
      phone.should.have.property('color');
      phone.should.have.property('currency');
      phone.should.have.property('price');
      phone.should.have.property('image_url');

    });
  });

});