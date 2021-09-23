const filterData = require("../services/filterData");
const data = require("../data");

module.exports = {
  search: function (req, res) {
    if (!!req.query.keyWord) {
      const resultData = filterData(data, req.query.keyWord);
      res.status(200).json({ data: resultData });
    } else {
      return res.status(404).json({
        error: "keyWord param not found",
      });
    }
  },
};
