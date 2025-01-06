import UserModel from "./user.model.js";
import User from "../domain/user.js";

class UserRepositoryMongo {
    // Método para guardar un nuevo usuario
    async save(usuario) {
        const usuarioDoc = new UserModel({
            name: usuario.name,
            email: usuario.email,
            passwordHash: usuario.passwordHash,
            bio: usuario.bio,
            profilePicture: usuario.profilePicture
        });

        const savedUsuario = await usuarioDoc.save();
        return new User(savedUsuario.id, savedUsuario.name, savedUsuario.email, savedUsuario.passwordHash, savedUsuario.bio, savedUsuario.profilePicture);
    }

    // Método para buscar un usuario por su email
    async findByEmail(email) {
        const usuarioDoc = await UserModel.findOne({ email });
        if (!usuarioDoc) return null;
        return new User(usuarioDoc.id, usuarioDoc.name, usuarioDoc.email, usuarioDoc.passwordHash, usuarioDoc.bio, usuarioDoc.profilePicture);
    }

    // Método para encontrar un usuario por su id
    async findById(id) {
        const usuarioDoc = await UserModel.findById(id);
        if (!usuarioDoc) return null;
        return new User(usuarioDoc.id, usuarioDoc.name, usuarioDoc.email, usuarioDoc.passwordHash, usuarioDoc.bio, usuarioDoc.profilePicture);
    }
}

export default UserRepositoryMongo;
