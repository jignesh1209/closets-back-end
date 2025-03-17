const LoginService = require('../services/LoginService');

class Login {
    static async SignIn(req, res) {
        const email = req.body.email;
        const pass = req.body.pass;

        const isUserExists = await LoginService.signIn(email,pass);
        return res.send(isUserExists);
    }
}

module.exports = Login;