import express from 'express';
import cors from 'cors';
import connectDB from "./src/config/connection.js";
import corsOptions from "./src/config/cors.js";
import authRoutes from "./src/routes/authRoutes.js";
import * as bodyParser from "express";
import followRoutes from "./src/routes/followRoutes.js";
import commentRoutes from "./src/routes/commentRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.use(cors(corsOptions));

connectDB()
    .then(async () => {
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

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/follows', followRoutes);
