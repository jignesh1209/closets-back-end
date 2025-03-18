const { Logger } = require('sequelize/lib/utils/logger');
const db = require('../config/db');
const User = db.user;
const brcypt = require('bcrypt');


class LoginService {
    static async signIn(email, password) {
        const user = await User.findOne({ where: { email: email, password: password }});
        if(user !== null) {
            return user;
        } else {
            return false;
        }
    }

    static async PasswordEncrypt(password) {
        const encPass = brcypt.hashSync(password,5);
        return encPass;
    }

    static async CreateUser(email,pass) {
        try
        {
            const user = await User.create({email: email, password: pass});
            if(user !== null) {
                return true;
            } else {
                return false;
            }
        } catch(e) {
            Logger.warn("Unable to create a user");
            return false;
        }
    }
}

module.exports = LoginService;