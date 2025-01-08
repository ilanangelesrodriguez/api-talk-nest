import CommentRepository from '../repositories/CommentRepository.js';

class CommentUseCases {
    async createComment(userId, postId, content) {
        const commentData = {
            id_usuario: userId,
            id_publicacion: postId,
            contenido: content,
        };
        return await CommentRepository.createComment(commentData);
    }

    async getCommentsByPost(postId) {
        return await CommentRepository.getCommentsByPost(postId);
    }
}

export default new CommentUseCases();
