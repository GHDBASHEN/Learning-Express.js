const express = require('express');
const router = express.Router();


const posts = [
    {id: 1, title: 'Post 1', content: 'This is the first post'},
    {id: 2, title: 'Post 2', content: 'This is the second post'},
    {id: 3, title: 'Post 3', content: 'This is the third post'}
];

//get all posts
router.get('/', (req, res) => {
   const limit = parseInt(req.query.limit);
   
   if (!isNaN(limit)&& limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
   }
   res.status(200).json(posts);
});
//get single post
router.get('/:id', (req, res) => {
    const id =parseInt(req.params.id);
   const post= posts.find((post) => post.id === id);
   if (!post)
    return res
        .status(404)
        .json({message: 'A post with the id ${id} was not found'});
;
    res.status(200).json(post);

});

//create a post
router.post('/', (req, res) => {
    console.log(req.body);

    res.status(201).json(req.body);
});

module.exports = router;