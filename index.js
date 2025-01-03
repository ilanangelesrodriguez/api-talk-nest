import express from 'express';
import cors from 'cors';
import connectDB from "./src/config/connection.js";
import corsOptions from "./src/config/cors.js";
import authMiddleware from "./src/infrastructure/middleware/authMiddleware.js";
import {ApolloServer} from "apollo-server-express";
import typeDefs from "./src/infrastructure/graphql/typeDefs.js";
import resolvers from "./src/infrastructure/graphql/resolvers.js";

const app = express();
const port = process.env.PORT;

app.use(cors(corsOptions));

// Middleware de autenticación
app.use(authMiddleware);

connectDB()
    .then(async () => {
        // Configura Apollo Server
        const server = new ApolloServer({ typeDefs, resolvers });
        await server.start();
        server.applyMiddleware({ app });



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
