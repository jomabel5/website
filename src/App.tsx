import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from './components/common/CookieConsent';
import ScrollToTop from './components/common/Scrolltotop';
import { LanguageProvider } from './context/LanguageContext';
import GoogleTranslate from './context/GoogleTranslate';

import Home from './Pages/Home';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Donate from './Pages/Donate';
import ContactPage from './Pages/ContactPage';
import Campaign from './Pages/Campaign';
import LegacyGiving from './Pages/LegacyGiving';
import ROI from './Pages/ROI';
import Impact from './Pages/Impact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';
import Newsletter from './Pages/Blog';
import MissionVision from './Pages/MissionVision';
import OurStory from './Pages/OurStory';
import FounderStory from './Pages/FounderStory';
import Leadership from './Pages/Leadership';
import BlogIndex from './Pages/BlogIndex';
import BlogPost from './Pages/BlogPost';
import OurCenters from './Pages/OurCenters';

function App() {
  return (
    <LanguageProvider>
      <GoogleTranslate />
      <Router>
        <ScrollToTop />
        {/* Main content wrapper for accessibility skip link */}
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/legacy" element={<LegacyGiving />} />
            <Route path="/roi" element={<ROI />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/founder-story" element={<FounderStory />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/our-centers" element={<OurCenters />} />
          </Routes>
        </div>

        {/* Cookie Consent - appears on every page */}
        <CookieConsent />
      </Router>
    </LanguageProvider>
  );
}

export default App;