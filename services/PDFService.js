const db = require('../config/db');
const Log = db.log;

class PDFService {
    static async SaveFilter(reqBody) {
        const response = await Log.create({ jobid: reqBody.jobId, userid: reqBody.userId, jsoncontent: JSON.stringify(reqBody) });
        return response.data;
    }
}

module.exports = PDFService;