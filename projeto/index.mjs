import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function (req, res) {
  res.send("Seja bem-vindo ao meu blog!");
});

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
}); // * deve ser a última instrução * //
