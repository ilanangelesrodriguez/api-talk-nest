import Post from '../entities/Post.js';

class PostRepository {
    async createPost(data) {
        const post = new Post(data);
        await post.save();
        return post;
    }

    async getPostsByUser(userId) {
        return await Post.find({ id_usuario: userId });
    }

}

export default new PostRepository();
