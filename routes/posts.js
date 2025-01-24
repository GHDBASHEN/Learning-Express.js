import express from 'express';
const router = express.Router();
import { getPosts, getPost, updatePost, createPost, deletePost } from '../controllers/postController.js';

// Get all posts
router.get('/',getPosts);

// Get single post
router.get('/:id',getPost);

// Update a post
router.put('/:id',updatePost);

// Create a post
router.post('/',createPost);

// Delete a post
router.delete('/:id',deletePost);

export default router;
