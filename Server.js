const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./Controllers/UserController');
const productController = require('./Controllers/ProductController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use('/user', userController);
app.use('/product', productController);

app.listen(3001);

//เกือบจบวันที่21 สไลด์ที่ 586 28:37
