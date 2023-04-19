import express from "express";
import pensamentos from "./pensamentosRoutes.js";
import produtos from "./produtosRoutes.js";
import clientes from "./clientesRoutes.js";

const routes = (app) => {
  //public route
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Rota principal da API :)" });
  });

  app.use(express.json(), pensamentos);
  app.use(express.json(), produtos);
  app.use(express.json(), clientes);
};

export default routes;
