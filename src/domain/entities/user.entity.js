export default class User {
    constructor(id, name, email, password, bio, profilePicture) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.bio = bio || '';
        this.profilePicture = profilePicture || '';
    }

    validate() {
        if (!this.name || !this.email || !this.password) {
            throw new Error('Faltan campos obligatorios');
        }
        console.log(this.name, this.email, this.password);
    }

    updateProfile(newName, newBio, newProfilePicture) {
        this.name = newName || this.name;
        this.bio = newBio || this.bio;
        this.profilePicture = newProfilePicture || this.profilePicture;
    }

    updatePassword(newPassword) {
        this.password = newPassword;
    }
}