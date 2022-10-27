const express = require("express");
const app = express();
 
const port = process.env.PORT || 5000;



const allCourses = require("./data/courses.json");


app.get("/", (req, res) => {
  res.send("Hello Learners, welcome to education buddies!");
});
app.get('/courses', (req, res) => {
  res.send(allCourses);
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
