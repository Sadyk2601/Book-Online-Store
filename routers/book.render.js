let express = require("express");
let router = express.Router();
let bookRenderController = require("../controllers/render.book");
router.get("/", bookRenderController.index);
// router.get("/", bookRenderController.admin);
module.exports = router;
