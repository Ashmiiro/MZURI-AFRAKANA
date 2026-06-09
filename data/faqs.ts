export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  description: string;
  items: FAQItem[];
}

export const FAQs: Record<string, FAQCategory> = {
  planning: {
    title: "Category A: Safari Planning",
    description: "Essential insights on preparing for your high-end East African expedition.",
    items: [
      {
        question: "What is the best time to go on a Ugandan safari?",
        answer: "The absolute best times to embark on a Ugandan safari are during the dry seasons, which run from June to August and from December to February. During these months, wildlife is concentrated around permanent water sources, vegetation is less dense, and roads are easily passable. Tracking mountain gorillas and primates in Bwindi or Kibale is also significantly easier and more comfortable during dry periods, although forest showers can still occur at any time."
      },
      {
        question: "What is the weather like in East Africa?",
        answer: "East Africa enjoys a tropical, temperate climate due to its elevated altitude. Uganda is situated on the Equator, meaning it maintains comfortable, stable temperatures year-round (ranging from 21°C to 28°C / 70°F to 82°F). Evenings in mountainous regions like Bwindi or Volcanos National Park can be chilly, dropping to 10°C (50°F) or lower, necessitating warm layers. The rainy seasons typically occur from March to May and September to November."
      },
      {
        question: "Should I safari in East Africa (E.A.) or South Africa (S.A.)?",
        answer: "East Africa offers an unparalleled 'untamed wilderness' feel, centered around massive safari migrations, open savannahs, and rare primate encounters (mountain gorillas and chimpanzees in their natural habitats). Lodges are deeply integrated into the landscape. South Africa offers highly developed private reserves, easier self-drive options, and direct access to urban luxury. If you seek the iconic 'mists' of Bwindi, the dramatic wildebeest crossings, and deep, ancestral forests, East Africa is the definitive choice."
      },
      {
        question: "When is the Great Migration in East Africa?",
        answer: "The Great Migration is a year-round circular cycle across the Serengeti-Mara ecosystem. Generally, the herds reside in Serengeti National Park (Tanzania) for most of the year. From July to October, they move north into the Masai Mara (Kenya) and perform the dramatic river crossings across the Mara River. By November, they migrate back south to the Serengeti's short grass plains for calving from January to March."
      },
      {
        question: "How far in advance do I need to book a safari?",
        answer: "We strongly recommend booking your luxury safari at least 8 to 12 months in advance. This is driven primarily by the high demand and strictly limited availability of Mountain Gorilla trekking permits (which are capped daily to protect the primates) and exclusive boutique luxury lodges. For peak season travel (June-August and December-February), 12 months in advance is safest."
      },
      {
        question: "Do I need visas for a safari in Uganda?",
        answer: "Yes, most international travelers require a visa to enter Uganda. Visas must be applied for and purchased online via the official Uganda E-Visa portal prior to departure. If you are traveling across multiple East African countries (such as Kenya, Rwanda, and Uganda), we highly advise obtaining the 'East Africa Tourist Visa', which grants multiple entry privileges across all three states for $100 USD."
      },
      {
        question: "What's the minimum age for children to go on a safari?",
        answer: "While game drives and general lodge stays can accommodate children of most ages under parental guidance, there are strict age limits for primate activities. Mountain Gorilla tracking in Uganda and Rwanda has a strict minimum age of 15 years. Chimpanzee tracking in Kibale also enforces a minimum age of 12 years to ensure safety inside dense rainforests."
      },
      {
        question: "What if I need to cancel my safari?",
        answer: "Mzuri Afrikana Safaris operates a premium luxury cancellation policy designed to offset commitments made to exclusive small camps and non-refundable permits. If cancellation occurs more than 90 days before safari, deposits are partially refundable or transferrable. For cancellations within 90 days, graduated fees apply up to 100% of the trip value if under 30 days. We mandate that all guests purchase comprehensive travel insurance including 'Cancel for Any Reason' (CFAR) coverage."
      }
    ]
  },
  mzuri: {
    title: "Category B: About Mzuri Afrikana & Partners",
    description: "Learn about our heritage, company standards, and community integrations.",
    items: [
      {
        question: "How long has Mzuri Afrikana Safaris been in business?",
        answer: "Mzuri Afrikana Safaris was founded by a team of veteran guides and luxury travel specialists with over 15 years of industry experience combined. We operate at the apex of premium regional tourism, providing meticulously designed journeys that match or exceed global benchmarks set by luxury standards like Micato Safaris."
      },
      {
        question: "Does Mzuri offer escorted African safaris?",
        answer: "Yes. All Mzuri Safaris are private, customized, and escorted. You are accompanied by a fully dedicated, English-speaking professional Private Expedition Guide who stays with you from the moment you land until you board your international flight, managing every logistic and wildlife excursion flawlessly."
      },
      {
        question: "What is the average group size on a Mzuri Safari?",
        answer: "As an elite, bespoke luxury agency, our 'average' group size is actually a private party of 2 to 6 guests (families or couples). We do not operate generic, large-group tour buses. If we organize a rare curated departure, it is limited strictly to a maximum of 12 guests across three customized Land Cruisers."
      },
      {
        question: "How many guests travel in a Mzuri Safari vehicle?",
        answer: "We guarantee a maximum of 4 to 6 guests per safari vehicle. Every guest is assigned a window seat, ensuring uninterrupted viewing and comfortable access to overhead pop-up roofs for pristine photography. Our fleet consists exclusively of premium, long-wheelbase custom 4x4 Land Cruisers."
      },
      {
        question: "Where are the Mzuri Safaris offices?",
        answer: "Our primary operational headquarters is located in Kampala, Uganda, which allows us to maintain direct quality control and immediate 24/7 localized support. We also keep regional partner concierge desks in Kigali (Rwanda), Arusha (Tanzania), and Nairobi (Kenya)."
      },
      {
        question: "What makes a Mzuri Safari different?",
        answer: "Our differentiator is total experiential luxury. We believe in our philosophy: 'All you do is wake up and be ready for greatness'. From customized in-vehicle Wi-Fi and chilled refreshments on the road, to private fast-track airport handling, handpicked five-star camps, and veteran private guides, we build bespoke magic."
      },
      {
        question: "How does Mzuri give back to communities?",
        answer: "We support conservation and community enterprise. Ten percent of all corporate profits are directly distributed into active projects, including clean-water solar wells in the remote Karamoja region, funding Batwa minority community health clinics, and supporting female rangers defending Bwindi’s buffer zones."
      },
      {
        question: "What is the 'Mzuri One for One' commitment?",
        answer: "The 'Mzuri One for One' commitment states that for every single traveler who books an itinerary with us, we fully sponsor a school term's tuition, uniform, and books for a conservation-area child whose family lives in a forest boundary village, fostering a positive link between wildlife conservation and community prosperity."
      }
    ]
  },
  onsafari: {
    title: "Category C: On Safari Experience",
    description: "Insights into what your days will look like, culinary standards, packing, and health.",
    items: [
      {
        question: "What is included on an Mzuri Safari?",
        answer: "An Mzuri Safari is completely all-inclusive from start to finish. This includes VIP meet-and-greet airport services, domestic flights, all luxury lodging, full-board gourmet dining, premium beverages, national park entrance fees, primate permits (gorilla/chimp), private 4x4 Land Cruiser transit with unlimited mileage, bottled water/Wi-Fi, and 24/7 backoffice emergency support."
      },
      {
        question: "What sort of food can I expect on an African safari?",
        answer: "Expect five-star international and fine African fusion dining. Mzuri's partnered luxury lodges employ top-tier chefs who prepare multi-course meals using fresh, organic farm-to-table ingredients. Dietary requests (vegan, gluten-free, kosher) are fully accommodated upon booking. Fine wines, spirits, and local beers are also provided."
      },
      {
        question: "What type of clothing should I wear on an African safari?",
        answer: "Pack light, breathable, neutral-colored clothing (khaki, beige, olive green). Avoid bright colors and dark blue/black (which can attract tsetse flies). Long-sleeved shirts and trousers are essential for forest treks to prevent nettle scratches. Sturdy broke-in hiking boots, a wide-brimmed safari hat, sunglasses, and a warm fleece for cool mornings are highly recommended."
      },
      {
        question: "Are the evenings formal on safari?",
        answer: "No. Lodges maintain an 'elegant-casual' dress code. There is no need for formal evening wear like suits or heavy evening gowns; comfortable clothes, smart trousers, or summary dresses are perfectly appropriate while sharing stories by the campfire."
      },
      {
        question: "Can I use my cell phone while on safari in Africa?",
        answer: "Yes, cellular reception is surprisingly good in many areas of East Africa. However, our custom Safari Land Cruisers and executive camps are fully equipped with complimentary Wi-Fi, allowing you to stay connected of your own accord. We encourage guests to silent their phones on game drives to better absorb the natural ambience."
      },
      {
        question: "Will Mzuri have someone meet me at the airport?",
        answer: "Absolutely. You will be greeted inside the arrivals terminal by our direct airport representative who handles luggage and guides you through fast-track customs. From there, you are directly handed to your Private Expedition Guide who will drive you to your luxury city lodge."
      },
      {
        question: "Is there internet access at the safari lodges & camps?",
        answer: "Yes, almost all of our selected luxury camps and safari resorts provide stable Wi-Fi, usually available in main lounge areas, and increasingly in private villas. Note that satellite internet inside deep forests like Bwindi can occasionally experience weather-based latency."
      },
      {
        question: "Do I need to tip the staff when I am on safari?",
        answer: "Tipping is fully customary in East African tourism and a heartwarming way to show gratitude. We recommend planning for $20-$30 USD per day for your lead Guide, and $15-$20 USD per day per room for the general lodge staff tip box. Guidelines vary based on travel group and service length."
      },
      {
        question: "What immunizations are required for safari in Africa?",
        answer: "A Yellow Fever vaccination certificate is mandatory for entering Uganda and Rwanda and must be presented at border posts. Antimalarial prophylactics are strongly recommended. We advise consulting your specialized travel clinic 4-6 weeks prior to departure for personalized vaccine advice."
      },
      {
        question: "What if I need medical attention while on safari?",
        answer: "Mzuri Afrikana Safaris secures comprehensive AMREF Flying Doctors evacuation coverage for every single guest. In the highly unlikely event of a medical emergency, you will be airlifted in a medical plane with a physician on board straight to a world-class private hospital in Nairobi or Kampala."
      },
      {
        question: "Should I purchase travel insurance for my African safari?",
        answer: "Yes, comprehensive travel insurance is mandatory for all booking. It must cover medical emergency costs, personal liability, baggage loss, and trip cancellation. Providing proof of emergency medical insurance coverage is a prerequisite for finalizing your custom safari booking."
      }
    ]
  }
};
