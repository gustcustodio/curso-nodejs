import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/aprendendo")
  .then(() => {
    console.log("MongoDB conectado...");
  })
  .catch((erro) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + erro);
  });
