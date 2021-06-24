const express = require('express');
const router = express.Router();
const movie = require('../models/movie')

//alle movies route
router.get('/', (req, res) => {
    res.render('movies/index')
});

//nieuwe movie route
router.get('/new', (req, res) => {
    res.render('movies/new', { movie: new movie() })
});

//toevoegen nieuwe movie
router.post('/', (req, res) => {
    res.send('Create')
});

module.exports = router;

