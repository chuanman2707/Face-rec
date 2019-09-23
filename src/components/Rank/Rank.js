import React from "react";

const Rank = ({ entries, name }) => {
  return (
    <div className="tc">
      <div className="white f3 ">hi {name} Your current rank is</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
