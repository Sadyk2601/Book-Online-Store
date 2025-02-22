const { readBooks } = require("../services/books.service");

let index = (req, res, next) => {
  let books = readBooks();
  res.render("index", { books });
};
module.exports = { index };
