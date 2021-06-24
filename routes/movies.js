const express = require('express');
const router = express.Router();

//alle movies route
router.get('/', (req, res) => {
    res.render('movies/index')
});

//nieuwe movie route
router.get('/new', (req, res) => {
    res.render('movies/new')
});

//toevoegen nieuwe movie
router.post('/', (req, res) => {
    res.send('Create')
});

module.exports = router;

