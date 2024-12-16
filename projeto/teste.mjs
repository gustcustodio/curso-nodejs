import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("sistemadecadastro", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Postagem = sequelize.define("postagens", {
  titulo: {
    type: DataTypes.STRING,
  },
  conteudo: {
    type: DataTypes.TEXT,
  },
});

// Postagem.sync({ force: true });

// Postagem.create({
//   titulo: "Lorem Ipsum",
//   conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// });

const Usuario = sequelize.define("usuarios", {
  nome: {
    type: DataTypes.STRING,
  },
  sobrenome: {
    type: DataTypes.STRING,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
});

// Usuario.sync({ force: true });

// Usuario.create({
//   nome: "Gustavo",
//   sobrenome: "Custódio",
//   idade: 27,
//   email: "gustcustodio@teste.com",
// });

// sequelize
//   .authenticate()
//   .then(function () {
//     console.log("Conectado com sucesso!");
//   })
//   .catch(function (erro) {
//     console.log("Falha ao se conectar: " + erro);
//   });
