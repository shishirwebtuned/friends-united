import { FaqItem, Service } from "./types";
import {
  FaGift,
  FaWineBottle,
  FaTicketAlt,
  FaCrown,
  FaRandom,
  FaShieldAlt,
} from "react-icons/fa";
import { FaUsers, FaChartLine, FaCartShopping } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { MdElectricBolt } from "react-icons/md";
import { GiCigarette } from "react-icons/gi";

import {
  FaBeer,
  FaBus,
  FaBook,
  FaPrescriptionBottle,
  FaWater,
  FaGasPump,
} from "react-icons/fa";

export const navLinksData = [
  {
    title: "What We Stand For",
    dropdown: [
      { label: "Cost of Living", href: "/cost-of-living" },
      { label: "Residential Housing", href: "/residental-housing" },
      { label: "Illicit Drugs", href: "/illicit-drugs" },
      { label: "Electricity, Water & Gas", href: "/electricity-water-gas" },
      {
        label: "Government Accountability",
        href: "/government-accountability",
      },
      { label: "Tobacco & Alcohol Taxes", href: "/tobacco-alcohol-taxes" },
      { label: "Immigration", href: "/immigration" },
    ],
  },
  { title: "Make It Happen", href: "/join-us" },
  { title: "Contact Us", href: "/contact-us" },
];

