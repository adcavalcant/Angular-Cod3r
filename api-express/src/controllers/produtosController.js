import produtos from "../models/Produto.js";

class ProdutosController {
  static listarProdutos = (req, res) => {
    produtos
      .find()
      .then((produtos) => {
        res.status(200).json(produtos);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar produtos." });
      });
  };

  static listarProdutoPorId = (req, res) => {
    const { id } = req.params;
    produtos
      .findById(id)
      .then((produto) => {
        if (!produto) {
          return res.status(404).json({ message: `Produto ${id} não encontrado.` });
        }
        res.status(200).json(produto);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar produto." });
      });
  };

  static cadastrarProduto = async (req, res) => {
    try {
      const produto = new produtos(req.body);
      await produto.save();
      res.status(201).send(produto.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao cadastrar produto - ${err}` });
    }
  };

  static atualizarProduto = async (req, res) => {
    try {
      const produto = await produtos.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!autor) {
        return res.status(404).json({ message: "Produto não encontrado." });
      }
      res.status(200).json(produto.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao editar produto - ${err}` });
    }
  };

  static excluirProduto = async (req, res) => {
    try {
      const produto = await produtos.findByIdAndDelete(req.params.id);
      if (!produto) {
        return res.status(404).json({ message: "Produto não encontrado." });
      }
      res.status(200).json({ message: "Produto excluído com sucesso." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao excluir produto - ${err}` });
    }
  };
}

export default ProdutosController;
