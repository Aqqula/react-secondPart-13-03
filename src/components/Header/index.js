import React from "react";
import cx from "classnames";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext, UserContext, LanguageContext } from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const { THEMES, LANGUAGE } = CONSTANTS;

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => {
        const headerClasses = cx(styles.header, {
          [styles.light]: theme === THEMES.LIGHT,
          [styles.dark]: theme === THEMES.DARK,
        });
        const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        return (
          <LanguageContext.Consumer>
            {([lang, setLanguage]) => {
              const newLanguage =
                lang === LANGUAGE.EN ? LANGUAGE.UK : LANGUAGE.EN;
              return (
                <UserContext.Consumer>
                  {({ firstName }) => (
                    <header className={headerClasses}>
                      <h1>{lang === LANGUAGE.EN ? "Logo" : "Логотип"}</h1>
                      <div>
                        {lang === LANGUAGE.EN ? "Hi" : "Привіт"}, {firstName}
                      </div>
                      <button onClick={() => setLanguage(newLanguage)}>
                        {newLanguage}
                      </button>
                      <span
                        onClick={() => {
                          setTheme(newTheme);
                        }}
                      >
                        {theme === THEMES.LIGHT ? (
                          <DarkModeIcon />
                        ) : (
                          <WbSunnyIcon />
                        )}
                      </span>
                    </header>
                  )}
                </UserContext.Consumer>
              );
            }}
          </LanguageContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
