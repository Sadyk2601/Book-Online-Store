let express = require("express");
let router = express.Router();
let adminRenderController = require("../controllers/admin.controller");
const { addBook } = require("../controllers/books.controller");
router.post("/", addBook);
router.get("/", adminRenderController.admin);
module.exports = router;
