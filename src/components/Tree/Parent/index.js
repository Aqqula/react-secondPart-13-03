import React from "react";
import { ThemeContext } from "../../../contexts";
import SubParent from "../SubParent";
import CONSTANTS from "./../../../constants";
const { THEMES } = CONSTANTS;

const Parent = (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme]) => {
        return (
          <div
            style={{
              backgroundColor: theme === THEMES.LIGHT ? "wheat" : "#222",
              color: theme === THEMES.LIGHT ? "#222" : "wheat",
            }}
          >
            <SubParent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Parent;
