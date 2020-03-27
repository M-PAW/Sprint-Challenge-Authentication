
const authRouter = require('./auth-router');
const jokesRouter = require('../jokes/jokes-router')
const server = require('../api/server');
const request = require('supertest')

const db = require('../database/dbConfig');

// testing JEST
// it('should return true or false', function() {
//     expect(true).toBe(true);
// })

describe('server.js', function() {


    it('should respond with status of 200', () => {
         request(server)
                .get('/api/jokes')
                .then(res => {
                    expect(res.status).toBe(200);
                });
    });

    it ('should return a status 200', () => {
        request(server).get('/api/jokes').then(response => {
        expect(response.status).toBe(400)
        })
    })
    

    it('Should return a status of 200', async function() {
        request(server).get('/api/jokes').then( res => {
            expect(res.type).toMatch(/json/i);
        })          
    })


})

describe('POST /', function(){

    describe('POST /register', function(){

        it('should return status 201', () => {
                    request(server).post('/api/auth/register').send({ username: 'Mike7', password: 'password' })
                    
                    .then(res => {
                        expect(res.status).toBe(201);
                    })
        });

        it('should return a JSON object', () => {
            return db('users')
                    .then(() => {
                        return request(server).post('/api/auth/register').send({ username: 'Mike', password: 'password' })
                    })
                    .then(res => {
                        expect(res.type).toBe('application/json');
                    })
        });

    })

})

describe('server', function(){

    describe('POST /login', function(){


        it('should return a status of 200', () => {
            return db('users')
            .then(() => { 
                return request(server).post('/api/auth/register').send({ username: 'Mike2', password: 'password' })
            })
            .then(() => {
                return request(server).post('/api/auth/login').send({ username: 'Mike2', password: 'password' })
            })
            .then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('should return a JSON object', () => {
            return db('users')
            .then(() => { 
                return request(server).post('/api/auth/register').send({ username: 'Mike4', password: 'password' })
            })
            .then(() => {
                return request(server).post('/api/auth/login').send({ username: 'Mike4', password: 'password' })
            })
            .then(res => {
                expect(res.type).toBe('application/json');
            });
        });

    })

})