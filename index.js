const express = require('express')
const app = express();
const port = 5000;

const courses = require('./data/courses.json')


app.get('/', (req, res) => {
    res.send('course API running');
})

app.get('/course-categories', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('courses server running on port', port)
})