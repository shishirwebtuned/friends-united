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

export const newservicesData = [
  {
    id: 1,
    title: "Cost of Living",
    description: "Lower Bills · Greater Living",
    image: "images/services/Cost-of-living.jpg",
    link: "/cost-of-living",

    demands: [
      "Implement Strategic Measures To Address Unsustainable Rising Costs",
    ],
    demandText: null,
    references: [],

    details: {
      intro:
        "The Australian standard of living has fallen to an all-time low. Record numbers of people are struggling to afford basic needs such as housing, food, and healthcare.",

      sections: [
        {
          key: "expenses",
          title: "Living Expenses",
          text: null,
          list: [
            "Buy or Rent a Home",
            "Buy Groceries",
            "Prescribed Medication and Healthcare",
            "Utilities – Electricity, Gas, Water, Internet etc",
            "Petrol",
            "Public Transport and Road Tolls – Just to get to work",
            "School Fees, uniforms, books, and other necessities",
            "Council and Water Rates",
            "And the list continues.",
          ],
        },
        {
          key: "crisis",
          title: null,
          text: "Many Australians are now living in their cars, families are forced to choose between paying rent or buying medicine, and some are relying on charity organisations for support.",
          list: null,
        },
        {
          key: "causes",
          title: null,
          text: "Corporate profiteering and government expenditure have been identified as major contributors to Australia's inflation and the ongoing cost of living crisis.",
          list: null,
        },
      ],
    },
  },

  {
    id: 2,
    title: "Residential Housing",
    description: "Affordable Homes · Strong Communities",
    image: "images/services/residential-housing.jpg",
    link: "/residental-housing",

    demands: [
      "Decrease Demand And Increase Supply",
      "Australian Residential Housing For Australians Only",
    ],
    demandText: null,

    references: [],

    details: {
      intro: null,
      sections: [
        {
          key: "ownershipPolicy",
          title: null,
          text: "Residential properties can only be purchased and owned by Australian citizens and residents. Foreign investment in Australian residential housing must be completely abolished.",
          list: null,
        },
        {
          key: "taxation",
          title: "Taxation",
          text: "Foreign-owned Australian residential housing to incur:",
          list: [
            "Foreign Owned Tax",
            "Land Tax with no threshold eligibility",
            "Land Tax calculated based on number of properties owned and owner’s country of origin",
          ],
        },
        {
          key: "reinvestment",
          title: "Reinvestment",
          text: "Funds from these levies will be reinvested in:",
          list: [
            "Housing the underprivileged",
            "Developing new housing for Australians",
          ],
        },
        {
          key: "message",
          title: null,
          text: "No longer do we want to see Australians being pushed out of the housing market by overseas buyers and investors.",
          list: null,
        },
      ],
    },
  },

  {
    id: 3,
    title: "Illicit Drugs",
    description: "End Stigma · Embrace Reform",
    image: "images/services/legalise-drugs.avif",
    link: "/illicit-drugs",

    demands: [
      "Take Control Of Illicit Drugs",
      "Think Outside The Square",
      "Remove The Financial Incentive That Drives The ‘vibrant Multibillion-dollar Black-market Industry’",
    ],
    demandText: null,
    references: [],

    details: {
      intro: null,
      sections: [
        {
          key: "problem",
          title: null,
          text: "Making illicit drugs illegal has only created a multibillion-dollar black market controlled by organised crime groups, failing to stop consumption.",
          list: null,
        },
        {
          key: "report",
          title: "Report",
          text: "Australian Institute of Criminology – 'Estimating the costs of serious and organised crime in Australia, 2020–21'",
          list: [
            "TSOC groups traffic illicit drugs into Australia on an industrial scale.",
            "Australian consumers are willing to pay high street prices.",
            "Traffickers profit even from small shipments.",
            "Methylamphetamine poses the greatest harm.",
            "Demand is growing for other substances.",
          ],
        },
        {
          key: "impact",
          title: null,
          text: "Criminal groups continue importing and manufacturing, while users face unsafe and unregulated products.",
          list: null,
        },
        {
          key: "solution",
          title: "Legalisation Summary",
          text: "Legalising illicit drugs would:",
          list: [
            "Shut down TSOC groups, backyard labs, and street dealers.",
            "Allow government regulation of production and sale.",
            "Enable tracking and support for drug users.",
          ],
        },
        {
          key: "disclaimer",
          title: null,
          text: "Friends United does not endorse drug use but recognises the need for more effective approaches.",
          list: null,
        },
      ],
    },
  },

  {
    id: 4,
    title: "Electricity, Water & Gas",
    description: "Reliable Energy · Anytime Access",
    image: "images/services/electricity.jpg",
    link: "/electricity-water-gas",

    demands: [
      "Deemed As Essential Service",
      "Operated As Non-profit Organisation",
      "Reduce The Price Of Electricity To 1/3 Of Its Current Price",
    ],
    demandText:
      "In-line with Russia, China, Venezuela, Turkey and the list continues.",

    references: [
      {
        label: "Cost of Electricity by Country 2025",
        link: "https://worldpopulationreview.com/country-rankings/cost-of-electricity-by-country",
      },
      {
        label: "Electricity price by country 2025 | Statista",
        link: "https://www.statista.com/statistics/263492/electricity-prices-in-selected-countries/",
      },
    ],

    details: {
      intro:
        "Electricity, Gas and Water are essential services that should benefit Australians — not corporations profiting from essential needs.",

      sections: [
        {
          key: "proposal",
          title: "Proposal",
          text: null,
          list: [
            "All electricity generation and transmission should be owned and operated by the Australian Federal Government.",
            "Gas and Water supplies should also be under federal ownership and constitutionally protected from privatisation.",
          ],
        },
        {
          key: "outcome",
          title: null,
          text: "Taking control of energy costs would reduce inflation and make Australian businesses more competitive.",
          list: null,
        },
        {
          key: "challenge",
          title: null,
          text: "Since much of the energy sector is privately owned, Australia must either buy it back or stop corporate profiteering on essential needs.",
          list: null,
        },
      ],
    },
  },

  {
    id: 5,
    title: "Government Accountability",
    description: "Fair Use Of Tax Payers Money.",
    image: "images/services/tax-cut.webp",
    link: "/government-accountability",

    demands: [
      "Manage Australian Tax-payers Money Responsibly And Respectfully",
    ],
    demandText: null,
    references: [],

    details: {
      intro:
        "‘Look after your pennies for your pounds shall look after themselves.’ Governments waste small amounts that snowball into trillions.",

      sections: [
        {
          key: "issues",
          title: "Issues",
          text: null,
          list: [
            "Thousands wasted add up to millions.",
            "Millions wasted add up to hundreds of millions.",
            "Hundreds of millions wasted add up to billions.",
            "Billions wasted become trillions — taxpayers bear the burden.",
          ],
        },
        {
          key: "examples",
          title: "Examples",
          text: null,
          list: [
            "Over $450M wasted on the failed Voice Referendum.",
            "Two new business jets costing taxpayers $450M.",
            "Minister Bill Shorten’s speechwriter costing $620,000 over two years.",
            "$172M spent advertising government policies.",
            "Labor’s $650M spending spree.",
          ],
        },
        {
          key: "misuse",
          title: null,
          text: "Pork-barrelling — misusing public money to win votes instead of allocating funds based on need.",
          list: null,
        },
        {
          key: "message",
          title: null,
          text: "Australia needs good, intelligent economic management.",
          list: null,
        },
      ],
    },
  },

  {
    id: 6,
    title: "Tobacco & Alcohol Taxes",
    description: "Fair Tobacco and Alcohol Tax · Healthier People",
    image: "images/services/tobacco-tax.webp",
    link: "/tobacco-alcohol-taxes",

    demands: [
      "Total Review Of Tobacco And Alcohol Taxes",
      "Price Cigarettes In-line With Our European Friends.",
      "Remove The Financial Incentive That Drives The 'vibrant Multibillion-dollar Black-market Industry'.",
    ],
    demandText: null,

    references: [
      {
        label: "Price Rankings by Country of Cigarettes 20 Pack",
        link: "https://www.numbeo.com/cost-of-living/prices_by_country.jsp?displayCurrency=USD&itemId=17",
      },
      {
        label: "Tobacco Taxes in Australia",
        link: "https://www.tobaccoinaustralia.org.au/chapter-13-taxation/13-6-what-tobacco-taxes-apply-in-australia",
      },
    ],

    details: {
      intro:
        "Excessive taxation on tobacco and alcohol has failed to curb consumption, instead fueling organised crime and black markets.",

      sections: [
        {
          key: "consequences",
          title: "Consequences",
          text: null,
          list: [
            "Creation of a multibillion-dollar tobacco black market controlled by crime syndicates.",
            "Increased violence and arson attacks related to illegal trade.",
            "Punishing law-abiding citizens who drink or smoke responsibly.",
          ],
        },
        {
          key: "conclusion",
          title: null,
          text: "This tax policy is clearly not working, and governments have yet to realise it.",
          list: null,
        },
      ],
    },
  },

  {
    id: 7,
    title: "Immigration",
    description: "Legal Immigration",
    image: "images/services/passport.jpg",
    link: "/immigration",

    demands: [
      "Immediate Stop To Immigration",
      "There Is A Time For Everything – Ecclesiastes 3:1-8 NIV",
    ],
    demandText: null,
    references: [],

    details: {
      intro:
        "Now is not the right time for record immigration when housing and essential services are already under strain.",

      sections: [
        {
          key: "reasoning",
          title: null,
          text: "Even the most basic principle of economics — 'Supply and Demand' — is being ignored by current leadership.",
          list: null,
        },
        {
          key: "impact",
          title: "Impact",
          text: null,
          list: [
            "Increased pressure on housing markets, causing affordability issues for citizens.",
            "Strain on healthcare, education, and public infrastructure.",
            "Potential reduction in quality of services due to overextended resources.",
            "Social tensions arising from resource scarcity and overcrowding.",
          ],
        },
        {
          key: "proposal",
          title: "Proposed Measures",
          text: null,
          list: [
            "Temporarily pause or reduce immigration until current infrastructure meets demand.",
            "Implement policies to prioritise housing and services for current residents.",
            "Review immigration targets annually based on housing and service capacity.",
          ],
        },
      ],
    },
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

export const staticFAQData: FaqItem[] = [
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
        I. Write to us at 
        <a
          href="mailto:hello@friendsunited.com.au"
          className="text-[var(--primary-color)]"
          style="color:#ca7b28"
        >
          hello@friendsunited.com.au
        </a> 
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
    title: "To Buy or Rent a Home",
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
