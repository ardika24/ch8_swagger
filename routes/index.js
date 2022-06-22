const router = require("express").Router();
const bookController = require("../controllers/booksController");

router.get("/books", bookController.index);
router.get("/books/:id", bookController.show);
router.post("/books", bookController.store);
router.put("/books/:id", bookController.update);
router.delete("/books/:id", bookController.destroy);

module.exports = router;
