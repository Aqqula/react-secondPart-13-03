import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tree from "./components/Tree";
import { UserContext, ThemeContext, LanguageContext } from "./contexts";
import CONSTANTS from "./constants";
const { THEMES, LANGUAGE } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
      },
      theme: THEMES.LIGHT,
      lang: LANGUAGE.EN,
    };
  }
  setTheme = (theme) => {
    this.setState({ theme });
  };
  setLanguage = (lang) => {
    this.setState({ lang });
  };
  render() {
    const { user, theme, lang } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <LanguageContext.Provider value={[lang, this.setLanguage]}>
          <UserContext.Provider value={user}>
            <Header />
            <Tree />
          </UserContext.Provider>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;

// {
//   /* <BrowserRouter>
//     <nav>
//       <ul>
//         <li><NavLink to='/'>home</NavLink></li>
//         <li><NavLink to='/counter'>counter</NavLink></li>
//         <li><NavLink to='/loader'>loader</NavLink></li>
//         <li><NavLink to='/stop-watch'>stop-watch</NavLink></li>
//         <li>Section:
//           <ul>
//           <li><NavLink to='/section/ciao'>ciao</NavLink></li>
//           <li><NavLink to='/section/user'>user</NavLink></li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//       <Routes>
//         <Route path="/" element={<HomePage />}/>
//         <Route path="/counter" element={<CounterPage />}/>
//         <Route path="/stop-watch" element={<StopWatchPages />} />
//         <Route path="/section/" element={<Section />}>
//           <Route path="ciao" element={<CiaoSection />}/>
//           <Route path="user" element={<UserSection />}/>
//         </Route>
//         <Route path="/loader/" element={<LoaderPage />} />
//         <Route path="*" element={<NotFoundPage />}/>
//       </Routes>
//       <footer>2023</footer>
//     </BrowserRouter> */
// }
