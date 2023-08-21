const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const orientationRegistrationData = require('./Controllers/orientationRegistrationData');
const xpeditionRegistrationData = require('./Controllers/xpeditionRegistrationData');
app.use(express.json());

app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/orientationRegister', (req, res) => {
    res.sendFile(__dirname + '/static/html/orientation.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/index.html');
});

app.get('/xpedition', (req, res) => {
    res.sendFile(__dirname + '/static/html/xpedition.html');
})

app.post('/orientationSubmit', (req, res) => {
    orientationRegistrationData.orientationData_get(req, res);
});


app.post('/eventRegisterSubmit', (req, res) => {
    xpeditionRegistrationData.eventRegister_get(req, res);
});

app.listen(PORT, () => {
    console.log('Server Started');
});
