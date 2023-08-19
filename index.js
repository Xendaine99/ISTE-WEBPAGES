const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const orientationRegistrationData = require('./Controllers/orientationRegistrationData');

app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/orientationRegister', (req, res) => {
    res.sendFile(__dirname + '/static/html/Orientation.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/index.html');
});

app.get('/eventRegister', (req, res) => {
    res.sendFile(__dirname + '/static/html/xpedition.html');
});

app.post('/orientationSubmit', (req, res) => {
    orientationRegistrationData.orientationData_get(req, res);
    res.sendFile(__dirname + '/static/html/Orientation.html');
});

app.listen(3000, () => {
    console.log('Server Started');
});
