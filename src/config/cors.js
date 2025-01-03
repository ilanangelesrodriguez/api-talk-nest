// Configuración CORS específica
const corsOptions = {
    origin: 'http://localhost',       // Permite solicitudes solo desde este origen
    methods: ['GET', 'POST'],           // Permite solo GET y POST
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite solo estos encabezados
    credentials: true,                  // Permite el envío de cookies y credenciales
    preflightContinue: false,           // Si es true, el servidor responderá a la preflight request sin modificarla
    optionsSuccessStatus: 204,          // El código de estado que se devolverá en una solicitud OPTIONS exitosa
};

export default corsOptions;