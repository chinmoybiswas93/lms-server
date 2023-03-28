const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Configure CORS middleware
app.use(cors());

// Configure bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routers
const coursesRoute = require("./courses");
app.use("/courses", coursesRoute);

const coursedetailsRoute = require("./coursedetails");
app.use("/coursedetails", coursedetailsRoute);

// Define your routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
