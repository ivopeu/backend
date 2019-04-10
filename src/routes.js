const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const Routes = express.Router();
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
/* Route.get('name', (req, res) => {

}); */

Routes.post('/boxes', BoxController.store);
Routes.get('/boxes/:id', BoxController.show);
Routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = Routes;