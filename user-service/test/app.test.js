const request = require('supertest')
const {app,server} = require('../index')

describe('GET /', () => {
    it('should return User Service is running', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe('User Service is running')
    })
})

afterAll(() => {
    server.close();
});
