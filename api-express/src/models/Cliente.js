import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    salario: { type: Number },
  },
  {
    versionKey: false, //remove o campo '__v' de versionamento
  }
);

const clientes = mongoose.model("clientes", clienteSchema);

export default clientes;
