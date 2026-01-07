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
import RealWinners from './Components/RealWinners';
import JoinUs from './Components/JoinUs';
import { client } from '@/lib/sanity.client';
import HeroBannerNew from './Components/HeroBannerNew';
import DailySocialMedia from './Components/DailySocialMedia';
export const revalidate = 60

export default async function HomePage() {
  const bannerData = await client.fetch(`
    *[_type == "bannerData"][0]{
      title,
      subTitle,
    }
  `,
    {},
    { cache: "no-store" }
  );

  const faq = await client.fetch(`
  *[_type == "faq"][0]{
  image,
    faq[]{
      _key,
      question,
      answer
    }
  }
`,
    {},
    { cache: "no-store" }
  );

  console.log("faq", faq);

  return (
    <div>
      <HeroSection />
      {/* <HeroBanner bannerData={bannerData} /> */}
      <HeroBannerNew bannerData={bannerData} />
      <AboutUs bannerData={bannerData} />
      {/* <OurFight /> */}
      {/* <HadEnough /> */}
      {/* <GiveawaySection /> */}
      {/* <MilestoneWinners /> */}
      {/* <BreakSilence /> */}
      {/* <RealWinners /> */}
      <JoinUs />
      {/* <SubscriptionForm /> */}
      {/* <JoinUsForm /> */}
      <FAQ faqDataList={faq} />
      <ContactBanner />
      <DailySocialMedia />
    </div>
  )
}

