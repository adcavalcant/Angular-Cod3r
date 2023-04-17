import clientes from "../models/Cliente.js";

class ClientesController {
  static listarClientes = (req, res) => {
    clientes
      .find()
      .then((clientes) => {
        res.status(200).json(clientes);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar clientes." });
      });
  };

  static listarClientePorId = (req, res) => {
    const { id } = req.params;
    clientes
      .findById(id)
      .then((cliente) => {
        if (!cliente) {
          return res.status(404).json({ message: `Cliente ${id} não encontrado.` });
        }
        res.status(200).json(autor);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar cliente." });
      });
  };

  static cadastrarCliente = async (req, res) => {
    try {
      const cliente = new clientes(req.body);
      await cliente.save();
      res.status(201).send(cliente.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao cadastrar cliente - ${err}` });
    }
  };

  static atualizarCliente = async (req, res) => {
    try {
      const cliente = await clientes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado." });
      }
      res.status(200).json(cliente.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao editar cliente - ${err}` });
    }
  };

  static excluirCliente = async (req, res) => {
    try {
      const cliente = await clientes.findByIdAndDelete(req.params.id);
      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado." });
      }
      res.status(200).json({ message: "Cliente excluído com sucesso." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao excluir cliente - ${err}` });
    }
  };
}

export default ClientesController;
