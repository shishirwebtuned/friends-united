import React from 'react'
import HeroSection from './Components/HeroSection';
import HeroBanner from './Components/HeroBanner';
import AboutUs from './Components/AboutUs';
import OurFight from './Components/OurFight';
import HadEnough from './Components/HadEnough';
import GiveawaySection from './Components/GiveawaySection';
import BreakSilence from './Components/BreakSilence';
import FAQ from './Components/FAQ';
import SubscriptionForm from './Components/SubscriptionForm';
import ContactBanner from './Components/ContactBanner';
import MilestoneWinners from './Components/MilestoneWinners';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <HeroBanner />
            <AboutUs />
            <OurFight />
            <HadEnough />
            <GiveawaySection />
            <MilestoneWinners />
            <BreakSilence />
            <ContactBanner />
            <FAQ />
            <SubscriptionForm />
        </div>
    )
}

export default HomePage;
