import bcrypt from 'bcryptjs';

class User {
    constructor(id, name, email, passwordHash, bio = '', profilePicture = '') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.bio = bio;
        this.profilePicture = profilePicture;
    }

    // Método para crear un nuevo usuario con contraseña hasheada
    static async create(name, email, password, bio = '', profilePicture = '') {
        const passwordHash = await bcrypt.hash(password, 10);
        return new User(null, name, email, passwordHash, bio, profilePicture);
    }

    // Método para verificar la contraseña del usuario
    async verifyPassword(password) {
        return bcrypt.compare(password, this.passwordHash);
    }
}

export default User;
