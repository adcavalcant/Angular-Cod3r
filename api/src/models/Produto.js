import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false, //remove o campo '__v' de versionamento
  }
);

const produtos = mongoose.model("produtos", produtoSchema);

export default produtos;
