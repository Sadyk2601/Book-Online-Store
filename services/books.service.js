let fs = require("fs");
const path = require("path");

let readBooks = (id) => {
  let books = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../config/books.json"), "utf8")
  );
  if (!id) return books;
  let book = books.filter((item) => item.id == id);
  return book[0] ? book[0] : "No product";
};

let writeBooks = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../config/books.json"),
    JSON.stringify(data),
    "utf8"
  );
  return data;
};
module.exports = { readBooks, writeBooks };
