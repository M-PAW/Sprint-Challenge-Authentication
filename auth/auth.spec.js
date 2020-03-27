
const authRouter = require('./auth-router');
const jokesRouter = require('../jokes/jokes-router')
const server = require('../api/server');
const request = require('supertest')


// testing JEST
// it('should return true or false', function() {
//     expect(true).toBe(true);
// })

describe('server.js', function() {

    // describe('GET /', function() {
    //     it('Should return a status 200', async function() {
    //         request(jokesRouter).get('/').then( res => {
    //             expect(res.status).toMatch(201);
    //         })          
    //     })
    // })

    describe('GET /', function() {
        it('Should return a status 200', async function() {
            request(jokesRouter).get('/').then( res => {
                expect(res.status).toBe(200);
            })               
        })

        it('Should return a status 200', async function() {
            request(jokesRouter).get('/').then( res => {
                expect(res.type).toMatch(/json/i);
            })          
        })

    })


})

describe('server', function(){

    describe('POST /register', function(){
        it('Should return status 201', async function(){
            request(authRouter).get('/register').then(res => {
                expect(res.status).toBe(201)
            })
        })

        it('Should return status 201', async function(){
            request(authRouter).get('/register').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })

    })

})

describe('server', function(){

    describe('POST /login', function(){
        it('Should return status 201', async function(){
            request(authRouter).get('/login').then(res => {
                expect(res.status.toBe(201))
            })
        })

        it('Should return status 201', async function(){
            request(authRouter).get('/login').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })

    })

})