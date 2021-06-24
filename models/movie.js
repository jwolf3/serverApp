const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.export = mongoose.model('Movie', movieSchema);