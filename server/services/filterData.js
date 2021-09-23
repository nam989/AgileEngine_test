module.exports = function filterData(data, keyWord) {
  const filteredData = data.filter(
    (item) =>
      item.isActive === "true" &&
      (item.name.toLowerCase().includes(keyWord) ||
        item.tags.filter((tagDescription) => {
          return tagDescription.toLowerCase().includes(keyWord);
        }).length > 0)
  );
  return filteredData;
};
