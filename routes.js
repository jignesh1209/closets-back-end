const express = require('express');
const GeneratePDFController = require('./controllers/GeneratePDFController');
const Login = require('./controllers/Login');

const routes = express.Router();


routes.get('/', (req,res) => {
    res.send('Hello World');
});

routes.post('/generatepdf', (req,res) => {
    GeneratePDFController.GeneratePDF(req,res);
});

routes.post('/signin',(req,res) => {
    Login.SignIn(req, res);
});

module.exports = routes;
