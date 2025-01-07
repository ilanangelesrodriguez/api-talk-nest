import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contenido: { type: String, required: true },
    imagen: { type: String, default: null },
    fecha_publicacion: { type: Date, default: Date.now },
    cantidad_comentarios: { type: Number, default: 0 },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
