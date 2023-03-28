const express = require("express");
const router = express.Router();
const pool = require("./db");

router.get("/", async (req, res) => {
  try {
    const [details] = await pool.query(
      "SELECT * FROM `coursedetails` WHERE id=1"
    );
    const [module] = await pool.query(
      "SELECT * FROM `coursemodule` WHERE courseId=1"
    );
    const courseDetails = {
      details: details,
      module: module,
    };
    res.json(courseDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  // res.send("got the router")
});

module.exports = router;
