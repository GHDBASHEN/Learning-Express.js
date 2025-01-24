import express from 'express';
const router = express.Router();

let posts = [
  { id: 1, title: 'Post 1', content: 'This is the first post' },
  { id: 2, title: 'Post 2', content: 'This is the second post' },
  { id: 3, title: 'Post 3', content: 'This is the third post' },
];

// Get all posts
router.get('/', (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get single post
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A post with the id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
});

// Update a post
router.put('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post)
    return res
      .status(404)
      .json({ message: `A post with the id ${id} was not found` });

  post.title = req.body.title;
  post.content = req.body.content;
  res.status(200).json(post);
});

// Create a post
router.post('/', (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  if (!newPost.title || !newPost.content) {
    const error = new Error(`please include a title`);
    error.status = 400;
    return next(error);
  }

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Delete a post
router.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return res
      .status(404)
      .json({ message: `A post with the id ${id} was not found` });
  }

  posts.splice(postIndex, 1);
  res
    .status(200)
    .json({ message: `Post with id ${id} deleted successfully` });
});

export default router;
