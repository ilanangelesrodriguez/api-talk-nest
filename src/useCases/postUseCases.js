import PostRepository from '../repositories/PostRepository.js';

class PostUseCases {
    async createPost(userId, content, image) {
        const postData = {
            id_usuario: userId,
            contenido: content,
            imagen: image,
        };
        return await PostRepository.createPost(postData);
    }

    async getPostsByUser(userId) {
        return await PostRepository.getPostsByUser(userId);
    }

    async getPostById(postId) {
        return await PostRepository.getPostById(postId);
    }

    async updatePost(postId, userId, data) {
        const post = await PostRepository.getPostById(postId);
        if (post.id_usuario.toString() !== userId) {
            throw new Error('No tienes permiso para editar esta publicación');
        }
        return await PostRepository.updatePost(postId, data);
    }

    async deletePost(postId, userId) {
        const post = await PostRepository.getPostById(postId);
        if (post.id_usuario.toString() !== userId) {
            throw new Error('No tienes permiso para eliminar esta publicación');
        }
        return await PostRepository.deletePost(postId);
    }
}

export default new PostUseCases();