export const servicesData = [
  {
    id: 1,
    title: "Cost of Living",
    description: "Lower Bills · Greater Living",
    image: "images/services/Cost-of-living.jpg",
    link: "/cost-of-living",
    demands: [
      "IMPLEMENT STRATEGIC MEASURES TO ADDRESS UNSUSTAINABLE RISING COSTS",
    ],
    details: `The Australian standard of living has fallen to an all-time low.
    Record numbers of people struggling to be able to afford to:
    • Buy or Rent a Home
    • Buy Groceries
    • Prescribed Medication and Healthcare
    • Utilities – Electricity, Gas, Water, Internet etc
    • Petrol
    • Public Transport and Road Tolls – Just to get to work
    • School Fees, uniforms, books, and all the other needs,
    • Council and Water Rates
    • And the list continues.

    We are now seeing many Australians are now living in their cars,
    families forced to choose between paying the rent or buying medicine,
    and resorting to charity organisations for support.

    Whilst corporate profiteering and government expenditure have been
    identified as significant factors contributing to Australia's inflation
    and the ongoing cost of living crisis.
  `,
  },
  {
    id: 2,
    title: "Residential Housing",
    description: "Affordable Homes · Strong Communities",
    image: "images/services/residential-housing.jpg",
    link: "/residental-housing",
    demands: [
      "DECREASE DEMAND AND INCREASE SUPPLY",
      "AUSTRALIAN RESIDENTIAL HOUSING FOR AUSTRALIANS ONLY",
    ],
    details: `Can only be purchased and owned by Australian citizens and residents.
    Foreign Investment in Australian Residential Housing to be totally abolished.

    Australian Residential Housing already owned by Foreign Investors to incur a:
    • Foreign Owned Tax, plus
    • Land Tax with no threshold eligibility, and
    • Land Tax to be calculated on the number of properties owned within Australia plus the owner's country of origin.

    Funds from these levies will be reinvested in:
    • Housing the underprivileged; and
    • Developing new housing for Australians.

    NO LONGER DO WE WANT TO SEE AUSTRALIANS
    BEING PUSHED OUT OF THE AUSTRALIAN HOUSING MARKET
    BY
    OVERSEAS BUYERS / INVESTORS.
  `,
  },
  {
    id: 3,
    title: "Illicit Drugs",
    description: "End Stigma · Embrace Reform",
    image: "images/services/legalise-drugs.avif",
    link: "/illicit-drugs",
    demands: [
      "TAKE CONTROL OF ILLICIT DRUGS",
      "THINK OUTSIDE THE SQUARE",
      "REMOVE THE FINANCIAL INCENTIVE THAT DRIVES THE ‘VIBRANT MULTIBILLION-DOLLAR BLACK-MARKET INDUSTRY’",
    ],
    details: `Let’s pull our faces out of the sand and acknowledge the hard cold facts:
    making 'Illicit Drugs an Illegal Commodity' has only created a 'Vibrant Multibillion-Dollar Black-Market Industry'
    controlled by 'Organised Crime Groups' and has failed to stop people from being able to buy and take them.

    A report by the Australian Institute of Criminology, *Estimating the costs of serious and organised crime in Australia, 2020–21*, revealed that:
    • Transnational, Serious and Organised Crime (TSOC) groups are trafficking illicit drugs into Australia on an industrial scale,
    • Australian consumers are willing to pay high street prices for illicit drugs,
    • Traffickers can make a healthy profit from even the smallest of shipments,
    • Methylamphetamine is posing the greatest harm to the Australian community, and
    • Demand is growing for a range of other substances.

    This encourages criminal groups to continue importing illicit drugs, backyard laboratories to keep manufacturing,
    whilst the Australian illicit drug-user consumer has no guarantee as to the actual content and safety of the substances being purchased from these sources.

    By legalising Illicit Drugs:
    • Transnational, Serious and Organised Crime (TSOC) groups will be out of business in Australia along with backyard laboratories and the street merchants,
    • Illicit Drugs can be manufactured and sold under government legislation that will impose strict controls over the entire process, and
    • Government will know exactly who is taking illicit drugs and can implement measures to help drug users.

    It needs to be noted that Friends United does not endorse the use of illicit drugs
    but acknowledges that current methods of addressing the issue are ineffective.
  `,
  },
  {
    id: 4,
    title: "Electricity, Water & Gas",
    description: "Reliable Energy · Anytime Access",
    image: "images/services/electricity.jpg",
    link: "/electricity-water-gas",
    demands: [
      "DEEMED AS ESSENTIAL SERVICE",
      "OPERATED AS NON-PROFIT ORGANISATION",
      "REDUCE THE PRICE OF ELECTRICITY TO 1/3 OF ITS CURRENT PRICE",
    ],

    demandtext:
      "In-line with Russia, China, Venezuela, Turkey and the list continues.",
    references: [
      {
        label: "Cost of Electricity by Country 2025",
        link: "https://worldpopulationreview.com/country-rankings/cost-of-electricity-by-country",
      },
      {
        label: "Electricity price by country 2025| Statista",
        link: "https://www.statista.com/statistics/263492/electricity-prices-in-selected-countries/",
      },
    ],

    details: `Electricity, Gas and Water are essential commodities and must serve the benefit of Australian residents, businesses, and industry — not Oligopolies or Corporate Enterprises cashing in on the opportunity to make huge profits on our essential needs.

    Ideally, all electricity generation and transmission should be 'Owned and Operated' by the Australian Federal Government,
    along with our Gas and Water supplies. Ownership should also be enshrined in the Australian Constitution to prevent future governments from selling off these assets.

    Taking control of our energy costs will help Australia reduce inflation and make Australian businesses and industry far more competitive locally and internationally.

    Unfortunately, a significant portion of the Australian energy structure has already been sold to private enterprises by our politicians, making this a challenging task to achieve.
    Australia needs to either:
    • Buy it back, or 
    • Implement measures stopping these Oligopolies / Corporate Enterprises from profiteering on our essential needs.
  `,
  },
  {
    id: 5,
    title: "Government Accountability",
    description: "Fair Use Of Tax Payers Money.",
    image: "images/services/tax-cut.webp",
    link: "/government-accountability",

    demands: [
      "MANAGE AUSTRALIAN TAX-PAYERS MONEY RESPONSIBLY AND RESPECTFULLY",
    ],

    details: `There is an old English saying that goes like this:
    'Look after your Pennies for your Pounds shall look after themselves.'
    This analogy translates to governments wasting taxpayers’ money:

    • All the thousands of dollars wasted add up to millions of dollars wasted,
    • Millions of dollars wasted add up to hundreds of millions of dollars wasted,
    • Hundreds of millions of dollars wasted add up to billions of dollars wasted, and
    • Billions of dollars wasted turn into trillions of dollars wasted —
      leaving the poor struggling taxpayer to pick up all these losses.

    Our governments have absolutely no respect for Australians’ hard-earned taxpayer dollars
    and spend it like it’s ‘free-flowing water’. When the numbers aren’t adding up,
    they just find new ways of increasing taxes to cover the shortfall.

    Let’s look at only some of the financial wastage that has taken place:
    • Albanese government’s failed ‘Voice Referendum’ that was divisive, incompetently managed,
      and saw over $450 million of taxpayers’ money wasted.
    • Two new business jets costing the Australian taxpayer $450 million just to ferry the Prime Minister
      and Ministers around in absolute comfort and style — while the rest of the country is in crisis.
    • Minister Bill Shorten’s personal speechwriter costing taxpayers $620,000 over two years.
    • Albanese government’s $172 million on advertising its own policies.
    • Labor’s $650 million spending spree.
    • And there’s been much more money wasted.

    Let’s not disregard pork-barrelling — spending public money in particular electorates to win votes
    rather than spending those funds where they are most needed.

    AUSTRALIA NEEDS GOOD, INTELLIGENT ECONOMIC MANAGEMENT.
  `,
  },
  {
    id: 6,
    title: "Tobacco & Alcohol Taxes",
    description: "Fair Tobacco and Alcohol Tax · Healthier People",
    image: "images/services/tobacco-tax.webp",
    link: "/tobacco-alcohol-taxes",
    demands: [
      "TOTAL REVIEW OF TOBACCO AND ALCOHOL TAXES",
      "Price cigarettes in-line with our European friends.",
      "Remove the financial incentive that drives the 'vibrant multibillion-dollar black-market industry'.",
    ],
    references: [
      {
        label: "Price Rankings by Country of Cigarettes 20 Pack",
        link: "https://www.numbeo.com/cost-of-living/prices_by_country.jsp?displayCurrency=USD&itemId=17",
      },
    ],
    details: `For decades, Australian Governments have argued that by excessively taxing cigarettes,
    it will reduce the number of people smoking. How wrong they got this.

    On the contrary, excessive taxation has created a multibillion-dollar Tobacco Black Market
    controlled by organised crime syndicates — resulting in a surge of violence and arson attacks,
    endangering many innocent people and even leading to deaths.

    Tobacco and Alcohol Tax has become nothing more than revenue-raising —
    penalising ordinary Australians who simply enjoy a beer or a cigarette.

    Want to know more about how excessively this product is taxed?
    Visit:
    https://www.tobaccoinaustralia.org.au/chapter-13-taxation/13-6-what-tobacco-taxes-apply-in-australia

    THIS TAX POLICY IS CLEARLY NOT WORKING
    AND
    GOVERNMENTS HAVE NOT REALISED IT.
  `,
  },
  {
    id: 7,
    title: "Immigration",
    description: "Legal Immigration",
    image: "images/services/passport.jpg",
    link: "/immigration",
    demands: [
      "IMMEDIATE STOP TO IMMIGRATION",
      "THERE IS A TIME FOR EVERYTHING – Ecclesiastes 3:1-8 NIV",
    ],

    details: `Now is not the right time for a record number of people to be entering Australia
    when there are not enough housing and services to meet our current needs and demands.

    Doesn’t our Prime Minister understand the Basic Law of Economics:
    'Supply and Demand'?
  `,
  },
];

