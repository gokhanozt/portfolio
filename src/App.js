import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import MusicBox from "./components/MusicBox/MusicBox";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <MusicBox />
    </div>
  );
}

export default App;
