const request = require('supertest');
const test_repo = require('../src/in_memory.js')();
const app = require('../src/app')(test_repo); //testy potrzebuja testowego repo

describe('Book inventory', function(){
    it('allows to stock up the items', function(done){
         request(app)
            .post('/stock')
            .send({isbn: '123456789', count: 10})
            .expect({isbn: '123456789', count: 10}, done);
    });
});

