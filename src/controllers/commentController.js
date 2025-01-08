import CommentUseCases from '../useCases/CommentUseCases.js';

class CommentController {
    async createComment(req, res) {
        const { contenido, postId } = req.body;
        const userId = req.user.userId;

        try {
            const comment = await CommentUseCases.createComment(userId, postId, contenido);
            res.status(201).json(comment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getCommentsByPost(req, res) {
        const { postId } = req.params;
        try {
            const comments = await CommentUseCases.getCommentsByPost(postId);
            res.status(200).json(comments);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new CommentController();
