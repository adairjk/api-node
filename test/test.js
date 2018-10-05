var request = require('supertest'),
    app = require('../app')
describe('Application', function() {
  describe('GET /', function() {
    it('should return Hello World', function(done) {
      request(app)
       .get('/')
       .expect(200, 'Hello world', done);
    })
  });
  describe('GET /test', function() {
    it('should return Hello World', function(done) {
      request(app)
       .get('/test')
       .expect(200, 'This is only a test', done);
    })
  });

})
