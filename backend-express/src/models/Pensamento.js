import mongoose from "mongoose";

const pensamentoSchema = new mongoose.Schema(
  {
    id: { type: String },
    conteudo: { type: String, required: true },
    autoria: { type: String, required: true },
    modelo: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const pensamentos = mongoose.model("pensamentos", pensamentoSchema);

export default pensamentos;
