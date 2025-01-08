import PostUseCases from '../useCases/PostUseCases.js';

class PostController {
    async createPost(req, res) {
        const { contenido, imagen } = req.body;
        const userId = req.user.userId;

        try {
            const post = await PostUseCases.createPost(userId, contenido, imagen);
            res.status(201).json(post);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getPostsByUser(req, res) {
        const { userId } = req.params;
        try {
            const posts = await PostUseCases.getPostsByUser(userId);
            res.status(200).json(posts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getPostById(req, res) {
        const { postId } = req.params;
        try {
            const post = await PostUseCases.getPostById(postId);
            res.status(200).json(post);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updatePost(req, res) {
        const { postId } = req.params;
        const { contenido, imagen } = req.body;
        const userId = req.user.userId;

        try {
            const updatedPost = await PostUseCases.updatePost(postId, userId, { contenido, imagen });
            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletePost(req, res) {
        const { postId } = req.params;
        const userId = req.user.userId;

        try {
            await PostUseCases.deletePost(postId, userId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new PostController();
