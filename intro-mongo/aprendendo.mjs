import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/aprendendo")
  .then(() => {
    console.log("MongoDB conectado...");
  })
  .catch((erro) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + erro);
  });

// * model - usuários * //
// * definindo o model * //
const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  idade: {
    type: Number,
    require: true,
  },
  pais: {
    type: String,
    require: true,
  },
});

// * collection * //
mongoose.model("usuarios", UsuarioSchema);

const Usuario = mongoose.model("usuarios");

new Usuario({
  nome: "Teste",
  sobrenome: "Testando",
  email: "teste@teste.com",
  idade: 35,
  pais: "Brasil",
})
  .save()
  .then(() => {
    console.log("Usuário cadastrado com sucesso!");
  })
  .catch((err) => {
    console.log("Houve um erro ao registar o usuário: " + err);
  });
