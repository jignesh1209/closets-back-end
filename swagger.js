const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Closets API",
    versiom: "1.0.0",
    description: "User login and PDF generate",
  },
  tags: [
    {
      name: "Closets By Design",
      description: "Login and Storing filters",
    },
  ],
  schemes: ["http"],
  servers: [
    {
      url: "http://localhost:3001/",
      description: "Local server",
    },
    {
      url: "http://www.closets.com",
      description: "Live server",
    },
  ]
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
