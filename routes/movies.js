const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

//alle movies route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.title != null && req.query.title !== '') {
        searchOptions.title = new RegExp(req.query.title, "i")
    }
    try {
        const movies = await Movie.find(searchOptions)
        res.render('movies/index', { 
            movies: movies,
            searchOptions: req.query
         })
    } catch {
        res.redirect('/')
    }
});

//nieuwe movie route
router.get('/new', (req, res) => {
    res.render('movies/new', { movie: new Movie() })
});

//toevoegen nieuwe movie
router.post('/', async (req, res) => {
    const movie = new Movie ({
        title: req.body.title
    })

    try {
        const newMovie = await movie.save()
            // res.redirect(`movies/${newMovie.id}`)
            res.redirect('movies')

    } catch {
        res.render('movies/new', {
            movie: movie,
            errorMessage: "Error creating movie"
        })
    }
});

module.exports = router;

