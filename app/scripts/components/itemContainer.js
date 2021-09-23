import React from "react";
// import * as images from "../../images/products/index";

const shortAboutInfo = (description) =>
  !!description
    ? description.substring(
        description.indexOf(" ", description.length / 2),
        description.length
      )
    : "";

const ItemContainer = ({ itemData }) => {
  //   const imageFileName = itemData.picture.match(/[^\/]*(?=[.][a-zA-Z]+$)/)[0];
  const description = !!itemData.about ? itemData.about : "";

  return (
    <div className={"item"}>
      <img src={itemData.picture}></img>
      <div className={"data"}>
        <div className={"tittle"}>{itemData.name}</div>
        <div className={"about"}>{shortAboutInfo(description)}</div>
      </div>
    </div>
  );
};
module.exports = ItemContainer;
