import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/main/Header";
import StartPage from "./components/main/StartPage";
import About from "./components/pages/About";
import History from "./components/pages/History";
import UniversityInfo from "./components/pages/UniversityInfo";
import BranchAbout from "./components/pages/BranchAbout";
import Leadership from "./components/pages/Leadership";
import InternationalBusiness from "./components/pages/InternationalBusiness";
import Programming from "./components/pages/Programming";
import DigitalEntrepreneurship from "./components/pages/DigitalEntrepreneurship";
import InternationalPrivateLaw from "./components/pages/InternationalPrivateLaw";

import ModernChina from "./components/pages/ModernChina";
import Admission from "./components/pages/Admission";
import TRKIGeneralInfo from "./components/pages/TRKIGeneralInfo";

import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AdminLogin, AdminDashboard, ProtectedRoute } from "./components/admin";

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
              <Route path='/education/bachelor/economy' element={<InternationalBusiness />} />
              <Route path='/education/bachelor/programming' element={<Programming />} />
              <Route path='/education/master/digital-entrepreneurship' element={<DigitalEntrepreneurship />} />
              <Route path='/education/master/international-private-law' element={<InternationalPrivateLaw />} />

              <Route path='/education/master/modern-china' element={<ModernChina />} />
              <Route path='/admission' element={<Admission />} />
              <Route path='/trki/general-info' element={<TRKIGeneralInfo />} />
              
              {/* Admin Routes */}
              <Route path='/admin' element={<Navigate to="/admin/login" replace />} />
              <Route path='/admin/login' element={<AdminLogin />} />
              <Route
                path='/admin/dashboard'
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Router>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;