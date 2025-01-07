import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
    fecha_registro: { type: Date, default: Date.now },
    fecha_ultimo_acceso: { type: Date, default: Date.now },
    estado: { type: Boolean, default: true },
});

const User = mongoose.model('User', userSchema);

export default User;
