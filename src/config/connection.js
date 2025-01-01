import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const dbUri = `mongodb+srv://${dbUser}:${encodeURIComponent(dbPassword)}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUri);
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('No se pudo conectar a MongoDB', err);
        process.exit(1); // Salir del proceso con fallo
    }
};

export default connectDB;