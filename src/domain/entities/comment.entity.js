export default class Comment {
    constructor(id, content, author, post) {
        this.id = id;
        this.content = content;
        this.author = author; // El id del usuario que hizo el comentario
        this.post = post; // El id de la publicación a la que pertenece este comentario
    }

    // Validación del contenido del comentario
    validate() {
        if (!this.content || this.content.trim() === '') {
            throw new Error('El comentario no puede estar vacío');
        }
    }
}