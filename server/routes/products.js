const router = require("express").Router();
const productsController = require("../controllers/productsController");
router.get("/search", function (req, res) {
  productsController.search(req, res);
});

module.exports = router;
