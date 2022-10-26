const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const courses = require('./data/courses.json');
const details = require('./dataFile/details.json')

app.get('/', (req, res) => {
    res.send('course API running');
})

app.get('/course-categories', (req, res) => {
    res.send(courses)
})

app.get('/course', (req, res) => {
    res.send(details);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;

    if (id === '07') {
        res.send(details);
    }
    else {
        const category_course = details.filter(c => c.category_id == id);
        res.send(category_course);

    }

})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.params.id)
    const selectedCourse = details.find(c => c._id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('courses server running on port', port)
})