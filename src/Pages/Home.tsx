import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ── Existing sections ──
import Hero from '../components/sections/Hero';
//import MissionVision from '../components/sections/MissionVision';
import OurPrograms from '../components/sections/Ourprograms';
import CampaignBanner from '../components/sections/CampaignBanner';
import Testimonies from '../components/sections/Testimonies';
import Contact from '../components/sections/Contact';
import OurFocus from '../components/sections/OurFocus';

// ── New board-requested sections ──
import TheProblem from '../components/sections/TheProblem';
import TheSolution from '../components/sections/TheSolution';
import WhyJHF from '../components/sections/WhyJHF';
import FounderStory from '../components/sections/FounderStory';
//import ImpactMetrics from '../components/sections/ImpactMetrics';
import PartnershipInvitation from '../components/sections/PartnershipInvitation';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurFocus />
      <TheProblem />
      <TheSolution />
      
      <WhyJHF />
      <FounderStory />
     
      <OurPrograms />
      <PartnershipInvitation />
      <CampaignBanner />
      <Testimonies />
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;