import Post from '../entities/Post.js';

class PostRepository {
    async createPost(data) {
        const post = new Post(data);
        await post.save();
        return post;
    }

    async getPostsByUser(userId) {
        return await Post.find({ id_usuario: userId }).populate('id_usuario', 'nombre correo');
    }

    async getPostById(postId) {
        return await Post.findById(postId);
    }

    async updatePost(postId, data) {
        return await Post.findByIdAndUpdate(postId, data, { new: true });
    }

    async deletePost(postId) {
        return await Post.findByIdAndDelete(postId);
    }

}

export default new PostRepository();
