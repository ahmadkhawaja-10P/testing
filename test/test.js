'use strict';
let chai = require('chai');
let server = require('../src');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
let expect = chai.expect;

describe('GET /', ()=> {
    it('get the page', (done) => {
    chai.request(server).get('/')
    .end((err, res) => {
        expect(res).to.have.status(200);
        done();
  });;
    });
});


