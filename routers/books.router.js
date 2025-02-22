const express = require("express");
let router = express.Router();
let booksController = require("../controllers/books.controller");

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
router.post("/", booksController.addBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
