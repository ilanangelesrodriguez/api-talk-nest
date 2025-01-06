import UsuarioRepositoryMongo from '../infraestructura/repositorios/usuarioRepositoryMongo';
import jwt from 'jsonwebtoken';
import User from "../domain/user.js";
import UserRepositoryMongo from "../infrastructure/user.repository.js";

const usuarioRepository = new UserRepositoryMongo();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';  // Esto debe ser configurado en tu archivo .env

// Servicio para registrar un nuevo usuario
async function register(name, email, password, bio, profilePicture) {
    const existingUser = await usuarioRepository.findByEmail(email);
    if (existingUser) throw new Error('El usuario ya existe');

    const usuario = await User.create(name, email, password, bio, profilePicture);
    return await usuarioRepository.save(usuario);
}

// Servicio para login
async function login(email, password) {
    const usuario = await usuarioRepository.findByEmail(email);
    if (!usuario) throw new Error('Usuario no encontrado');

    const isPasswordValid = await usuario.verifyPassword(password);
    if (!isPasswordValid) throw new Error('Contraseña incorrecta');

    // Generar el JWT
    return jwt.sign({id: usuario.id, email: usuario.email}, JWT_SECRET, {expiresIn: '1h'});
}

export { register, login };
