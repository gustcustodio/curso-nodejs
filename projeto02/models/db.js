import { Sequelize } from "sequelize";

// * conexão com o banco de dados MySQL * //
const sequelize = new Sequelize("postapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
  query: { raw: true },
});

export default {
  Sequelize,
  sequelize,
};