export const featuresData = [
  {
    id: 1,
    title: "Random Weekly Member Perks",
    description:
      "Each week, one active member gets a mystery prize or shoutout to keep engagement up between major milestones.",
    highlight: "Weekly surprises keep the community engaged and excited!",
    icon: FaGift,
  },
  {
    id: 2,
    title: "Referral-Based Bonus Entries",
    description:
      "Encourage sharing via unique referral links. Each successful referral equals a bonus entry in the next exciting giveaway.",
    highlight:
      "Each successful referral = +1 bonus entry in upcoming giveaways",
    icon: FaTicketAlt,
  },
  {
    id: 3,
    title: "Founder's Club",
    description:
      'The first 1,000 members get a permanent "founder badge" on profile with exclusive access to behind-the-scenes content.',
    highlight:
      "Exclusive behind-the-scenes access • First dibs on merchandise • Permanent recognition",
    icon: FaCrown,
  },
];

export const progressData = [
  {
    id: 1,
    icon: FaUsers,
    title: "Automatic Entry",
    description:
      "All active paying members are automatically entered into every giveaway. No forms to fill out, no extra steps required - just maintain your membership and you're in!",
  },
  {
    id: 2,
    icon: FaRandom,
    title: "Fair & Random",
    description:
      "Winners are selected using a transparent random selection process. Every eligible member has an equal chance to win, regardless of membership duration or tier.",
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Milestone Based",
    description:
      "Every 10,000 new members triggers a $10,000 giveaway. As our community grows, so do the opportunities to win. More members = more frequent giveaways!",
  },
];

