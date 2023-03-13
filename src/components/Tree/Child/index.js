import React from "react";
import UserProfile from "../UserProfile";
import { LanguageContext } from "../../../contexts";
import CONSTANTS from "../../../constants";
const { LANGUAGE } = CONSTANTS;

const Child = (props) => {
  return (
    <LanguageContext.Consumer>
      {([lang]) => (
        <div style={{ padding: "10px" }}>
          <h2>
            {lang === LANGUAGE.EN ? "User Profile" : "Профіль користувача"}
          </h2>
          <UserProfile />
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default Child;
