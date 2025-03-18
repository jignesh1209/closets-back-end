const { Logger } = require('sequelize/lib/utils/logger');
const db = require('../config/db');
const User = db.user;
const brcypt = require('bcrypt');


class LoginService {
    static async signIn(email, password) {
        const user = await User.findOne({ where: { email: email }});
        const encPass = await brcypt.compare(password, user.password);
        if(user != null && encPass) {
            return {userid: user.userid, email: user.email};
        } else {
            return false
        }
    }

    static async PasswordEncrypt(password) {
        const encPass = await brcypt.hash(password,5);
        return encPass;
    }

    static async CreateUser(email,pass) {
        try
        {
            const encPass = await brcypt.hash(pass,5);
            const user = await User.create({email: email, password: encPass});
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