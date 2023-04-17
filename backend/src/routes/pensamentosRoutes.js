import express from "express";
import PensamentosController from "../controllers/pensamentosController.js";

const router = express.Router();

router
  .get("/pensamentos", PensamentosController.listarPensamentos)
  .get("/pensamentos/:id", PensamentosController.listarPensamentoPorId)
  .post("/pensamentos", PensamentosController.cadastrarPensamento)
  .put("/pensamentos/:id", PensamentosController.atualizarPensamento)
  .delete("/pensamentos/:id", PensamentosController.excluirPensamento);
export default router;
