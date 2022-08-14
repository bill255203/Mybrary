const express = require('express');
const router = express.Router();
const Author = require('../models/author');

//All authors Route
router.get('/', (req, res) => {
  res.render('authors/index');
});

//NEW ones
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new Author() });
});

//create author route
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    //res.redirect('authors/${newAuthors.id}')
    res.redirect('authors');
  } catch {
    res.render('/authors/new', {
      author: author,
      errorMessage: 'error nono',
    });
  }
});

module.exports = router;
