var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

var request = require('supertest'),
    app = require('../app')
describe('Application', function() {
  describe('GET /', function() {
    it('should return Hello World', function(done) {
      request(app)
       .get('/')
       .expect(200, 'Hello world', done);
    })
  })
})
