import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//Credenciais do banco vindas do .env
/*
    DB_USER=usuario
    DB_PASS=senha-do-mongo
    SECRET=
*/
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@alura.4vllcau.mongodb.net/alura-node`
);

let db = mongoose.connection;

export default db;
