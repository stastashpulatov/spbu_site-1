import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/main/Header";
import StartPage from "./components/main/StartPage";



function App() {
  return (
    <div>
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<StartPage />} />
    </Routes>
    </Router>
  </div>
  );
}

export default App;