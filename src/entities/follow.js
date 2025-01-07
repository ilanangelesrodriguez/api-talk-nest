import mongoose from 'mongoose';

const followSchema = new mongoose.Schema({
    id_usuario_seguidor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    id_usuario_seguido: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fecha_seguimiento: { type: Date, default: Date.now },
});

const Follow = mongoose.model('Follow', followSchema);

export default Follow;
