import FollowRepository from '../repositories/FollowRepository.js';

class FollowUseCases {
    async followUser(followerId, followedId) {
        return await FollowRepository.followUser(followerId, followedId);
    }

    async getFollowing(userId) {
        return await FollowRepository.getFollowing(userId);
    }

    async getFollowers(userId) {
        return await FollowRepository.getFollowers(userId);
    }
}

export default new FollowUseCases();
