import UserUseCases from '../useCases/UserUseCases.js';

class AuthController {
    async login(req, res) {
        const { correo, contrasena } = req.body;

        try {
            const result = await UserUseCases.loginUser(correo, contrasena);
            res.status(200).json({ token: result.token });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new AuthController();
