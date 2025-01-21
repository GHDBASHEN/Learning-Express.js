const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;



const posts = [
    {id: 1, title: 'Post 1', content: 'This is the first post'},
    {id: 2, title: 'Post 2', content: 'This is the second post'},
    {id: 3, title: 'Post 3', content: 'This is the third post'}
];
//get all posts
app.get('/api/posts', (req, res) => {
   const limit = parseInt(req.query.limit);
   
   if (!isNaN(limit)&& limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
   }
   res.status(200).json(posts);
});
//get single post
app.get('/api/posts/:id', (req, res) => {
    const id =parseInt(req.params.id);
    res.json(posts.filter(post => post.id === id));
});



app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});