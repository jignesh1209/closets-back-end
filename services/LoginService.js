const db = require('../config/db');
const User = db.user;


class LoginService {
    static async signIn(email, password) {
        console.log(email);
        const user = await User.findOne({ where: { email: email, password: password }});
        if(user !== null) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = LoginService;