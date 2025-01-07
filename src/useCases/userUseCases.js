import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository.js';

class UserUseCases {
    async loginUser(email, password) {
        const user = await UserRepository.findByEmail(email);
        if (!user) throw new Error('Usuario no encontrado');

        const isPasswordValid = await bcrypt.compare(password, user.contrasena);
        if (!isPasswordValid) throw new Error('Contraseña incorrecta');

        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        return { token };
    }

}

export default new UserUseCases();
