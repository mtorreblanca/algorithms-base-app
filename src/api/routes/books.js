const express = require('express');

const router = express.Router();

/**
 * GET request to /books
 */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'All Books were fetched',
  });
});

/**
 * GET request to /books/:id
 */
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'Book with id was fetch',
  });
});
