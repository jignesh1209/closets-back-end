const express = require('express');
const GeneratePDFController = require('../controllers/GeneratePDFController');

const routes = express.Router();


/** POST: http://localhost:3001/api/savefilter
 * @param : {
  "jobId" : "example123",
  "clientName": "example123"
}
*/
routes.post('/savefilter', (req, res) => {
    GeneratePDFController.SaveFilter(req,res);
})

module.exports = routes;