export const demandsData = [
  {
    id: 1,
    icon: FaCartShopping,
    title: "GENUINELY REDUCE THE COST OF LIVING",
    description:
      "Making everyday essentials affordable for all families through strategic economic policies and market regulation.",
  },
  {
    id: 2,
    icon: TiHome,
    title: "GENUINELY REDUCE THE COST OF HOUSING",
    description:
      "Ensuring housing accessibility through comprehensive reform of property markets and rental regulations.",
  },
  {
    id: 3,
    icon: MdElectricBolt,
    title: "GENUINELY REDUCE THE COST OF ELECTRICITY",
    description:
      "Achieving competitive energy pricing through infrastructure investment and policy reform.",
  },
  {
    id: 4,
    icon: FaWineBottle,
    title: "GENUINELY REDUCE THE COST OF ALCOHOL & CIGARETTES",
    description:
      "Implementing fair taxation policies that align with international standards while maintaining public health goals.",
  },
  {
    id: 5,
    icon: GiCigarette,
    title: "END THE Tobacco and Illicit Drug Black Market Industry",
    description:
      "Controlled by Organised Crime Syndicates through comprehensive law enforcement and regulatory reform.",
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: "Surge of Violence and Arson Attacks",
    description:
      "Protecting communities through enhanced security measures and elimination of criminal enterprises.",
  },
];

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What will you get for your $2.50 monthly investment?",
    answer: `
      Less than the price of half a cup of coffee <br />
      I. A professional team advocating Friends United (FU) agenda to all the
      registered political parties’ and its members (federal and state levels) at federal and state levels,
      including Labor, Liberal, Nationals, Greens, Pauline Hanson, Trumpets of
      Patriot, the Teals and the list continues as there are some 55
      registered parties,
      <br />
      II. Evaluate all the responses, views and stance on the issues raised
      with them and communicate the feed-back to our Friends United Members.
      <br />
      III. Evaluate which political party / member will support Friends United
      demands and which will not support, and
      <br />
      IV. Make known to our Friends United (FU) consortium ‘which politician
      need to be supported’ and ‘which ones need to go and look for a new
      job’.
    `,
  },
  {
    id: 2,
    question: "Who should join and support Friends United (FU)?",
    answer: `
        I. Individuals, businesses, and organisations that want to see a genuine
        significant reduction in the price of electricity, gas and water,
        <br />
        II. People that are struggling to buy or rent a home,
        <br />
        III. People that are struggling with the unsustainable cost of living,
        <br />
        IV. Individuals who express dissatisfaction with the government’s
        tobacco and alcohol taxes.
        <br />
        V. People that want to see an end of the ‘Vibrant Multibillion-Dollar
        Black-Market Illicit Drug and Tobacco Industry controlled by Organised
        Crime Groups’
        <br />
        VI. Illicit Drug users,
        <br />
        VII. Australian Taxpayers infuriated with governments wasting hard
        earned taxpayer money.
      `,
  },
  {
    id: 3,
    question: "Who should not join and support Friends United (FU)?",
    answer: `
        I. Electricity organisations that are profiting from the current system,
        <br />
        II. Illicit Drug Dealers and manufacturers, as the need for their
        services and profits will be diminished,
        <br />
        III. People that are doing financially well under the current system.
  `,
  },
  {
    id: 4,
    question: "What if I don’t agree with all of Friends United (FU) policies?",
    answer: `
        I. Write to us at{" "}
        <a
          href="mailto:hello@friendsunited.com.au"
          className="text-[var(--primary-color)]"
        >
          hello@friendsunited.com.au
        </a>{" "}
        and make your view known to us.
`,
  },
  {
    id: 5,
    question: "What happens if I no longer want to support Friends United?",
    answer: `
        Write to us at
        <a
          href="mailto:hello@friendsunited.com.au"
    style="color:#ca7b28"
        >
          hello@friendsunited.com.au
        </a>
        and have your membership cancelled.
`,
  },
  {
    id: 6,
    question:
      "How long is it going to take for Friends United to become the ‘ONE SUPERPOWERFUL VOICE’ needed to make our position known to the Politicians?",
    answer: `
        Friends United is allowing the first 12mths to build the numbers before
        confronting the politicians head-on. In the meantime, our politicians
        will become extremely well acquainted ‘who we are and what we stand
        for’ and will know that the day is coming.
        `,
  },
];

