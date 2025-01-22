const express = require('express');
const router = express.Router();

let posts = [
    {id: 1, title: 'Post 1', content: 'This is the first post'},
    {id: 2, title: 'Post 2', content: 'This is the second post'},
    {id: 3, title: 'Post 3', content: 'This is the third post'}
];


//get all posts
router.get('/', (req, res) => {
   const limit = parseInt(req.query.limit);
   
   if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
   }
   res.status(200).json(posts);
});

//get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
   const post = posts.find((post) => post.id === id);
   if (!post)
    return res
        .status(404)
        .json({message: `A post with the id ${id} was not found`});

    res.status(200).json(post);
});

//update a post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
   const post = posts.find((post) => post.id === id);
   if (!post)
    return res
        .status(404)
        .json({message: `A post with the id ${id} was not found`});

    post.title = req.body.title;
    post.content = req.body.content;
    res.status(200).json(post);
});

//create a post
router.post('/', (req, res) => {
    const newPost ={
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    }
if (!newPost.title || !newPost.content){
    return res.status(400).json({message: 'Title and content are required'});
}

posts.push(newPost);
res.status(201).json(newPost);
});

//delete a post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ message: `A post with the id ${id} was not found` });
    }

    posts.splice(postIndex, 1); // Remove the post at the found index
    res.status(200).json({ message: `Post with id ${id} deleted successfully` });
});

module.exports = router;