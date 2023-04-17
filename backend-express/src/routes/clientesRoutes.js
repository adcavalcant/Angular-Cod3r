import express from "express";
import ClientesController from "../controllers/clientesController.js";

const router = express.Router();

router
  .get("/clientes", ClientesController.listarClientes)
  .get("/clientes/:id", ClientesController.listarClientePorId)
  .post("/clientes", ClientesController.cadastrarCliente)
  .put("/clientes/:id", ClientesController.atualizarCliente)
  .delete("/clientes/:id", ClientesController.excluirCliente);
  
export default router;
