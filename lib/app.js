const express = require('express');
//added this path line
const path = require('path');
const app = express();

// Built in middleware
app.use(express.json());
// added this second line
app.use(express.static(path.join(__dirname, 'public')));

// App routes

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
