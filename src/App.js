import "./App.css";
import Header from "./components/Header/Header";
import DarkMode from "./components/DarkMode/DarkMode";

import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import MusicBox from "./components/MusicBox/MusicBox";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
function App() {
  return (
    <div className="App">
      <DarkMode />
      <Header />
      <Main />
      <Projects />
      <Experience />
      <Contact />
      <MusicBox />
    </div>
  );
}

export default App;
