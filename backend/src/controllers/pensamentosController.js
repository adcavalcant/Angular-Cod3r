import pensamentos from "../models/Pensamento.js";

class PensamentosController {
  static listarPensamentos = (req, res) => {
    pensamentos
      .find()
      .then((pensamentos) => {
        res.status(200).json(pensamentos);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar pensamentos." });
      });
  };

  static listarPensamentoPorId = (req, res) => {
    const { id } = req.params;
    pensamentos
      .findById(id)
      .then((pensamento) => {
        if (!pensamento) {
          return res
            .status(404)
            .json({ message: `Pensamento ${id} não encontrado.` });
        }
        res.status(200).json(pensamento);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar pensamento." });
      });
  };

  static cadastrarPensamento = async (req, res) => {
    try {
      const pensamento = new pensamentos(req.body);
      await pensamento.save();
      res.status(201).send(pensamento.toJSON());
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: `Erro ao cadastrar pensamento - ${err}` });
    }
  };

  static atualizarPensamento = async (req, res) => {
    try {
      const pensamento = await pensamentos.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!pensamento) {
        return res.status(404).json({ message: "Pensamento não encontrado." });
      }
      res.status(200).json(pensamento.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao editar pensamento - ${err}` });
    }
  };

  static excluirPensamento = async (req, res) => {
    try {
      const pensamento = await pensamentos.findByIdAndDelete(req.params.id);
      if (!pensamento) {
        return res.status(404).json({ message: "Pensamento não encontrado." });
      }
      res.status(200).json({ message: "Pensamento excluído com sucesso." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao excluir Pensamento - ${err}` });
    }
  };
}

export default PensamentosController;
