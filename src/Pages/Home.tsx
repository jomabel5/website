import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ── Sections used on the homepage ──
import Hero from '../components/sections/Hero';
import MissionVision from '../components/sections/MissionVision';
import OurPrograms from '../components/sections/Ourprograms';
import CampaignBanner from '../components/sections/CampaignBanner';
import Testimonies from '../components/sections/Testimonies';
import Contact from '../components/sections/Contact';
import OurFocus from '../components/sections/OurFocus';
import TheProblem from '../components/sections/TheProblem';
import TheSolution from '../components/sections/TheSolution';
import FounderStory from '../components/sections/FounderStory';
import PartnershipInvitation from '../components/sections/PartnershipInvitation';
import ImpactMetrics from '../components/sections/ImpactMetrics';
import GetInvolvedCTA from '../components/sections/Getinvolvedcta'; 
import NewsletterSignup from '../components/sections/Newslettersignup';

// ── Removed from the homepage ──
// import WhyJHF from '../components/sections/WhyJHF';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
 <OurFocus />
      {/* Problem → Solution narrative, right after the hero while attention is highest */}
      <TheProblem />
      <TheSolution />

      {/* Banner + completion stats */}
      <CampaignBanner />
      <OurPrograms />
      <Testimonies />
      <PartnershipInvitation />
      <GetInvolvedCTA />
      <NewsletterSignup />
      <FounderStory />

      <Footer />
    </div>
  );
};

export default Home;