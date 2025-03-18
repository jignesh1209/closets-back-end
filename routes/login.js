const express = require('express');
const Login = require('../controllers/Login');

const routes = express.Router();


routes.get('/', (req,res) => {
    res.send('Hello World');
});

/** POST: http://localhost:3001/api/signin 
 * @param : {
  "email" : "example123",
  "password": "example123"
}
*/
routes.post('/signin',(req,res) => {
    Login.SignIn(req, res);
});

/** POST: http://localhost:3001/api/create
 * @param : {
  "email" : "example123",
  "pass": "example123"
}
*/
routes.post('/createuser', (req, res) =>{
    Login.createUser(req,res);
});

/** POST: http://localhost:3001/api/encryptpassword
 * @param : {
  "pass" : "example123",
}
*/
routes.post('/encryptpass', (req, res) => {
    Login.PassowordEncrypt(res,res);
})




module.exports = routes;
