const { readBooks } = require("../services/books.service");

let admin = (req, res, next) => {
  let books = readBooks();
  res.render("admin", { books });
};
module.exports = { admin };
