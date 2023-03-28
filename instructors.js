const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM `instructors`");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  // res.send("got the router")
});

module.exports = router;
