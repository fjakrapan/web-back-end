const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./Controllers/UserController');
const productController = require('./Controllers/ProductController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', userController);
app.use('/product', productController);

app.listen(3001);

//จบวันที่15 สไลด์ที่ 465