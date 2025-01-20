const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;



const posts = [
    {id: 1, title: 'Post 1', content: 'This is the first post'},
    {id: 2, title: 'Post 2', content: 'This is the second post'},
    {id: 3, title: 'Post 3', content: 'This is the third post'}
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});



app.listen(port, () => {
  console.log('Server is running on http://localhost:8000');
});