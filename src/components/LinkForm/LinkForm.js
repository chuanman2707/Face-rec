import React from "react";

const LinkForm = ({ inputValue, clickButton }) => {
  return (
    <div className="tc">
      <p className="f3 white">Detect face from picture</p>
      <div className="center">
        <div className="form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-40 center"
            type="text"
            onChange={inputValue}
          />
          <button
            className="w-10 grow f4 ph3 pv2 dib purple"
            onClick={clickButton}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
