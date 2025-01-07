import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    id_publicacion: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    contenido: { type: String, required: true },
    fecha_comentario: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
