const express = require('express');

const router = express.Router();

const createPuzzle = require('./createPuzzle');
const createPuzzleAndroid = require('./createPuzzleAndroid');
const getPuzzles = require('./getPuzzles');
const getPuzzleById = require('./getPuzzleById');
const updatePuzzle = require('./updatePuzzle');
const uploadImage = require('./uploadImage');

router.post('/createPuzzle', createPuzzle);
router.post('/createPuzzleAndroid', createPuzzleAndroid);
router.get('/getPuzzleById/:id', getPuzzleById);
router.get('/', getPuzzles);
router.put('/updatePuzzle/:id', updatePuzzle);
router.use('/uploadImage', uploadImage);

module.exports = router;