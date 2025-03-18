const express = require('express');
const Login = require('../controllers/Login');

const routes = express.Router();

/** POST: http://localhost:3001/api/signin 
 * @body : {
  "email" : "example123",
  "password": "example123"
}
*/
routes.post('/signin',(req,res) => {
    Login.SignIn(req, res);
});

/** POST: http://localhost:3001/api/create
 * @body : {
  "email" : "example123",
  "pass": "example123"
}
*/
routes.post('/createuser', (req, res) =>{
    Login.createUser(req,res);
});

/** POST: http://localhost:3001/api/encryptpassword
 * @body : {
  "pass" : "example123",
}
*/
routes.post('/encryptpass', (req, res) => {
    Login.PassowordEncrypt(req,res);
})




module.exports = routes;
