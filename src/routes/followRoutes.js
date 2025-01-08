import express from 'express';
import FollowController from '../controllers/FollowController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/follow', authMiddleware, FollowController.followUser);
router.get('/following/:userId', authMiddleware, FollowController.getFollowing);
router.get('/followers/:userId', authMiddleware, FollowController.getFollowers);

export default router;
