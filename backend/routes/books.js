const { Router } = require('express');
const Book = require('../models/Book');
const router = Router();

const book = require('../models/Book')

router.get('/', async (req, res) => {
    const books = await book.find();
    res.json(books)
});

router.post('/', async (req, res)=> {
 const {title, author, isbn} = req.body;
 newBook = new book({title, author, isbn});
 await newBook.save();
 res.json({message : "Book Saved"});
});

router.delete('/:id', async (req, res) => {
    await book.findByIdAndDelete(req.params.id);
    res.json({message: 'Book Deleted'});
});

module.exports = router;