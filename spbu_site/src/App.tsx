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

import Documents from "./components/pages/Documents";
import Agreements from "./components/pages/Agreements";

import TransitionWrapper from "./components/common/TransitionWrapper";

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
              <Route path='/' element={<TransitionWrapper><StartPage /></TransitionWrapper>} />
              <Route path='/about' element={<TransitionWrapper><About /></TransitionWrapper>} />
              <Route path='/about/history' element={<TransitionWrapper><History /></TransitionWrapper>} />
              <Route path='/about/info' element={<TransitionWrapper><UniversityInfo /></TransitionWrapper>} />
              <Route path='/branch-tashkent/about_filial' element={<TransitionWrapper><BranchAbout /></TransitionWrapper>} />
              <Route path='/branch-tashkent/leadership' element={<TransitionWrapper><Leadership /></TransitionWrapper>} />
              <Route path='/education/bachelor/economy' element={<TransitionWrapper><InternationalBusiness /></TransitionWrapper>} />
              <Route path='/education/bachelor/programming' element={<TransitionWrapper><Programming /></TransitionWrapper>} />
              <Route path='/education/master/digital-entrepreneurship' element={<TransitionWrapper><DigitalEntrepreneurship /></TransitionWrapper>} />
              <Route path='/education/master/international-private-law' element={<TransitionWrapper><InternationalPrivateLaw /></TransitionWrapper>} />
              <Route path='/education/master/modern-china' element={<TransitionWrapper><ModernChina /></TransitionWrapper>} />
              <Route path='/admission' element={<TransitionWrapper><Admission /></TransitionWrapper>} />
              <Route path='/trki/general-info' element={<TransitionWrapper><TRKIGeneralInfo /></TransitionWrapper>} />
              <Route path='/trki/exam-preparation' element={<TransitionWrapper><ExamPreparation /></TransitionWrapper>} />
              <Route path='/contacts' element={<TransitionWrapper><Contacts /></TransitionWrapper>} />

              <Route path='/documents' element={<TransitionWrapper><Documents /></TransitionWrapper>} />
              <Route path='/agreements' element={<TransitionWrapper><Agreements /></TransitionWrapper>} />


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