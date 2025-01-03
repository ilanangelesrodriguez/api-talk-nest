import {User} from "../../infrastructure/database/models/user.model.js";

class UserRepository {
    async findByEmail(email) {
        return User.findOne({email});
    }

    async findById(id) {
        return User.findById(id);
    }
}

export default new UserRepository();