const express = require('express');
const hbs = require('express-handlebars');
const loginRoutes = require('./routes/login');
const pdfRoutes = require('./routes/pdf');
const path = require('path');
const cors = require("cors");
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app =  express();


const PORT = process.env.PORT || 3001;

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors(corsOptions));

  // Serve Swagger documentation


app.engine('handlebars', hbs.engine());

//to use for images in generate pdf
app.use('/temp', express.static('temp'));

app.set('views', path.join(__dirname, 'views'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', loginRoutes);
app.use('/api/pdf', pdfRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(PORT, () =>{
    console.log(`application working on port ${PORT}`)
});