import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/main/Header";
import StartPage from "./components/main/StartPage";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<StartPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;