import { DataTypes } from "sequelize";
import db from "./db.js";

const Post = db.sequelize.define("postagens", {
  titulo: {
    type: DataTypes.STRING,
  },
  conteudo: {
    type: DataTypes.TEXT,
  },
});

// Post.sync({ force: false });

export default Post;
