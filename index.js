import express from 'express';
import connectDB from "./src/config/connection.js";

const app = express();
const port = process.env.PORT;

connectDB()
    .then(() => {
      app.listen(port, () => {
        console.log(`Aplicación escuchando en el puerto ${port}`);
      });
    })
    .catch(() => {
        process.exit(1); // Salir del proceso con fallo
    });

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})
