import express from 'express';
import PostController from '../controllers/PostController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, PostController.createPost);
router.get('/:userId', authMiddleware, PostController.getPostsByUser);
router.get('/post/:postId', authMiddleware, PostController.getPostById);
router.put('/update/:postId', authMiddleware, PostController.updatePost);
router.delete('/delete/:postId', authMiddleware, PostController.deletePost);

export default router;
