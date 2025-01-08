import express from 'express';
import CommentController from '../controllers/CommentController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, CommentController.createComment);
router.get('/post/:postId', authMiddleware, CommentController.getCommentsByPost);

export default router;
