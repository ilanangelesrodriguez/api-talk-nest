import Follow from '../entities/Follow.js';

class FollowRepository {
    async followUser(followerId, followedId) {
        const follow = new Follow({ id_usuario_seguidor: followerId, id_usuario_seguido: followedId });
        await follow.save();
        return follow;
    }

    async getFollowing(userId) {
        return await Follow.find({ id_usuario_seguidor: userId }).populate('id_usuario_seguido', 'nombre correo');
    }

    async getFollowers(userId) {
        return await Follow.find({ id_usuario_seguido: userId }).populate('id_usuario_seguidor', 'nombre correo');
    }
}

export default new FollowRepository();
