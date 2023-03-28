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

//course details route
const coursedetailsRoute = require("./coursedetails");
app.use("/coursedetails", coursedetailsRoute);

//services route
const servicesRoute = require("./services");
app.use("/services", servicesRoute);

//instructors route
const instructorsRoute = require("./instructors");
app.use("/instructors", instructorsRoute);

// Define your routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
