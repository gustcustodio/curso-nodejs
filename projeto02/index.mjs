import express from "express";
import { create } from "express-handlebars";
import path from "path";
import Post from "./models/Post.js";

const app = express();
const __dirname = path.resolve();
// * configuração do handlebars como template engine * //
const handlebars = create({ extname: ".handlebars" });

// * body parser * //
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//////////////////////////// * app engine * ////////////////////////////

// ? define handlebars como mecanismo de template ? //
app.engine(".handlebars", handlebars.engine);
// ? define a extensão padrão para os templates ? //
app.set("view engine", ".handlebars");
// ? define o diretório onde estão os arquivos de template ? //
app.set("views", path.join(__dirname, "views"));

//////////////////////////// * rotas * ////////////////////////////

// ! rota da página principal ! //
app.get("/", function (req, res) {
  Post.findAll().then(function (posts) {
    res.render("home", { posts: posts });
  });
});

// ! rota da página de cadastro ! //
app.get("/cad", function (req, res) {
  res.render("formulario");
});

// ! rota de envio do formulário ! //
app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Houve um erro " + erro);
    });
});

// ! rota para deletar postagem ! //
app.get("/deletar/:id", function (req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(function (resultado) {
      if (resultado === 0) {
        res.status(404).send(res.send("Esta postagem não existe!"));
      } else {
        res.send("Postagem deletada com sucesso!");
      }
    })
    .catch(function (erro) {
      res
        .status(500)
        .send("Ocorreu um erro ao tentar deletar a postagem: " + erro);
    });
});

// * deve ser a última instrução * //
app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});
