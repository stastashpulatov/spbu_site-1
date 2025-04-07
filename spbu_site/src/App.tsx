import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/main/Header";
import StartPage from "./components/main/StartPage";
import About from "./components/pages/About";
import History from "./components/pages/History";
import UniversityInfo from "./components/pages/UniversityInfo";
import BranchAbout from "./components/pages/BranchAbout";
import Leadership from "./components/pages/Leadership";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<StartPage />} />
              <Route path='/about' element={<About />} />
              <Route path='/about/history' element={<History />} />
              <Route path='/about/info' element={<UniversityInfo />} />
              <Route path='/branch-tashkent/about_filial' element={<BranchAbout />} />
              <Route path='/branch-tashkent/leadership' element={<Leadership />} />
            </Routes>
          </Router>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;