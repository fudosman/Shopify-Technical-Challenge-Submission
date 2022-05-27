const express = require("express");
const { StatusCodes } = require('http-status-codes');
const app = express();
const globalErrorHandler = require("./errors/app_error_handler");
require("./middlewares/pre-route.middleware")(app);


// API Version 1
app.use("/api", require("./routes/versions"));

// PING
app.get("/ping", (req, res) => res.status(StatusCodes.OK).send("the server is running!"));

// Not Found route
app.all("*", (req, res) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    status: "failed",
    message: "Can't find " + req.originalUrl + " on this server",
  });
});


// Error middlewares
app.use(globalErrorHandler);

module.exports = app;