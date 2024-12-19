//////////////////////////// * carregando módulos * ////////////////////////////
import express from "express";
import { create } from "express-handlebars";
import path from "path";
import mongoose from "mongoose";
import admin from "./routes/admin.mjs";

const app = express();
const __dirname = path.resolve();
const handlebars = create({ extname: ".handlebars" });

////////////////////////////////// * configs * //////////////////////////////////
// BODY PARSER //
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// HANDLEBARS //
app.engine(".handlebars", handlebars.engine);
app.set("view engine", ".handlebars");
app.set("views", path.join(__dirname, "views"));
// MONGOOSE //

// PUBLIC //
app.use(express.static(path.join(__dirname, "public")));
////////////////////////////////// * rotas * //////////////////////////////////
app.get("/", (req, res) => {
  res.send("Rota principal");
});

app.use("/admin", admin);
////////////////////////////////// * outros * //////////////////////////////////
const PORT = 8081;
app.listen(PORT, () => {
  console.log("Servidor rodando!");
});
