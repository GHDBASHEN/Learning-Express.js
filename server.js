const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const posts = require('./routes/posts');

const app = express();
app.use(express.json());
app.use (express.urlencoded({extended: false}));

//Routes
app.use('/api/posts', posts);

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});