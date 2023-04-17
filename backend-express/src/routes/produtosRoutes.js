import express from "express";
import ProdutosController from "../controllers/produtosController.js";

const router = express.Router();

router
  .get("/products", ProdutosController.listarProdutos)
  .get("/products/:id", ProdutosController.listarProdutoPorId)
  .post("/products", ProdutosController.cadastrarProduto)
  .put("/products/:id", ProdutosController.atualizarProduto)
  .delete("/products/:id", ProdutosController.excluirProduto);
export default router;
