import mongoose from "mongoose";
const usuarioSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;
