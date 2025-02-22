const express = require("express");
const cors = require("cors");
let booksRouter = require("../routers/books.router");
let bookRenderRouter = require("../routers/book.render");
let adminRender = require("../routers/admin.routes");
let app = express();
app.use(cors("*"));
app.set("view engine", "ejs");
app.use(express.json());
app.set("views", "./public/views");
app.use(express.static("public"));
app.use("/api/v1/books", booksRouter);
app.use("/books", bookRenderRouter);
app.use("/admin", adminRender);
app.get("*", (req, res, next) => {
  res.status(200).json({ message: "Succes" });
});
module.exports = app;
