import React from "react";
import ItemContainer from "./itemContainer";

const ResultContainer = ({ resultData }) => {
  const maxItems = 3;
  const resultsToShow = resultData.slice(0, maxItems);
  return (
    <>
      <div className={"top"}>
        <div className={"all-results"}>
          {resultsToShow.length ? (
            <p>
              {`DISPLAYING ${resultsToShow.length} OF ${resultData.length} RESULTS. `}
              {/* TODO */}
              <a>SEE ALL RESULTS</a>
            </p>
          ) : (
            "NO RESULTS"
          )}
        </div>
      </div>
      <div className="item-container">
        {resultData &&
          resultsToShow.map((item, index) => (
            <ItemContainer key={index} itemData={item} />
          ))}
      </div>
    </>
  );
};
module.exports = ResultContainer;
