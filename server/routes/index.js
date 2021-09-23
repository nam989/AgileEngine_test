const router = require("express").Router();
const products = require("./products");

router.use("/products", products);

router.get("/", function (req, res) {
  res.status(200).json({ message: "Estás conectado a nuestra API" });
});

module.exports = router;
