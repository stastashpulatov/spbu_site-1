import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import "./styles/animations.scss";
import Header from "./components/main/Header";
import StartPage from "./components/main/StartPage";
import About from "./components/pages/About";
import History from "./components/pages/History";
import UniversityInfo from "./components/pages/UniversityInfo";
import BranchAbout from "./components/pages/BranchAbout";
import BranchSveden from "./components/pages/BranchSveden";
import BranchCommon from "./components/pages/BranchCommon";
import BranchStruct from "./components/pages/BranchStruct";
import BranchDocument from "./components/pages/BranchDocument";
import BranchEmployees from "./components/pages/BranchEmployees";
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
import LocalDocuments from "./components/pages/LocalDocuments";
import Agreements from "./components/pages/Agreements";
import NewsPage from "./components/pages/NewsPage";
import SchedulePage from "./components/pages/SchedulePage";
import MaintenancePage from "./components/pages/MaintenancePage";
import MaintenanceCheck from "./components/common/MaintenanceCheck";

import TransitionWrapper from "./components/common/TransitionWrapper";

import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <Router>
            <MaintenanceCheck>
              <Header />

              <TransitionWrapper>
                <Routes>
                  <Route path='/' element={<StartPage />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/about/history' element={<History />} />
                  <Route path='/about/info' element={<UniversityInfo />} />
                  <Route path='/branch-tashkent/about_filial' element={<BranchAbout />} />
                  <Route path='/branch-tashkent/sveden' element={<BranchSveden />} />
                  <Route path='/branch-tashkent/sveden/common' element={<BranchCommon />} />
                  <Route path='/branch-tashkent/sveden/struct' element={<BranchStruct />} />
                  <Route path='/branch-tashkent/sveden/document' element={<BranchDocument />} />
                  <Route path="/branch-tashkent/sveden/employees" element={<BranchEmployees />} />
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
                  <Route path='/local-documents' element={<LocalDocuments />} />
                  <Route path='/agreements' element={<Agreements />} />
                  <Route path='/library' element={<Library />} />
                  <Route path='/student-account' element={<StudentAccount />} />
                  <Route path='/news' element={<NewsPage />} />
                  <Route path='/schedule' element={<SchedulePage />} />
                  <Route path='/maintenance' element={<MaintenancePage />} />
                </Routes>
              </TransitionWrapper>
            </MaintenanceCheck>
          </Router>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;