import Comment from '../entities/Comment.js';

class CommentRepository {
    async createComment(data) {
        const comment = new Comment(data);
        await comment.save();
        return comment;
    }

    async getCommentsByPost(postId) {
        return await Comment.find({ id_publicacion: postId }).populate('id_usuario', 'nombre correo');
    }
}

export default new CommentRepository();

