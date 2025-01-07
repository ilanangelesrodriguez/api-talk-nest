import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) return res.status(401).json({ error: 'Acceso denegado' });

    try {
        req.user = jwt.verify(token, 'your_jwt_secret');  // Guarda los datos del usuario en la solicitud
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Token inválido' });
    }
};

export default authMiddleware;
