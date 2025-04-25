import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./App.scss";
import "./styles/animations.scss";
import Header from "./components/main/Header";
import StartPage from "./components/main/StartPage";
import About from "./components/pages/About";
import History from "./components/pages/History";
import UniversityInfo from "./components/pages/UniversityInfo";
import BranchAbout from "./components/pages/BranchAbout";
import BranchSveden from "./components/pages/BranchSveden";
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
import Library from "./components/pages/Library";
import StudentAccount from "./components/pages/StudentAccount";
import Documents from "./components/pages/Documents";
import Agreements from "./components/pages/Agreements";
import NewsPage from "./components/pages/NewsPage";
import SchedulePage from "./components/pages/SchedulePage";

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

            <TransitionWrapper>
              <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/about/history' element={<History />} />
                <Route path='/about/info' element={<UniversityInfo />} />
                <Route path='/branch-tashkent/about_filial' element={<BranchAbout />} />
                <Route path='/branch-tashkent/sveden' element={<BranchSveden />} />
                <Route path='/branch-tashkent/leadership' element={<Leadership />} />
                <Route path='/education/bachelor/economy' element={<InternationalBusiness />} />
                <Route path='/education/bachelor/programming' element={<Programming />} />
                <Route path='/education/master/digital-entrepreneurship' element={<DigitalEntrepreneurship />} />
                <Route path='/education/master/international-private-law' element={<InternationalPrivateLaw />} />
                <Route path='/education/master/modern-china' element={<ModernChina />} />
                <Route path='/admission' element={<Admission />} />
                <Route path='/trki/general-info' element={<TRKIGeneralInfo />} />
                <Route path='/trki/exam-preparation' element={<ExamPreparation />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/documents' element={<Documents />} />
                <Route path='/agreements' element={<Agreements />} />
                <Route path='/library' element={<Library />} />
                <Route path='/student-account' element={<StudentAccount />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/schedule' element={<SchedulePage />} />

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
            </TransitionWrapper>
          </Router>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;