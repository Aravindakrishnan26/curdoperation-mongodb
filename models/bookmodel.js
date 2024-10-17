const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String
})


const bookmodel = mongoose.model('book', bookSchema)

module.exports = bookmodel;
