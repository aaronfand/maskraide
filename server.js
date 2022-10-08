"use strict";

// system requirements
const express = require("express");
const session = require('express-session');
var cors = require("cors");
var path = require("path");
const helmet = require("helmet");
var _ = require('lodash');

// app requirements
var httpsRedirect = require("./routes/https-redirect");
var versionRouter = require("./routes/version");


// Process Environment
console.log("process.env.NODE_ENV",process.env.NODE_ENV);
if (!process.env.NODE_ENV) {
	require('dotenv').config();
	console.log("process.env.NODE_ENV",process.env.NODE_ENV);
}

const app = express();

// CORS support
var corsOptions = {
	'origin': [
		'http://localhost:4400',
	],   
	'credentials': true,
	'optionsSuccessStatus': 200
};
app.use(cors(corsOptions));
app.use(helmet());

// Session
app.use(session({
	secret: "Locked down because of COVID19!",
	resave: false,
	saveUninitialized: true
}));

// Routes
app.use('/rest/version', versionRouter);

// static pages
app.use(express.static(path.join(__dirname, "public")));

// Start the server
const PORT = process.env.PORT || 4430;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


module.exports = app;
