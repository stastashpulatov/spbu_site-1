import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./App.scss";
import "./styles/animations.scss";
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

import ExamPreparation from "./components/pages/ExamPreparation";
import Contacts from "./components/pages/Contacts";

import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AdminLogin, AdminDashboard, ProtectedRoute } from "./components/admin";

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<PageTransition><StartPage /></PageTransition>} />
              <Route path='/about' element={<PageTransition><About /></PageTransition>} />
              <Route path='/about/history' element={<PageTransition><History /></PageTransition>} />
              <Route path='/about/info' element={<PageTransition><UniversityInfo /></PageTransition>} />
              <Route path='/branch-tashkent/about_filial' element={<PageTransition><BranchAbout /></PageTransition>} />
              <Route path='/branch-tashkent/leadership' element={<PageTransition><Leadership /></PageTransition>} />
              <Route path='/education/bachelor/economy' element={<PageTransition><InternationalBusiness /></PageTransition>} />
              <Route path='/education/bachelor/programming' element={<PageTransition><Programming /></PageTransition>} />
              <Route path='/education/master/digital-entrepreneurship' element={<PageTransition><DigitalEntrepreneurship /></PageTransition>} />
              <Route path='/education/master/international-private-law' element={<PageTransition><InternationalPrivateLaw /></PageTransition>} />

              <Route path='/education/master/modern-china' element={<PageTransition><ModernChina /></PageTransition>} />
              <Route path='/admission' element={<PageTransition><Admission /></PageTransition>} />
              <Route path='/trki/general-info' element={<PageTransition><TRKIGeneralInfo /></PageTransition>} />

              <Route path='/trki/exam-preparation' element={<PageTransition><ExamPreparation /></PageTransition>} />
              <Route path='/contacts' element={<PageTransition><Contacts /></PageTransition>} />

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