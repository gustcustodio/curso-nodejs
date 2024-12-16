import express from "express";
import { create } from "express-handlebars";
import { DataTypes, Sequelize } from "sequelize";
import path from "path";

const app = express();
const __dirname = path.resolve();
// * conexão com o banco de dados MySQL * //
const sequelize = new Sequelize("sistemadecadastro", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
// * configuração do handlebars como template engine * //
const handlebars = create({ extname: ".handlebars" });

// * app engine * //
// ? define handlebars como mecanismo de template ? //
app.engine(".handlebars", handlebars.engine);

// ? define a extensão padrão para os templates ? //
app.set("view engine", ".handlebars");

// ? define o diretório onde estão os arquivos de template ? //
app.set("views", path.join(__dirname, "views"));

// * rotas * //
app.get("/cad", function (req, res) {
  res.render("formulario");
});

app.post("/add", function (req, res) {
  res.send("Formulário recebido!");
});

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
}); // * deve ser a última instrução * //
