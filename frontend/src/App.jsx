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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
