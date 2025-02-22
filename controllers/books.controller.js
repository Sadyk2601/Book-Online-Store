const bookService = require("../services/books.service");

let getAllBooks = (req, res, next) => {
  let data = bookService.readBooks();
  res.status(200).json({ message: "All Products", data });
};

let getBookById = (req, res, next) => {
  let id = req.params.id;
  let data = bookService.readBooks(+id);
  res.status(200).json({ message: "Product By Id" + id, data });
};

let addBook = (req, res, next) => {
  let books = bookService.readBooks();
  let { title, author, price } = req.body;
  if (!title || !author || !price) {
    throw new Error("Fill every input!");
  }
  let id = books.length + 1;
  let book = {
    id: id,
    title,
    author,
    price,
  };
  books.push(book);
  bookService.writeBooks(books);
  res.status(200).json({ message: "Kitob muvaffaqiyatli qo‘shildi", book });
};

let updateBook = (req, res, next) => {
  let books = bookService.readBooks();
  let id = +req.params.id;
  let { title, author, price } = req.body;
  books = books.map((book) => {
    if (book.id == id) {
      book.title = title ? title : book.title;
      book.author = author ? author : book.author;
      book.price = price ? price : book.price;
    }
    return book;
  });
  bookService.writeBooks(books);
  res.status(200).json({ message: "Kitob muvaffaqiyatli yangilandi!" });
};

let deleteBook = (req, res, next) => {
  let book = bookService.readBooks(req.params.id);
  if (!book) {
    return res.json({
      message: "Book undefined, can not delete.",
    });
  }
  let books = bookService
    .readBooks()
    .filter((item) => item.id !== +req.params.id);
  bookService.writeBooks(books);
  res.status(200).json({ message: "Kitob muvaffaqiyatli o‘chirildi!" });
};
module.exports = {
  getAllBooks,
  getBookById,
  updateBook,
  addBook,
  deleteBook,
};
