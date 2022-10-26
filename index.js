const express = require('express')
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('course API running');
})

app.listen(port, () => {
    console.log('courses server running on port', port)
})