const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./Controllers/UserController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', userController);

app.listen(3001);