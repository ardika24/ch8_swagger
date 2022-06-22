const { Book } = require("../models");

module.exports = {
  index: async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
  },

  show: async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        message: "ID must be a number",
      });
    }
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json(book);
  },

  store: async (req, res) => {
    const { name, author } = req.body;

    if (!name || !author) {
      return res.status(400).json({
        message: "Failed to create new book collection",
      });
    }

    const book = await Book.create({ name, author });
    res.status(201).json(book);
  },
  update: async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        message: "ID must be a number",
      });
    }

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    const { name, author } = req.body;

    if (!name || !author) {
      return res.status(400).json({
        message: "Failed to create new Book",
      });
    }

    const updatedBook = await book.update({ name, author });
    res.json(updatedBook);
  },

  destroy: async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        message: "ID must be a number",
      });
    }

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        message: "Article not found",
      });
    }

    await book.destroy();
    res.status(204).send();
  },
};
