const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

//alle movies route
router.get('/', (req, res) => {
    res.render('movies/index')
});

//nieuwe movie route
router.get('/new', (req, res) => {
    res.render('movies/new', { movie: new Movie() })
});

//toevoegen nieuwe movie
router.post('/', (req, res) => {
    const movie = new Movie ({
        title: req.body.title
    })
    movie.save((err,newMovie) => {
        if (err) {
            res.render('movies/new', {
                movie: movie,
                errorMessage: 'Error met het maken van een movie'
            })
        } else {
            // res.redirect(`movies/${newMovie.id}`)
            res.redirect('movies')
        }
    })
});

module.exports = router;

