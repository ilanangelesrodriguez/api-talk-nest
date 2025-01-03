export default class Post {
    constructor(id, content, author, likes = 0, comments = []) {
        this.id = id;
        this.content = content;
        this.author = author; // Esto será el id del usuario que creó la publicación
        this.likes = likes;
        this.comments = comments;
    }

    // Validación de la publicación (por ejemplo, asegurar que el contenido no esté vacío)
    validate() {
        if (!this.content || this.content.trim() === '') {
            throw new Error('El contenido de la publicación no puede estar vacío');
        }
    }

    // Método para aumentar los likes de la publicación
    addLike() {
        this.likes += 1;
    }

    // Método para agregar un comentario
    addComment(comment) {
        this.comments.push(comment);
    }
}