export const giveawayMilestones = [
  {
    id: 1,
    title: "1st Giveaway — 20,000 Members",
    description: "2x $10,000 Winners at the 20,000-member milestone.",
  },
  {
    id: 2,
    title: "2nd Giveaway — 40,000 Members",
    description: "4x $10,000 Winners at the 40,000-member milestone.",
  },
  {
    id: 3,
    title: "3rd Giveaway — 60,000 Members",
    description: "6x $10,000 Winners at the 60,000-member milestone.",
  },
  {
    id: 4,
    title: "4th Giveaway — 80,000 Members",
    description: "8x $10,000 Winners at the 80,000-member milestone.",
  },
  {
    id: 5,
    title: "5th Giveaway — 100,000 Members",
    description: "10x $10,000 Winners at the 100,000-member milestone.",
  },
];

export const realWinnersData = [
  {
    id: 1,
    icon: TiHome,
    title: "Buy or Rent a Home",
    description:
      "Making housing accessible and affordable for all Australians through effective reforms and policies.",
  },
  {
    id: 2,
    icon: FaCartShopping,
    title: "Groceries",
    description:
      "Reducing everyday grocery costs to ensure families can afford nutritious food without financial strain.",
  },
  {
    id: 3,
    icon: FaPrescriptionBottle,
    title: "Healthcare and Prescribed Medication",
    description:
      "Providing affordable healthcare and prescription medicines to all citizens through policy interventions.",
  },
  {
    id: 4,
    icon: MdElectricBolt,
    title: "Utilities Services",
    description:
      "Lowering costs of electricity, gas, water, internet, and other essential utility services for households.",
  },
  {
    id: 5,
    icon: FaGasPump,
    title: "Petrol",
    description:
      "Ensuring fair pricing and accessibility for petrol and other fuels to support transportation needs.",
  },
  {
    id: 6,
    icon: FaBus,
    title: "Public Transport and Road Tolls",
    description:
      "Improving affordability and accessibility of public transport and reducing the burden of road tolls.",
  },
  {
    id: 7,
    icon: FaBook,
    title: "School Fees, Uniforms, and Books",
    description:
      "Making education more affordable by easing the financial load on families for school expenses.",
  },
  {
    id: 8,
    icon: FaBeer,
    title: "Enjoy a Beer or a Cigarette",
    description:
      "Allowing Australians to enjoy small pleasures without exorbitant taxation or financial strain.",
  },
  {
    id: 9,
    icon: FaWater,
    title: "Council and Water Rates",
    description:
      "Reducing ongoing council and water rates to ease household financial pressure.",
  },
  {
    id: 10,
    icon: GiCigarette,
    title: "Other Ongoing Necessities",
    description:
      "Addressing costs of other essential items needed for everyday life, ensuring affordability for all.",
  },
];
