const request = require('supertest')
const {app,server} = require('../index')

describe('GET /', () => {
    it('should return Order Service is running', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe('Order Service is running')
    })
})

afterAll(() => {
    server.close();
});
