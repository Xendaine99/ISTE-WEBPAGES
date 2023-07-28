const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const orientationRegistrationData = require('./Controllers/orientationRegistrationData');


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/orientation.html');
});

app.post('/orientationSubmit', (req, res) => {
    orientationRegistrationData.orientationData_get(req, res);
    res.sendFile(__dirname + '/static/html/orientation.html');
});

app.listen(3000, () => {
    console.log('Server Started');
});
