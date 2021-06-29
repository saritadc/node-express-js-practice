const Joi = require("joi");
const express = require("express");
const app = express();

const courses = [
  { id: 1, course: "course 1" },
  { id: 2, course: "course 1" },
  { id: 3, course: "course 1" },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to rest api");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) return res.status(404).send("Not found");
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  if (!req.body.course || req.body.course.length < 3) {
    return res.status(400).send("Name and minimum 3 required");
  }

  const course = { id: courses.length + 1, course: req.body.course };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id));
    if (!course) res.status(404).send("course not found");
    
    if (!req.body.course || req.body.course.length < 3) {
        return res.status(400).send("Not valid");
    }

    course.course = req.body.course;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("course not found");

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LIstening to port ${port}`));

