const frisby = require('frisby');

const HOST = "188.166.246.95"

it('user-serivce is up', () => {
    return frisby.get(`http://${HOST}:8080/actuator/health`)
        .expect('status', 200)
        .expect('json', 'status', 'UP')
})