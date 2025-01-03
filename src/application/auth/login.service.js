import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserRepository from "../../domain/repositories/user.repository.js";

class LoginService {
    async login(email, password) {
        const user = await UserRepository.findByEmail(email);
        if (!user) {
            console.error('Usuario no encontrado');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.error('Contraseña incorrecta');
        }

        return jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    }
}

export default new LoginService();
