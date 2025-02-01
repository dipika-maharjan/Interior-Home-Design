import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/private/Navbar';
import FrontSection from './components/private/FrontSection';
import BrowseIdea from './components/private/BrowseIdea';
import Consultation from './components/private/Consult';
import Footer from './components/private/Footer';
import LoginPage from './components/public/Login';
import Homepage from './components/private/Homepage';
import SignupPage from './components/public/Signup';
import BookConsultation from './components/private/BookConsultation';
import LivingSection from './components/private/LivingSection';
import BedSection from './components/private/BedSection';
import DiningSection from './components/private/DiningSection';
import KitchenSection from './components/private/KitchenSection';
import OfficeSection from './components/private/Office';
import RusticSection from './components/private/RusticSection';
import BohemianSection from './components/private/BohemianSection';
import MinimalistSection from './components/private/MinimalistSection';
import TraditionalSection from './components/private/TraditionalSection';
import BudgetFriendlySection from './components/private/BudgetFriendlySection';
import LuxurySection from './components/private/LuxurySection';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/Homepage" element={<Homepage />} /> 
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/FrontSection" element={<FrontSection />} />
          <Route path="/BrowseIdea" element={<BrowseIdea />} />
          <Route path="/Consult" element={<Consultation />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/BookConsultation" element={<BookConsultation />} />
          <Route path="/LivingSection" element={<LivingSection />} />
          <Route path="/BedSection" element={<BedSection />} />
          <Route path="/DiningSection" element={<DiningSection />} />
          <Route path="/KitchenSection" element={<KitchenSection />} />
          <Route path="/OfficeSection" element={<OfficeSection />} />
          <Route path="/RusticSection" element={<RusticSection />} />
          <Route path="/BohemianSection" element={<BohemianSection />} />
          <Route path="/MinimalistSection" element={<MinimalistSection />} />
          <Route path="/TraditionalSection" element={<TraditionalSection />} />
          <Route path="/BudgetFriendlySection" element={<BudgetFriendlySection />} />
          <Route path="/LuxurySection" element={<LuxurySection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
