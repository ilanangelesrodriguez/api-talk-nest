import User from "../entities/user.js";

class UserRepository {
    async findByEmail(email) {
        return await User.findOne({ correo: email });
    }

    async createUser(data) {
        const user = new User(data);
        await user.save();
        return user;
    }

}

export default new UserRepository();
