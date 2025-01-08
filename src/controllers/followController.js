import FollowUseCases from '../useCases/FollowUseCases.js';

class FollowController {
    async followUser(req, res) {
        const { followedId } = req.body;
        const followerId = req.user.userId;

        try {
            const follow = await FollowUseCases.followUser(followerId, followedId);
            res.status(201).json(follow);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getFollowing(req, res) {
        const { userId } = req.params;
        try {
            const following = await FollowUseCases.getFollowing(userId);
            res.status(200).json(following);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getFollowers(req, res) {
        const { userId } = req.params;
        try {
            const followers = await FollowUseCases.getFollowers(userId);
            res.status(200).json(followers);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new FollowController();
