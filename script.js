// Core Image Mappings for Mzuri Afrikana Safaris
const IMAGE_MAPPING = {
  "safari_land": "https://lh3.googleusercontent.com/d/1-ciPfaD1DbeVAKNuaXlL6IN-EBuDNDy3",
  "uganda_general": "https://lh3.googleusercontent.com/d/114Me01XhETLn6fSrlg11I1Fhari0Zort",
  "rwanda_hills": "https://lh3.googleusercontent.com/d/18ujQ6yW8Bez3ojPkAgAQeulDdCjqhOn-",
  "kenya_mara": "https://lh3.googleusercontent.com/d/1K7kuX1-zpQS8iLHVzOriwad8_6OhFKi2",
  "tanzania_serengeti": "https://lh3.googleusercontent.com/d/1LJQmb2VAqoqHyC6iK8e3PvDzrScayAE5",
  "river_nile": "https://lh3.googleusercontent.com/d/1VWDGHyFRb7U_jfSnEWmPsHYScdEUETvG",
  "gorilla_bwindi": "https://lh3.googleusercontent.com/d/1Y2c3UgTpxUw0I-fdyzoKnzCVaWhtLm7O",
  "kidepo_valley": "https://lh3.googleusercontent.com/d/1_RzKFW3ABbQSmTnKzGZNsHkCzNKIKgdn",
  "masai_mara": "https://lh3.googleusercontent.com/d/1dirOnWVBZvD8OMuOtu4t2iIwajt0_57c",
  "chimp_kibale": "https://lh3.googleusercontent.com/d/1dx_LTZM2r7dDVuALmNBBXVhiAo8cboo7",
  "ugandaculture": "https://lh3.googleusercontent.com/d/1e-XjpDICFyz1yR4r1Nwg52PawoBoleY0",
  "lion_video": "https://lh3.googleusercontent.com/d/1snzYJ7oqvZ8ePCCB4U55Ih0kda5ks9FF",
  "clouds_lodge": "https://lh3.googleusercontent.com/d/1tArQzjaPsMk_xfOEyJizP1J6fmQTiV1O",
};

// Image Fallback Matcher
function getSafariImage(seed) {
  const cleanSeed = seed ? seed.trim() : "";
  if (IMAGE_MAPPING[cleanSeed]) {
    return IMAGE_MAPPING[cleanSeed];
  }
  
  const lowercase = cleanSeed.toLowerCase();
  if (lowercase.includes("uganda")) return IMAGE_MAPPING["uganda_general"];
  if (lowercase.includes("rwanda") || lowercase.includes("gorilla")) return IMAGE_MAPPING["gorilla_bwindi"];
  if (lowercase.includes("kenya") || lowercase.includes("mara")) return IMAGE_MAPPING["kenya_mara"];
  if (lowercase.includes("tanzania") || lowercase.includes("serengeti")) return IMAGE_MAPPING["tanzania_serengeti"];
  if (lowercase.includes("chimp") || lowercase.includes("kibale")) return IMAGE_MAPPING["chimp_kibale"];
  if (lowercase.includes("nile") || lowercase.includes("river") || lowercase.includes("water")) return IMAGE_MAPPING["river_nile"];
  if (lowercase.includes("valley") || lowercase.includes("kidepo")) return IMAGE_MAPPING["kidepo_valley"];
  
  return IMAGE_MAPPING["safari_land"];
}

// Global Application Data Setup
const DestinationsData = [
  {
    id: "uganda",
    name: "Uganda",
    country: "The Pearl of Africa",
    tagline: "The cradle of source waters, primate forests, and diverse heights.",
    imageSeed: "uganda_general",
    highlights: [
      "Bwindi Impenetrable Forest: Sanctuary of half the world's mountain gorillas",
      "Kibale Rainforest: The primate capital holding 13 unique primate species",
      "Murchison Falls: The world's most hyper-concentrated waterfall energy",
      "Queen Elizabeth Park: Lion prides, elephants, and Kazinga Channel pods",
      "Kidepo Valley: An untouched, remote mountain-savannah wilderness",
      "Jinja: The vibrant historic adventure capital at the source of the River Nile",
      "Mgahinga Gorilla Park: Where gold meets silver - gorillas and golden monkeys"
    ],
    description: "Centering the African continent, Uganda is an incredible ecological crown. It bridges the sweeping savannahs of East Africa with the dense, misty tropical rainforests of Central Africa. Here, you can watch lions crouched in the savannah grass in the morning, and lock eyes with mountain gorillas inside primordial mist-clung rain forests in the afternoon. Famously labeled 'The Pearl of Africa' by Sir Winston Churchill, Uganda remains pristine, authentic, and spectacularly diverse."
  },
  {
    id: "rwanda",
    name: "Rwanda",
    country: "Land of a Thousand Hills",
    tagline: "Ultra-luxury gorilla sanctuaries and poignant cultural reflections.",
    imageSeed: "rwanda_hills",
    highlights: [
      "Volcanoes National Park: Ultra-luxury base for mountain gorilla tracking",
      "Akagera National Park: Big Five savannah drives running along the Tanzanian border",
      "Nyungwe National Park: High-altitude canopy walks and ancient chimpanzee groups",
      "Kigali: Undergoing a clean, modern renaissance with moving historical memorials"
    ],
    description: "Rwanda represents a miracle of transformation and a sanctuary of refined, ultra-high-end luxury. Its terrain drifts upwards into volcanic ridges and terraced cultivation hills. Partnered with legendary names like Singita and One&Only, Rwanda offers a seamless cross-border companion to Uganda, where travelers can traverse pristine bamboo forests, meet gorillas, and experience a pristine capital city of spotless cleanliness and warm hospitality."
  },
  {
    id: "kenya",
    name: "Kenya",
    country: "The Cradle of Safari",
    tagline: "Golden acacia savannahs and the thunder of the Great Wildebeest Migration.",
    imageSeed: "kenya_mara",
    highlights: [
      "Masai Mara National Reserve: Premier predator and wildebeest migration crossing",
      "Amboseli National Park: Massive tuskers walking beneath Mt. Kilimanjaro",
      "Samburu Reserve: Rare endemic species in dry northern landscapes",
      "Lewa Wildlife Conservancy: World-class sanctuary for endangered black rhinos"
    ],
    description: "Kenya represents the golden-age romance of the classic African safari. Its endless acacia plains are home to some of the greatest wildlife densities on Earth, culminated in the grand spectacle of the annual Great Wildebeest Migration. With custom-outfitted, private land excursions and flights coordinated by Mzuri, Kenya is an indispensable extension for those wishing to compare Uganda’s rainforests with the grand plains of cinematic lore."
  },
  {
    id: "tanzania",
    name: "Tanzania",
    country: "Untamed Horizons",
    tagline: "Massive wildlife calderas and the infinite grass plains of Serengeti.",
    imageSeed: "tanzania_serengeti",
    highlights: [
      "Serengeti National Park: Infinite grasslands hosting the Great Migration",
      "Ngorongoro Crater: An ancient self-contained volcanic caldera wildlife oasis",
      "Tarangire National Park: Famous for massive elephant herds and old baobab trees",
      "Selous Reserve: Unlocked river waterways and private boat safaris"
    ],
    description: "Tanzania offers wildness on a epic scale. From the vast caldera of Ngorongoro holding its own self-contained wildlife ecosystem, to the infinite plains of Serengeti which fade into the curved horizon. Settle in five-star wilderness camps styled in absolute elegance, and drift in a hot-air balloon over the shifting golden seas of grass. Tanzania is the ultimate expanse of raw East African wilderness."
  }
];

const FAQs = {
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
      }
    ]
  },
  mzuri: {
    title: "Category B: About Mzuri Afrikana & Partners",
    description: "Learn about our heritage, company standards, and community integrations.",
    items: [
      {
        question: "How long has Mzuri Afrikana Safaris been in business?",
        answer: "Mzuri Afrikana Safaris was founded by a team of veteran guides and luxury travel specialists with over 15 years of industry experience combined. We operate at the apex of premium regional tourism, providing meticulously designed journeys that match or exceed global benchmarks."
      },
      {
        question: "Does Mzuri offer escorted African safaris?",
        answer: "Yes. All Mzuri Safaris are private, customized, and escorted. You are accompanied by a fully dedicated, English-speaking professional Private Expedition Guide who stays with you from the moment you land until you board your international flight, managing every logistic and wildlife excursion flawlessly."
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
        answer: "Expect five-star international and fine African fusion dining. Mzuri's partnered luxury lodges employ top-tier chefs who prepare multi-course meals using fresh, organic farm-to-table ingredients. Dietary requests (vegan, gluten-free, kosher) are fully accommodated upon booking."
      },
      {
        question: "What type of clothing should I wear on an African safari?",
        answer: "Pack light, breathable, neutral-colored clothing (khaki, beige, olive green). Avoid bright colors and dark blue/black. Long-sleeved shirts and trousers are essential for forest treks to prevent nettle scratches. Sturdy broke-in hiking boots, a wide-brimmed safari hat, sunglasses, and a warm fleece for cool mornings are highly recommended."
      },
      {
        question: "What if I need medical attention while on safari?",
        answer: "Mzuri Afrikana Safaris secures comprehensive AMREF Flying Doctors evacuation coverage for every single guest. In the highly unlikely event of a medical emergency, you will be airlifted in a medical plane with a physician on board straight to a world-class private hospital in Nairobi or Kampala."
      }
    ]
  }
};

const CatalogItems = [
  {
    id: "mzuri-grand",
    title: "The Mzuri Grand Safari",
    duration: 15,
    price: 40130,
    category: "Private Classic Safaris",
    highlights: "The ultimate luxury showcase across Uganda: Bwindi, Murchison, Kibale, and remote savannahs.",
    description: "Our crowning achievement. Safely traversing Uganda in private chartered flights and custom luxury Land Cruisers. Expansive, elegant, and deeply authentic."
  },
  {
    id: "east-pearls",
    title: "East Pearl's Golden Savannahs",
    duration: 15,
    price: 39750,
    category: "Classic Safaris",
    highlights: "Quintessential East and West Uganda loop with exclusive gorilla permits & private savannah airfields.",
    description: "An incredibly styled safari charting the iconic horizons of West Uganda and Kidepo Valley's dramatic plains. Perfect for photographers."
  },
  {
    id: "hemingway-way",
    title: "The Hemingway Way Luxury Safari",
    duration: 14,
    price: 31450,
    category: "Private Classic Safaris",
    highlights: "Explore Old Africa in Style, charting Queen Elizabeth and the ancient Victoria Nile shores.",
    description: "A tribute to great explorers of the past, fully modernized with on-board Wi-Fi, air conditioning, elite tents, and five-star culinary service."
  },
  {
    id: "great-herds-uganda",
    title: "The Great Herds of Uganda",
    duration: 13,
    price: 31750,
    category: "Classic Safaris",
    highlights: "Classic Safari Supersights, featuring the Marvels We Encounter in untouched northern parks. New for 2026.",
    description: "Designed specifically to view the dense herds of cape buffalo, savannah elephant, and iconic predators without structural crowds."
  },
  {
    id: "heart-of-uganda",
    title: "The Heart of Uganda",
    duration: 12,
    price: 25000,
    category: "Private Classic Safaris",
    highlights: "Plenteous and Pithy East Africa, packing the best of wildlife, adventure, and primate tracking.",
    description: "Designed for travelers who want a deep, focused footprint in Uganda without long road transfers. Highly luxurious."
  },
  {
    id: "african-splendour",
    title: "African Splendour",
    duration: 17,
    price: 45100,
    category: "Private Custom Safaris",
    highlights: "The undisputed Best of East & South Africa. From Uganda's mountain forests to Cape Town.",
    description: "The ultimate cross-continental odyssey. Connect the primate havens of East Africa with the majestic luxury of South Africa's private reserves."
  },
  {
    id: "custom-safari",
    title: "Custom Safaris",
    duration: 10,
    price: 0,
    category: "Private Custom Safaris",
    highlights: "One-of-a-Kind Adventures customized perfectly around your private party in Uganda & beyond.",
    description: "Our signature elite service. Choose your dates, locations, and interests. All you do is wake up and be ready for greatness."
  },
  {
    id: "great-herds-kenya",
    title: "The Great Herds of Kenya & Tanzania",
    duration: 12,
    price: 32900,
    category: "Options & Extensions",
    highlights: "The Great Migration spectacle across Masai Mara and Serengeti plains.",
    description: "Experience the majestic thunder of millions of hooves crossing the plains, fully escorted by private Mzuri guides."
  },
  {
    id: "heart-kenya-tz",
    title: "The Heart of Kenya & Tanzania",
    duration: 11,
    price: 29500,
    category: "Classic Safaris",
    highlights: "A condensed journey highlighting Amboseli, Ngorongoro, and Lake Manyara.",
    description: "Focused view of iconic East African landmarks under the snow-capped silhouette of Mt. Kilimanjaro."
  },
  {
    id: "tz-spectacular",
    title: "Tanzania Spectacular",
    duration: 10,
    price: 27800,
    category: "Options & Extensions",
    highlights: "Ngorongoro Crater, Tarangire, and private balloon safaris over Serengeti.",
    description: "A highly visual journey into Tanzania's absolute premier ecological wonders, staying at exclusive Singita properties."
  },
  {
    id: "private-kenya",
    title: "Private Kenya Safari",
    duration: 9,
    price: 24500,
    category: "Private Classic Safaris",
    highlights: "Bespoke exploration of Samburu, Ol Pejeta, and Masai Mara with veteran private guides.",
    description: "Highly focused private safari emphasizing conservation, rhino protection, and spectacular lion dynamics."
  },
  {
    id: "jewels-sa",
    title: "Jewels of South Africa",
    duration: 12,
    price: 33800,
    category: "Options & Extensions",
    highlights: "Sabi Sands predator viewings, Cape Town wine lands, and Franschhoek.",
    description: "Indulge in high-end culinary arts, spectacular marine scenery on the Cape, and pristine private reserve game drives."
  },
  {
    id: "botswana-timeless",
    title: "Botswana Timeless Wilderness",
    duration: 10,
    price: 35900,
    category: "Options & Extensions",
    highlights: "Okavango Delta canoeing (Mokoro), Chobe River yacht cruises, and desert wildlife.",
    description: "Immersive private canvas living amidst high-density elephant habitats and pristine, crystalline channels."
  }
];

const FlagshipItineraries = [
  {
    id: "source-of-soul",
    name: "Source of the Soul",
    duration: 8,
    vibe: "Active, Fast-Paced, and Diverse Adventure",
    price: 18500,
    description: "This fast-paced, highly charged visual expedition charts the pristine waterways of the River Nile and the primal forests of primates. Ideal for the active traveler looking to taste the thrill of Uganda’s raw environments combined with spectacular mountain accommodation.",
    highlights: [
      "White water rafting on the thunderous Victoria Nile in Jinja",
      "Tracking endangered Southern White Rhinos on foot at Ziwa Sanctuary",
      "Sunset boat cruise to the base of Murchison Falls",
      "Deep-forest tracking of chimpanzees in Kibale",
      "Savannah predator tracking in Queen Elizabeth National Park"
    ],
    imageSeed: "river_nile",
    days: [
      {
        dayNumber: 1,
        title: "The Gateway of the Nile",
        description: "Arrive at Entebbe International Airport where you will be met inside the air bridge by our executive meet-and-greet team. After fast-tracked customs clearance, you are introduced to your Private Expedition Guide. Board your custom-outfitted Mzuri 4x4 Safari Land Cruiser, enjoying chilled refreshments and on-board Wi-Fi as you transfer to Jinja.",
        lodging: "The Haven Nile River Lodge (Ultra-Luxury Suite)",
        meals: "Dinner",
        activities: ["VIP Meet & Greet", "Scenic Land Cruiser transfer to Jinja", "Private sundowner cocktail"]
      },
      {
        dayNumber: 2,
        title: "Conquering the Source of the Nile",
        description: "Awake to the roar of the rapids. The morning is dedicated to a thrilling private white-water rafting excursion on the historic Victoria Nile. In the afternoon, board a private luxury displacement boat to cruise to the exact, geographic 'Source of the River Nile'.",
        lodging: "The Serena Hotel Kampala (Executive Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Private White Water Rafting", "Boat cruise to official Source of the Nile", "Private transfer to Kampala"]
      },
      {
        dayNumber: 3,
        title: "The Return of the Rhinos",
        description: "Depart Northward toward Murchison Falls. Enter the Ziwa Rhino Sanctuary for an incredibly intimate, guided on-foot trek to track endangered Southern White Rhinos.",
        lodging: "Chobe Safari Lodge (Superior Nile-Facing Room)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["On-foot Rhino Tracking in Ziwa", "Gourmet bush lunch", "Scenic drive into Murchison Falls NP"]
      },
      {
        dayNumber: 4,
        title: "The Thunderous Majesty of Murchison",
        description: "Set out at sunrise for an elite game drive across Murchison, tracking lions, giraffes, leopards, and giant herds of elephants. In the afternoon, embark on a private launch cruise up the Victoria Nile to the base of the Falls.",
        lodging: "Nile Safari Lodge (Exclusive Riverside Chalet)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Sunrise game drive with private spotter", "Private launch cruise to Murchison Falls base", "Top-of-falls hiking experience"]
      },
      {
        dayNumber: 5,
        title: "Journey to the Primate Capital",
        description: "Enjoy a leisurely morning overlooking the moving Nile. Today is a scenic overland transit to Kibale Forest National Park, climbing through rolling hills past tea estates.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Scenic Rwenzori Mountain foothills drive", "Explore Fort Portal tea estates", "Lodge check-in overlooking crater lake"]
      },
      {
        dayNumber: 6,
        title: "Encountering the Chimpanzees of Kibale",
        description: "Enter the Kibale Rainforest. Accompanied by experienced researchers, you will embark on a chimpanzee tracking expedition before exploring the adjacent Bigodi Wetland Sanctuary.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Chimpanzee Tracking with biologists", "Guided Bigodi Swamp Walk", "Community coffee roasting demonstration"]
      },
      {
        dayNumber: 7,
        title: "The Savannahs of Queen Elizabeth",
        description: "Scenic transfer south, crossing the Equator. Enter the plains of Queen Elizabeth National Park. In the late afternoon, transition into the volcanic crater lakes region for a ridge drive.",
        lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Equator Crossing ceremony", "Crater Lakes scenic ridge drive", "Sunset savannah game tracking"]
      },
      {
        dayNumber: 8,
        title: "Return to the Gateway",
        description: "An early breakfast followed by a short morning game drive, then begin our return transit toward Entebbe for international flight departures.",
        lodging: "Day Room at Hotel No.5 (Prior to flight)",
        meals: "Breakfast, Lunch",
        activities: ["Early sunrise game drive", "Farewell luxury lunch", "VIP airport lounge departure handling"]
      }
    ]
  },
  {
    id: "crown-jewel",
    name: "Crown Jewel of the Nile",
    duration: 12,
    vibe: "Immersive, Comprehensive, and Classic Ugandan Safari",
    price: 28900,
    description: "Our signature in-depth Ugandan odyssey. Designed for the traveler who wants to experience the absolute zenith of the ‘Pearl of Africa’. Featuring immersive multi-day primate stays, the majestic Nile River, high-density big-game savannahs, and the world-famous gorilla encounter.",
    highlights: [
      "In-depth wildlife tracks in Murchison Falls & Queen Elizabeth NPs",
      "Full-day Chimpanzee Habituation Experience inside Kibale Rainforest",
      "Private boat cruise along the majestic, wildlife-dense Kazinga Channel",
      "Search for tree-climbing lions in Ishasha Sector",
      "Mountain Gorilla Trekking in Bwindi Impenetrable Forest"
    ],
    imageSeed: "gorilla_bwindi",
    days: [
      {
        dayNumber: 1,
        title: "Arrival in the Pearl of Africa",
        description: "Welcome to Uganda. Touch down at Entebbe, where you will be fast-tracked through customs and met by your Private Mzuri Guide. Check into your exclusive boutique hotel in Entebbe.",
        lodging: "Hotel No. 5 (Luxury Poolside Villa)",
        meals: "Dinner",
        activities: ["VIP Meet & Greet", "Fast-track VIP customs support", "Welcome cocktail briefing"]
      },
      {
        dayNumber: 2,
        title: "The Pulse of Kampala & Historical Wonders",
        description: "Explore the historic and cultural landmarks of Uganda's capital, Kampala, including Kasubi Tombs and local organic tea tasting. Return to Entebbe.",
        lodging: "Hotel No. 5 (Luxury Poolside Villa)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Kampala Private Cultural Tour", "Kasubi Tombs private guide", "Artisanal tea tasting experience"]
      },
      {
        dayNumber: 3,
        title: "Ascend to Murchison Falls National Park",
        description: "Early transit northwards through lush countryside. Track rhinos at Ziwa on foot before reaching Murchison Falls and checking into our riverside camp.",
        lodging: "Nile Safari Lodge (Exclusive Riverside Chalet)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Ziwa Rhino tracking", "Private Nile bridge transit", "Dinner under the stars"]
      },
      {
        dayNumber: 4,
        title: "The Gorge and the Giants of Murchison",
        description: "Sunrise savannah game drive tracking lion prides and giant elephant herds. Afternoon private Nile river launch cruise, with a scenic hike to the roaring summit of the falls.",
        lodging: "Nile Safari Lodge (Exclusive Riverside Chalet)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Sunrise savannah photography track", "Private Nile boat cruise", "Elite hike to top of Murchison Falls"]
      },
      {
        dayNumber: 5,
        title: "The Fort Portal Highlands and Crater Lakes",
        description: "Travel past Lake Albert with spectacular views of the Congolese Blue Mountains. Reach Fort Portal, arriving at a luxury log-cabin lodge on a crater rim.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Great Rift Valley escarpment drive", "Fort Portal private tour", "Sunset walk around crater rim"]
      },
      {
        dayNumber: 6,
        title: "Full-Day Chimpanzee Habituation Experience",
        description: "Before dawn, accompany national park scientists inside Kibale. Follow a wild troop of chimpanzees, observing their complex tools usage, calling patterns, and social hierarchies.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full-day custom Chimpanzee Habituation permit", "Ecosystem lecture by head biologist"]
      },
      {
        dayNumber: 7,
        title: "Descent to the Equator & Queen Elizabeth",
        description: "Scenic transfer south past Fort Portal to cross the equator. Settle in Queen Elizabeth National Park with sunset crater ridge drives.",
        lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Equator Crossing ceremony", "Sunset game drive across Kasenyi plains"]
      },
      {
        dayNumber: 8,
        title: "The Majestic Kazinga Channel",
        description: "Early morning predator track. In the afternoon, enjoy a private luxury boat cruise along the Kazinga Channel, scanning dense hippos and elephants.",
        lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Kasenyi plains game drive", "Private luxury yacht cruise on the Kazinga Channel"]
      },
      {
        dayNumber: 9,
        title: "The Lions of Ishasha & Bwindi's Rainforest",
        description: "Drive south to seek out the famous tree-climbing lions of Ishasha resting in giant fig-tree branches, before climbing high into the mossy ridges of Bwindi Forest.",
        lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Track Tree-Climbing Lions in Ishasha", "High-altitude mountain forest drive to Bwindi"]
      },
      {
        dayNumber: 10,
        title: "The Gorilla Trek - A Soul-Stirring Encounter",
        description: "The life-defining day. Settle into the primordial rain forest with park rangers to locate a wild family of Mountain Gorillas. Spend one glorious, quiet hour within paces.",
        lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Private Mountain Gorilla Trekking Permit", "Post-tracking celebratory champagne at lodge"]
      },
      {
        dayNumber: 11,
        title: "The Elands and Zebras of Lake Mburo",
        description: "Descend into Lake Mburo, scanning Burchell's Zebras and giant Eland antelope. Settle into a magnificent clifftop camp, enjoying a private sunset walking safari.",
        lodging: "Mihingo Lodge (Luxury Executive Tent)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Highland-to-lowland transit", "Guided on-foot savannah walking safari", "Night game drive looking for leopards"]
      },
      {
        dayNumber: 12,
        title: "Equator Crossing & Farewell",
        description: "A final morning horseback tour or game drive. Stop at the Equator for a gourmet country farewell lunch, and transfer to Entebbe Airport for VIP departure flights.",
        lodging: "Day Room at Hotel No.5 (Prior to flight)",
        meals: "Breakfast, Lunch",
        activities: ["Equator Crossing farewell gourmand lunch", "VIP Entebbe Airport fast-track lounge access"]
      }
    ]
  },
  {
    id: "reflections",
    name: "Reflections of Uganda",
    duration: 11,
    vibe: "Deeply Cultural, Scenic, and Reflective Primal Safari",
    price: 24200,
    description: "An incredibly styled itinerary incorporating Uganda's most remote geographical wonders, including the semi-arid mountain wilderness of Kidepo Valley and the beautiful, glassy waters of Lake Bunyonyi. Perfect for those who seek isolation, deep community storytelling, and untouched nature.",
    highlights: [
      "Charter flight to Kidepo Valley, East Africa's most pristine wilderness",
      "Authentic cultural engagement with the semi-nomadic Karamojong",
      "Expansive wildlife trackers in the spectacular Narus Valley",
      "Gorilla trek in Bwindi's ancient forest",
      "Peaceful canoeing on the islands of Lake Bunyonyi"
    ],
    imageSeed: "kidepo_valley",
    days: [
      {
        dayNumber: 1,
        title: "Arrival and Lakeside Rest",
        description: "Touch down at Entebbe, where you are checked in and transferred to a quiet luxury resort by Lake Victoria. Dine looking over the glassy lake.",
        lodging: "Hotel No. 5 (Executive Suite)",
        meals: "Dinner",
        activities: ["VIP Meet & Greet", "Fast-track VIP handling", "Lakeside dining"]
      },
      { dayNumber: 2, title: "Flight to the Lost Valley - Kidepo", description: "Board a private Mzuri executive charter flight from Entebbe directly to Kidepo Valley. Track immense herds of buffalo in Narus Valley.", lodging: "Apoka Safari Lodge (Executive Suite)", meals: "Breakfast, Lunch, Dinner", activities: ["Private air charter flight to Kidepo", "Sunset game drive", "Stargazing fire circle"] },
      { dayNumber: 3, title: "The Karamojong warriors", description: "Climb into the Morungole ranges. Spend a privileged day interacting with the IK people, and meet the Karamojong warriors in traditional homestead manyattas.", lodging: "Apoka Safari Lodge (Executive Suite)", meals: "Breakfast, Lunch, Dinner", activities: ["IK Mountain Tribe cultural walk", "Karamojong homestead visit"] },
      { dayNumber: 4, title: "Transfer to Murchison's Rapid Shorelines", description: "Scenic morning track in Kidepo before flying to Chobe air strip, stepping directly into our riverside luxury retreat.", lodging: "Chobe Safari Lodge (Presidents River Suite)", meals: "Breakfast, Lunch, Dinner", activities: ["Charter flight to Murchison Falls", "Private lakeside cocktail", "White-water rapids dining"] },
      { dayNumber: 5, title: "The Delta Nile Cruise", description: "Board an elite small-deck boat to search for the prehistoric, rare Shoebill Stork where the Nile empties into Lake Albert.", lodging: "Nile Safari Lodge (Exclusive Riverside Chalet)", meals: "Breakfast, Lunch, Dinner", activities: ["Nile Shoebill Delta private cruise", "Nile Delta game tracking", "Spa treatments"] },
      { dayNumber: 6, title: "Drive to Fort Portal Foothills", description: "Travel past Lake Albert escarpments to the colonial tea gardens of Fort Portal town. Settle overlooking our volcanic crater lake.", lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)", meals: "Breakfast, Lunch, Dinner", activities: ["Great Rift Valley escarpment drive", "Fort Portal exploration", "Sunset walk around crater rim"] },
      { dayNumber: 7, title: "Chimpanzee Track & NGO Visits", description: "Track chimps in Kibale, then interact with school classrooms and projects sponsored by our Mzuri corporate foundations.", lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)", meals: "Breakfast, Lunch, Dinner", activities: ["Kibale Chimpanzee tracking", "Mzuri Foundation village project tour", "Traditional hand-drip coffee processing"] },
      { dayNumber: 8, title: "Queen Elizabeth's Exploded Ridges", description: "Transfer south across the Equator line, navigating the volcanic crater loop containing ancient peaks and expansive valleys.", lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Equator Crossing ceremony", "Crater Lakes scenic ridge drive", "Predator savannah game drive"] },
      { dayNumber: 9, title: "The Great Savannah Tracks", description: "Comprehensive Kasenyi plains game drive, followed by a private Kazinga Channel boat cruise with fine wine selections.", lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Kasenyi plains game drive", "Kazinga Channel luxury yacht cruise"] },
      { dayNumber: 10, title: "The Terraced Hills of Bunyonyi", description: "Climb past the green terraced Kigezi Highlands to Lake Bunyonyi, hopping in a hand-hewn canoe to watch mist roll past the volcanic islands.", lodging: "Lost Paradise Resort (Presidential Lakeside Suite)", meals: "Breakfast, Lunch, Dinner", activities: ["Highland scenic drive", "Private sunset canoe excursions to islands", "Lake-side fine dining bonfire"] },
      { dayNumber: 11, title: "Return Flight & Farewell", description: "Lakeside sunrise breakfast, then a short drive to Kisoro airstrip to fly directly back to Entebbe Airport for departure home.", lodging: "Day Room at Hotel No.5 (Prior to flight)", meals: "Breakfast, Lunch", activities: ["Scenic flight Kisoro to Entebbe", "VIP Fast Track airport services", "Farewell champagne toast"] }
    ]
  },
  {
    id: "jambo-east-africa",
    name: "Jambo East Africa",
    duration: 14,
    vibe: "Broad, Epic, Cross-Border Multi-Country Luxury Expedition",
    price: 36800,
    description: "The ultimate East African masterpiece, charting four legendary countries. From the endless acacia savannahs of Masai Mara and the Serengeti, to the dramatic volcanic craters of Ngorongoro, the cultural reflections of Kigali, and the majestic gorilla sanctuaries of Rwanda and Uganda.",
    highlights: [
      "Track the Great Migration lions and cheetahs in Masai Mara, Kenya",
      "Private aerial hot air balloon flight over Serengeti plains, Tanzania",
      "Descend into Ngorongoro Crater, the ancient self-contained volcano caldera",
      "Highly reflective and private tour of clean, modern Kigali, Rwanda",
      "Double gorilla tracks in Volcanoes National Park & Bwindi"
    ],
    imageSeed: "masai_mara",
    days: [
      { dayNumber: 1, title: "Jambo Kenya - Nairobi Welcome", description: "Settle into Nairobi, Kenya with VIP meet and greets and your private butler. Prepare for your expedition over organic dining.", lodging: "Hemingways Nairobi (Bespoke Luxury Suite)", meals: "Dinner", activities: ["VIP Meet & Greet", "Fast-track customs support", "Welcome cocktail briefing"] },
      { dayNumber: 2, title: "Nairobi's Giraffes & Sheldrick Trust", description: "Feed endangered Rothschild's giraffes, visit orphan baby elephants, and take a light flight to the Masai Mara.", lodging: "Angama Mara (Luxury Tent style)", meals: "Breakfast, Lunch, Dinner", activities: ["Private Giraffe Centre experience", "Sheldrick Wildlife Trust private visit", "Scheduled flight to Masai Mara"] },
      { dayNumber: 3, title: "Masai Mara's Golden Predators", description: "Full-day predator safaris tracking large lion prides, leopards, Cheetah coalitions, and massive river crossings.", lodging: "Angama Mara (Luxury Tent style)", meals: "Breakfast, Lunch, Dinner", activities: ["Sunrise Mara game drive", "Bush breakfast under acacia trees", "Sunset predator tracking"] },
      { dayNumber: 4, title: "Mara Balloon Safari", description: "Float silently in a hot air balloon over millions of hooves, enjoying a bush champagne landing and traditional Masai village visits.", lodging: "Angama Mara (Luxury Tent style)", meals: "Breakfast, Lunch, Dinner", activities: ["Sunrise Hot Air Balloon Safari", "Private Maasai Manyatta community encounter"] },
      { dayNumber: 5, title: "Fly to Serengeti, Tanzania", description: "Board your private flight, skipping road borders, straight to Serengeti's endless grasslands to sleep in ultimate vintage tents.", lodging: "Singita Sasakwa Lodge (Luxury Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Cross-border flight Mara to Serengeti", "Serengeti sunset savannah game tracking"] },
      { dayNumber: 6, title: "The Shifting Seas of Grass", description: "Track cheetah coalitions and migrating herds, dining on premium wines and prime cuts around the logs circle.", lodging: "Singita Sasakwa Lodge (Luxury Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Full day Serengeti predator tracking", "Sunrise photography instruction"] },
      { dayNumber: 7, title: "Serengeti Pools & Spa Interludes", description: "Sip wine in a historic private vaulted cellar, and enjoy pool-side standard spa rituals during the hot hours.", lodging: "Singita Sasakwa Lodge (Luxury Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Serengeti game drive", "In-camp luxury spa treatment", "Vintage wine cellar tasting"] },
      { dayNumber: 8, title: "Descent to Ngorongoro Crater Rim", description: "Climb past Acacia hills to reach the crater rim, staying on the sheer mountain cliffs of the ancient volcanic caldera.", lodging: "Ngorongoro Crater Lodge (Executive Suite)", meals: "Breakfast, Lunch, Dinner", activities: ["Scenic escarpment drive", "Guided rim-walk with Maasai warrior", "Fine dining on the crater edge"] },
      { dayNumber: 9, title: "Inside the Lost Volcano Ecosystem", description: "Descend 600 meters to tour the dense grasslands mapping black rhinos, predators, and picnic near hippo pools.", lodging: "Ngorongoro Crater Lodge (Executive Suite)", meals: "Breakfast, Lunch, Dinner", activities: ["Ngorongoro Crater floor game drive", "Gourmet hot picnic under yellow-fever acacias"] },
      { dayNumber: 10, title: "Kigali Renaissance, Rwanda", description: "Charter flight to Rwanda’s clean capital, visiting Genocide Memorial monuments and dining on classical French-Rwandan courses.", lodging: "The Retreat by Heaven (Luxury Suite)", meals: "Breakfast, Lunch, Dinner", activities: ["Charter flight Serengeti to Kigali", "Private Kigali Genocide Memorial tour", "Fine dining custom gourmet dinner"] },
      { dayNumber: 11, title: "Climb to Volcanoes National Park", description: "Climb higher to Volcanoes National Park bamboo forest, settling into One&Only’s ultimate modern treehouses.", lodging: "One&Only Gorilla's Nest (Luxury Jungle Lodge)", meals: "Breakfast, Lunch, Dinner", activities: ["Scenic drive to Volcanoes National Park", "Primate conservation private lecture"] },
      { dayNumber: 12, title: "Golden Monkeys of the Volcanoes", description: "Track playful, shimmering golden monkeys moving through the high bamboo forests, back for massage treatments.", lodging: "One&Only Gorilla's Nest (Luxury Jungle Lodge)", meals: "Breakfast, Lunch, Dinner", activities: ["Private Golden Monkey tracking trek", "Eucalyptus forest spa treatment"] },
      { dayNumber: 13, title: "The Mountain Gorilla Trek", description: "The definitive primate encounter. Track mountain gorillas in deep volcanic ridges, lock eyes with a giant silverback.", lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Mountain Gorilla tracking trek", "Post-trek celebratory drinks", "Private dining under starry canopy"] },
      { dayNumber: 14, title: "Seamless Return and Flight Home", description: "Board mountain charter back to Entebbe Gateway, using our airport executive VIP lounge to connect internationally.", lodging: "Day Room at Hotel No.5 (Prior to flight)", meals: "Breakfast, Lunch", activities: ["Scheduled mountain-flight Kisoro to Entebbe", "VIP lounge boarding handling"] }
    ]
  },
  {
    id: "primate-trailblazer",
    name: "The Primate Trailblazer",
    duration: 7,
    vibe: "Intense, Focused Primate Encounters for Enthusiasts & Photographers",
    price: 16900,
    description: "Built strictly around high-intensity, face-to-face encounters with chimpanzees and mountain gorillas. This fast-paced, highly charged visual expedition features extended primate habituation permits, expert photographic advice, and flawless logistics.",
    highlights: [
      "Full-day Chimpanzee Habituation Experience (CHEX) in Kibale",
      "Mountain Gorilla Tracking in the primordial mist of Bwindi Forest",
      "Interactive trail with indigenous Batwa community",
      "Breathtaking mountain crater ridge drives",
      "Scenic domestic flight back to Entebbe"
    ],
    imageSeed: "chimp_kibale",
    days: [
      { dayNumber: 1, title: "Arrival at Entebbe Gateway", description: "Fast-tracked VIP flight reception, checked in at quiet poolside villas overlooks Entebbe.", lodging: "Hotel No. 5 (Executive Suite)", meals: "Dinner", activities: ["VIP Meet & Greet", "Fast-track VIP handling", "Lakeside dining"] },
      { dayNumber: 2, title: "Kibale Primate Foothills", description: "Drive West past Fort Portal tea gardens, climbing onto crater ridges before settling in a rain-canopy log lodge.", lodging: "Kyaninga Lodge (Luxury elevated log cabin)", meals: "Breakfast, Lunch, Dinner", activities: ["Scenic highlands transfer to Kibale", "Explore Fort Portal tea holdings", "Sunset lodge cocktail"] },
      { dayNumber: 3, title: "Full-Day Chimpanzee Habituation", description: "Follow a wild chimpanzee group as they descend, forage, socialise, and nest, guided by research biologists.", lodging: "Kyaninga Lodge (Luxury elevated log cabin)", meals: "Breakfast, Lunch, Dinner", activities: ["Full-day Chimpanzee Habituation", "Guided Bigodi Swamp Walk"] },
      { dayNumber: 4, title: "Scenic Ascent to Bwindi Cloud Forest", description: "Travel South past open game savannahs, climbing high-elevation ridges into the gorilla mists of Bwindi.", lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Scenic escarpment mountain drive", "Lodge arrival in mountain-mist Bwindi", "Private fireplace styling"] },
      { dayNumber: 5, title: "The Mountain Gorilla Encounter", description: "Slice through vines with specialist trackers to find wild Mountain Gorillas, spending one silent, life-changing hour.", lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Mountain Gorilla tracking permit", "Celebrated gourmet five-course lodge dinner"] },
      { dayNumber: 6, title: "The Ancient Batwa Forest Trails", description: "Traverse forest paths with the Batwa pygmy hunters, learning ancient gatherer wisdom, medicine herbs, and song.", lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)", meals: "Breakfast, Lunch, Dinner", activities: ["Batwa cultural forest trail", "Exclusive private lecture on gorilla health"] },
      { dayNumber: 7, title: "Mountain Flight to Gateway", description: "Scenic flight from Kisoro airstrip over lake peaks back to Entebbe. Retain VIP lounges prior to departure home.", lodging: "Day Room at Hotel No.5 (Prior to flight)", meals: "Breakfast, Lunch", activities: ["Scenic flight Kisoro to Entebbe", "VIP Lounge fast-track departure"] }
    ]
  }
];

const LodgesData = [
  {
    id: "clouds-gorilla",
    name: "Clouds Mountain Gorilla Lodge",
    location: "Southern Bwindi Impenetrable NP",
    country: "Uganda",
    description: "Perched at an incredible 2,100 meters, Clouds is Uganda's highest lodge, looks directly over misty hills. Features soaring ceilings, Obsidian stone architecture, internal fireplaces, original Ugandan fine art, and private dedicated butlers.",
    amenities: ["Private dedicated personal butler", "Double stone fireplaces", "In-villa massage spa", "Forest-view veranda balcony", "Private bar and fine wine list"],
    partnerTier: "Ultra-Classic Luxury Primate Lodge",
    imageSeed: "clouds_lodge"
  },
  {
    id: "nile-safari",
    name: "Nile Safari Lodge",
    location: "Murchison Falls National Park",
    country: "Uganda",
    description: "Built with standard local timber and stone, the luxurious riverside chalets sit over Nile banks. Features outdoor monsoon showers, private plunge pools on suspended wooden decks, and glass walls pulling in elements.",
    amenities: ["Private riverside infinity plunge pool", "Outdoor jungle monsoon shower", "Dedicated guide & tracker", "Private wooden sunset deck", "Eco-friendly natural cooling design"],
    partnerTier: "Premium Riverside Sanctuary",
    imageSeed: "nile_safari_lodge"
  },
  {
    id: "chobe-safari",
    name: "Chobe Safari Lodge",
    location: "Northern Murchison Falls NP",
    country: "Uganda",
    description: "Located on the sweeping rapids of Northern Murchison. Offers a three-level swimming pool, private corporate charter runways, health clubs, and elite presidential units overlooking hippo schools.",
    amenities: ["Three-tier panoramic swimming pool", "Private private charter airfield", "State-of-the-art health club & spa", "Elevated river-view executive dining", "Sunset fishing and birding deck"],
    partnerTier: "Elite Savannah Oasis",
    imageSeed: "chobe_lodge"
  },
  {
    id: "paramount-properties",
    name: "Paramount Properties",
    location: "Entebbe, Kampala & National Parks",
    country: "Uganda",
    description: "Bespoke network of urban boutique estates, guaranteeing clinical climate controls, elite clinical linens, and 24/7 localized fast-tracked executive security protocols.",
    amenities: ["Bespoke fast-track airport concierge", "High-speed encrypted fiber internet", "Twenty-four-seven armed executive security", "Customized internal dining menus", "Private business lounges"],
    partnerTier: "Executive City Concierge",
    imageSeed: "paramount_estates"
  },
  {
    id: "one-only-gorillas-nest",
    name: "One&Only Gorilla’s Nest",
    location: "Volcanoes National Park",
    country: "Rwanda",
    description: "Suspended in ancient eucalyptus trees, modern treehouse suites offer luxury firepits, standalone glass-room tubs, and elite forest views under Virunga ranges.",
    amenities: ["Eucalyptus forest suspension spa", "Outdoor lava rock shower & hot tub", "Artisanal coffee tasting lounge", "Infinity swimming pool heated", "Private golf carts for inner-transit"],
    partnerTier: "Ultra-Premium Luxury Primate Retreat",
    imageSeed: "gorillas_nest"
  },
  {
    id: "wilderness-safaris-camps",
    name: "Wilderness Safaris Camps",
    location: "Akagera, Volcanoes & Reserves",
    country: "Rwanda",
    description: "Represents absolute low-impact green science. Experience volcanic cone suites, research-led mountain tracks, and beautiful high-altitude local culinary menus.",
    amenities: ["Science-led conservation tracking guide", "Award-winning volcanic nested architecture", "Organic sustainable farm-to-table cuisine", "Personal wine cellars", "Private viewing optical scopes"],
    partnerTier: "Premier Conservation Camps",
    imageSeed: "wilderness_camp"
  },
  {
    id: "lemala-luxury-camps",
    name: "Lemala Luxury Camps",
    location: "Serengeti & Ngorongoro",
    country: "Tanzania",
    description: "Classic romantic vintage canvas living. Copper rolltop bathtubs, persian rugs, private butlers, and open log fires underneath the Southern skies.",
    amenities: ["Vintage copper rolltop bathtubs", "Persian rug-laden canvas suites", "Private butler & bush dining setups", "Safari library & whiskey lounge", "Night game viewing devices"],
    partnerTier: "Premium Classic Canvas Camps",
    imageSeed: "lemala_camp"
  },
  {
    id: "singita-properties",
    name: "Singita Luxury Reserves",
    location: "Serengeti & Masai Mara",
    country: "Tanzania",
    description: "The absolute global benchmark for ultra-luxury safari tourism. Stately stone estates, highly professional guide tracking fleets, multi-course dine, and vintage vaulted cellars.",
    amenities: ["Award-winning private wine reserve", "Private wellness spa & tennis arenas", "Professional-grade photography studio", "Gourmet multi-course visual dining", "Private game vehicles & trackers"],
    partnerTier: "Ultra-Bespoke Global Sovereign Tier",
    imageSeed: "singita_sasakwa"
  }
];

// App State Management
let activeTab = 'home';
let selectedItineraryId = 'source-of-soul';
let activeDestinationId = 'uganda';

// Planner Form State
let plannerStep = 1;
let plannerForm = {
  destinations: [],
  duration: '10-14',
  partySize: '2',
  interests: [],
  lodgingPrestige: 'elite',
  name: '',
  email: '',
  phone: '',
  timeframe: 'Late 2026',
  notes: ''
};

// Filters Setup
let catalogCategory = 'All';
let catalogQuery = '';
let selectedLodgeCountry = 'All';
let faqCategory = 'planning';
let faqQuery = '';

// Main Setup Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Check Query String parameters on startup (smooth routing)
  handleInitialUrlParams();
  
  // Render Dynamic Elements
  renderDestinationsList();
  renderCatalog();
  renderLodges();
  renderFaqList();
  renderItineraryDetails();

  // Attach Event Handlers
  setupFormHandlers();
  
  // Initialize Lucide Icons initially
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

function handleInitialUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  const id = params.get('id');
  if (page) {
    activeTab = page;
    if (id) {
      if (page === 'itinerary-detail') {
        selectedItineraryId = id;
      } else if (page === 'destinations') {
        activeDestinationId = id;
      }
    }
  } else {
    // Check URL HASH as fallback
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const parts = hash.split('?');
      if (parts[0]) activeTab = parts[0];
    }
  }
  navigateTo(activeTab, null, false);
}

// Global Tab switcher
function navigateTo(tabId, paramId = null, pushToHistory = true) {
  activeTab = tabId;
  
  // Close mobile menu if open
  closeMobileMenu();

  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update dynamic content parameters
  if (paramId) {
    if (tabId === 'itinerary-detail') {
      selectedItineraryId = paramId;
      renderItineraryDetails();
    } else if (tabId === 'destinations') {
      activeDestinationId = paramId;
      renderDestinationsList();
    }
  }

  // Hide all screens
  document.querySelectorAll('.app-screen').forEach(el => {
    el.classList.add('hidden');
  });

  // Show selected screen
  const targetScreen = document.getElementById(`screen-${tabId}`);
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
  }

  // Update active states on nav items (Desktop and Mobile lists)
  document.querySelectorAll('.nav-link').forEach(el => {
    const linkTab = el.getAttribute('data-tab');
    if (linkTab === tabId) {
      el.classList.add('text-gold-600', 'border-b-2', 'border-gold-600');
      el.classList.remove('text-stone-600', 'border-transparent');
    } else {
      el.classList.remove('text-gold-600', 'border-b-2', 'border-gold-600');
      el.classList.add('text-stone-600', 'border-transparent');
    }
  });

  // Synchronize browser history elegantly without full-page reloads
  if (pushToHistory && typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('page', tabId);
    if (paramId) {
      url.searchParams.set('id', paramId);
    } else if (tabId === 'itinerary-detail') {
      url.searchParams.set('id', selectedItineraryId);
    } else {
      url.searchParams.delete('id');
    }
    window.history.pushState({}, '', url.toString());
  }

  // Re-generate Lucide vector graphic shapes if any new dynamic screens load
  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, 50);
}

// Mobile Responsive Menu Controls
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-drawer');
  if (menu) {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-drawer');
  if (menu) {
    menu.classList.add('hidden');
  }
}

// Destinations screen renderer
function renderDestinationsList() {
  const destinationSelectContainer = document.getElementById('destination-tabs-container');
  const detailsContainer = document.getElementById('destination-details-column');

  if (!destinationSelectContainer || !detailsContainer) return;

  // 1. Render Tabs headers
  destinationSelectContainer.innerHTML = DestinationsData.map(dest => {
    const isSelected = dest.id === activeDestinationId;
    return `
      <div 
        onclick="selectDestinationTab('${dest.id}')"
        class="cursor-pointer p-5 rounded-2xl border transition-all duration-350 text-left ${
          isSelected 
            ? 'bg-stone-950 border-stone-950 text-white shadow-md transform translate-x-1' 
            : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-900'
        }"
      >
        <div class="font-serif text-lg font-bold">${dest.name}</div>
        <div class="text-[10px] uppercase font-mono tracking-widest mt-1 ${isSelected ? 'text-gold-400' : 'text-gold-600'}">${dest.country}</div>
      </div>
    `;
  }).join('');

  // 2. Render Active Detailed Profile
  const dest = DestinationsData.find(d => d.id === activeDestinationId);
  if (dest) {
    detailsContainer.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-[fadeIn_0.5s_ease]">
        <!-- Visual Presentational Column -->
        <div class="lg:col-span-5 space-y-4">
          <div class="relative h-96 rounded-3xl overflow-hidden shadow-md border border-stone-200">
            <img 
              src="${getSafariImage(dest.imageSeed)}" 
              alt="${dest.name}" 
              class="w-full h-full object-cover"
              referrerpolicy="no-referrer"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent"></div>
          </div>
          <div class="bg-gold-50 border border-gold-150 p-6 rounded-2xl space-y-2">
            <p class="font-mono text-[10px] text-gold-700 uppercase tracking-widest font-bold">Vantage Fact</p>
            <p class="text-xs text-stone-700 leading-relaxed italic">All private transport inside ${dest.name} is conducted using long-wheelbase custom 4x4 Land Cruisers complete with individual window positions, cooled beverage systems, binoculars, and charging power grids.</p>
          </div>
        </div>

        <!-- Description Paragraph Elements -->
        <div class="lg:col-span-7 space-y-6">
          <div class="space-y-1">
            <h3 class="font-serif text-3xl font-black text-stone-950 leading-tight">${dest.name} Highlights</h3>
            <p class="text-xs font-mono text-gold-600 uppercase tracking-widest">${dest.country}</p>
          </div>

          <p class="text-sm text-stone-600 leading-relaxed">${dest.description}</p>

          <div class="space-y-3">
            <h4 class="font-serif text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-150 pb-2">The Marvels We Encounter</h4>
            <ul class="space-y-3">
              ${dest.highlights.map(hl => `
                <li class="flex items-start gap-2.5 text-xs text-stone-700">
                  <i data-lucide="sparkles" class="w-4 h-4 text-gold-500 shrink-0 mt-0.5"></i>
                  <span>${hl}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="pt-4 flex flex-wrap gap-4">
            <div 
              onclick="navigateTo('planner')" 
              class="px-6 py-3.5 bg-stone-950 hover:bg-gold-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all-custom cursor-pointer"
            >
              Plan Private ${dest.name} Trip
            </div>
            <div 
              onclick="navigateTo('catalog')" 
              class="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 text-xs font-bold uppercase tracking-widest rounded-xl transition-all-custom cursor-pointer"
            >
              View Available Catalog
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function selectDestinationTab(id) {
  activeDestinationId = id;
  renderDestinationsList();
}

// Catalog filtering and rendering
function renderCatalog() {
  const container = document.getElementById('catalog-items-grid');
  if (!container) return;

  // Apply inputs and filters
  const filtered = CatalogItems.filter(item => {
    const matchesCategory = catalogCategory === 'All' || item.category === catalogCategory;
    const matchesQuery = item.title.toLowerCase().includes(catalogQuery.toLowerCase()) || 
                         item.highlights.toLowerCase().includes(catalogQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(catalogQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Render Category Tabs state styling
  document.querySelectorAll('.catalog-tab-btn').forEach(btn => {
    const btnCat = btn.getAttribute('data-category');
    if (btnCat === catalogCategory) {
      btn.className = "catalog-tab-btn px-4 py-2 text-xs font-bold uppercase tracking-widest bg-stone-950 text-white rounded-lg cursor-pointer transition-all";
    } else {
      btn.className = "catalog-tab-btn px-4 py-2 text-xs font-bold uppercase tracking-widest bg-white text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg cursor-pointer transition-all";
    }
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-stone-400 space-y-2">
        <i data-lucide="search" class="w-10 h-10 mx-auto opacity-35"></i>
        <p class="text-sm font-mono">No customized safaris found matching your input.</p>
        <button onclick="clearCatalogFilters()" class="text-xs text-gold-600 underline">Clear Search Filters</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="bg-white border border-stone-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div class="space-y-4">
        <div class="flex justify-between items-start gap-2">
          <div>
            <span class="inline-block text-[8px] font-mono font-bold px-2 py-1 bg-gold-100 text-gold-700 rounded-md uppercase tracking-wider mb-2">${item.category}</span>
            <h3 class="font-serif text-xl font-bold text-stone-950 leading-snug">${item.title}</h3>
          </div>
          <div class="text-right shrink-0">
            <div class="font-mono text-xs text-stone-500">${item.duration} Days</div>
          </div>
        </div>
        <p class="text-xs font-medium text-gold-600 italic font-mono">${item.highlights}</p>
        <p class="text-xs text-stone-500 leading-relaxed line-clamp-3">${item.description}</p>
      </div>

      <div class="border-t border-stone-100 pt-4 mt-6 flex justify-between items-center">
        <div>
          <span class="block text-[8px] font-mono text-stone-400 uppercase tracking-widest">Est. Luxury Tier Pricing</span>
          <span class="font-mono text-sm font-bold text-stone-900">${item.price > 0 ? `$${item.price.toLocaleString()} +` : 'By Proposal'}</span>
        </div>
        <div class="flex gap-2">
          ${item.price > 0 ? `
            <div 
              onclick="navigateTo('itinerary-detail', 'source-of-soul')" 
              class="px-3.5 py-2 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-[10px] font-bold uppercase tracking-widest text-stone-900 rounded-lg cursor-pointer transition-all"
            >
              Details
            </div>
          ` : ''}
          <div 
            onclick="navigateTo('planner')" 
            class="px-3.5 py-2 bg-stone-950 hover:bg-gold-600 text-[10px] font-bold uppercase tracking-widest text-white rounded-lg cursor-pointer transition-all"
          >
            Inquire
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Catalog filter attachments
function setCatalogCategory(cat) {
  catalogCategory = cat;
  renderCatalog();
}

function handleCatalogInput(val) {
  catalogQuery = val;
  renderCatalog();
}

function clearCatalogFilters() {
  catalogCategory = 'All';
  catalogQuery = '';
  const inputEl = document.getElementById('catalog-search-input');
  if (inputEl) inputEl.value = '';
  renderCatalog();
}

// Lodges Lists and Filter
function renderLodges() {
  const container = document.getElementById('lodges-grid');
  if (!container) return;

  const filtered = LodgesData.filter(lodge => {
    return selectedLodgeCountry === 'All' || lodge.country === selectedLodgeCountry;
  });

  // Render tabs styling
  document.querySelectorAll('.lodge-tab-btn').forEach(btn => {
    const btnCountry = btn.getAttribute('data-country');
    if (btnCountry === selectedLodgeCountry) {
      btn.className = "lodge-tab-btn px-4 py-2 text-xs font-bold uppercase tracking-widest bg-stone-950 text-white rounded-lg cursor-pointer transition-all";
    } else {
      btn.className = "lodge-tab-btn px-4 py-2 text-xs font-bold uppercase tracking-widest bg-white text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg cursor-pointer transition-all";
    }
  });

  container.innerHTML = filtered.map(lodge => `
    <div class="bg-white border border-stone-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div class="relative h-72 sm:h-80 overflow-hidden">
        <img 
          src="${getSafariImage(lodge.imageSeed)}" 
          alt="${lodge.name}" 
          class="w-full h-full object-cover"
          referrerpolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-2.5 py-1 bg-stone-950/80 backdrop-blur-sm text-gold-400 font-mono text-[9px] uppercase tracking-wider border border-gold-900/30 rounded-md">
            ${lodge.partnerTier}
          </span>
        </div>
        <div class="absolute bottom-4 left-4 right-4 text-white">
          <p class="text-[9px] uppercase font-mono tracking-widest text-gold-400 font-bold mb-1">${lodge.location}</p>
          <h3 class="font-serif text-xl sm:text-2xl font-bold leading-tight">${lodge.name}</h3>
        </div>
      </div>

      <div class="p-6 space-y-4">
        <p class="text-xs text-stone-600 leading-relaxed">${lodge.description}</p>
        
        <div class="space-y-2 pt-2 border-t border-stone-100">
          <div class="text-[10px] font-mono font-bold uppercase text-stone-400 tracking-wider">Premium Suite Amenities:</div>
          <div class="flex flex-wrap gap-1.5">
            ${lodge.amenities.map(am => `
              <span class="text-[9px] font-mono px-2 py-1 bg-stone-50 text-stone-600 border border-stone-150 rounded-md flex items-center gap-1">
                <i data-lucide="award" class="w-2.5 h-2.5 text-gold-500"></i>
                ${am}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 flex gap-3">
          <div 
            onclick="navigateTo('planner')" 
            class="w-full text-center px-4 py-3 bg-stone-950 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer"
          >
            Enquire Partner Rate
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setLodgeCountry(country) {
  selectedLodgeCountry = country;
  renderLodges();
}

// FAQ Accordion Controls
function renderFaqList() {
  const container = document.getElementById('faqs-categories-list');
  if (!container) return;

  const activeCategory = FAQs[faqCategory];
  if (!activeCategory) return;

  // Category sidebar tabs styling
  document.querySelectorAll('.faq-cat-btn').forEach(btn => {
    const btnCat = btn.getAttribute('data-cat');
    if (btnCat === faqCategory) {
      btn.className = "faq-cat-btn cursor-pointer p-4 rounded-xl text-left border bg-stone-950 border-stone-950 text-white shadow-md transition-all duration-200";
    } else {
      btn.className = "faq-cat-btn cursor-pointer p-4 rounded-xl text-left border bg-white hover:bg-stone-50 border-stone-200 text-stone-900 transition-all duration-200";
    }
  });

  // Filter items if search query is present
  const itemsToRender = activeCategory.items.filter(item => {
    if (!faqQuery) return true;
    return item.question.toLowerCase().includes(faqQuery.toLowerCase()) || 
           item.answer.toLowerCase().includes(faqQuery.toLowerCase());
  });

  // Compile Header details
  let html = `
    <div class="bg-gold-50/50 p-6 rounded-2xl border border-gold-150 mb-6 space-y-1">
      <h3 class="font-serif text-lg font-bold text-stone-900">${activeCategory.title}</h3>
      <p class="text-xs text-stone-600 leading-relaxed">${activeCategory.description}</p>
    </div>
  `;

  if (itemsToRender.length === 0) {
    html += `
      <div class="py-12 text-center text-stone-400 space-y-1">
        <i data-lucide="help-circle" class="w-8 h-8 mx-auto opacity-30"></i>
        <p class="text-xs font-mono">No matching FAQs. Try altering your keywords.</p>
      </div>
    `;
    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Compile Question Accordions
  html += `
    <div class="space-y-4">
      ${itemsToRender.map((item, idx) => {
        const uniqueId = `faq-${faqCategory}-${idx}`;
        return `
          <div class="border border-stone-200 rounded-xl bg-white overflow-hidden shadow-sm">
            <button 
              onclick="toggleFaqAccordion('${uniqueId}')"
              class="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-stone-50/50 transition-colors cursor-pointer"
            >
              <span class="font-serif text-sm font-semibold text-stone-950 leading-snug">${item.question}</span>
              <span id="faq-chevron-${uniqueId}" class="shrink-0 transition-transform duration-300">
                <i data-lucide="chevron-down" class="w-4 h-4 text-gold-500"></i>
              </span>
            </button>
            <div id="faq-answer-${uniqueId}" class="faq-answer-container">
              <div class="p-5 pt-0 border-t border-stone-100 text-xs text-stone-600 leading-relaxed space-y-2">
                <p>${item.answer}</p>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.innerHTML = html;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setFaqCategory(cat) {
  faqCategory = cat;
  renderFaqList();
}

function handleFaqSearch(val) {
  faqQuery = val;
  renderFaqList();
}

function toggleFaqAccordion(elId) {
  const answerEl = document.getElementById(`faq-answer-${elId}`);
  const chevronEl = document.getElementById(`faq-chevron-${elId}`);

  if (!answerEl || !chevronEl) return;

  const isExpanded = answerEl.classList.contains('expanded');

  // Collapse other active FAQs to keep it pristine
  document.querySelectorAll('.faq-answer-container').forEach(el => {
    el.classList.remove('expanded');
  });
  document.querySelectorAll('[id^="faq-chevron-"]').forEach(el => {
    el.style.transform = 'rotate(0deg)';
  });

  if (!isExpanded) {
    answerEl.classList.add('expanded');
    chevronEl.style.transform = 'rotate(180deg)';
  } else {
    answerEl.classList.remove('expanded');
    chevronEl.style.transform = 'rotate(0deg)';
  }
}

// Render dynamic day-by-day Itinerary Detail Screen
function renderItineraryDetails() {
  const itinerary = FlagshipItineraries.find(it => it.id === selectedItineraryId);
  const detailsColumns = document.getElementById('itinerary-detail-content');

  if (!itinerary || !detailsColumns) return;

  let highlightItemsHtml = itinerary.highlights.map(hl => `
    <li class="flex items-start gap-2 text-xs text-stone-700">
      <i data-lucide="check" class="w-4 h-4 text-gold-500 shrink-0 mt-0.5"></i>
      <span>${hl}</span>
    </li>
  `).join('');

  let dayPlansHtml = itinerary.days.map(day => `
    <div class="relative pl-8 pb-8 border-l border-stone-200 last:border-transparent last:pb-0">
      <!-- Day indicator node -->
      <div class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-stone-950 border-4 border-white text-white flex items-center justify-center font-mono text-[9px] font-bold shadow-md">
        ${day.dayNumber}
      </div>

      <div class="bg-white border border-stone-150 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4">
        <div class="space-y-1">
          <div class="text-[9px] uppercase font-mono tracking-widest text-gold-600 font-bold">Day ${day.dayNumber} of ${itinerary.duration}</div>
          <h4 class="font-serif text-lg font-bold text-stone-900">${day.title}</h4>
        </div>
        
        <p class="text-xs text-stone-600 leading-relaxed">${day.description}</p>

        <!-- Activities tags -->
        <div class="flex flex-wrap gap-1.5">
          ${day.activities.map(act => `
            <span class="text-[9px] font-mono px-2 py-0.5 bg-stone-50 text-stone-600 border border-stone-150 rounded-md">
              ${act}
            </span>
          `).join('')}
        </div>

        <!-- Accommodations meta -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-stone-100 text-[10px] font-mono">
          <div class="flex items-center gap-2 text-stone-600">
            <i data-lucide="home" class="w-4 h-4 text-gold-500 shrink-0"></i>
            <div>
              <span class="text-stone-400 block uppercase tracking-wider text-[8px]">Overnight Lodging</span>
              <span class="font-bold text-stone-700">${day.lodging || 'Luxury Wild Camp Enroute'}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 text-stone-600">
            <i data-lucide="coffee" class="w-4 h-4 text-gold-500 shrink-0"></i>
            <div>
              <span class="text-stone-400 block uppercase tracking-wider text-[8px]">Included Meals</span>
              <span class="font-bold text-stone-700">${day.meals || 'Breakfast, Lunch, Dinner'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  detailsColumns.innerHTML = `
    <!-- Large Header Visual Banner -->
    <div class="relative h-96 rounded-3xl overflow-hidden shadow-md border border-stone-200">
      <img 
        src="${getSafariImage(itinerary.imageSeed)}" 
        alt="${itinerary.name}" 
        class="w-full h-full object-cover"
        referrerpolicy="no-referrer"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>
      
      <div class="absolute bottom-8 left-6 right-6 text-white max-w-4xl space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="px-2.5 py-1 bg-gold-600 text-stone-950 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md">${itinerary.vibe}</span>
          <span class="px-2.5 py-1 bg-stone-900/80 backdrop-blur-sm text-gold-400 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md border border-gold-900/30">${itinerary.duration} Days Escorted</span>
        </div>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">${itinerary.name}</h2>
      </div>
    </div>

    <!-- Details Columns split -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Left Column: Day-by-Day timeline -->
      <div class="lg:col-span-8 space-y-8">
        <div class="space-y-2">
          <h3 class="font-serif text-2xl font-bold text-stone-950">Detailed Narrative Day-by-Day</h3>
          <p class="text-xs text-stone-500 leading-relaxed max-w-2xl">${itinerary.description}</p>
        </div>

        <div class="relative pt-4">
          ${dayPlansHtml}
        </div>
      </div>

      <!-- Right Column: Summary Sticky Panel -->
      <div class="lg:col-span-4 bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-6 lg:sticky lg:top-24 shadow-sm">
        <div class="space-y-1 text-center pb-4 border-b border-stone-200">
          <div class="text-[9px] uppercase font-mono tracking-widest text-stone-400">Elite Fully Escorted Rates</div>
          <div class="font-mono text-3xl font-black text-stone-900">$${itinerary.price.toLocaleString()} +</div>
          <div class="text-[10px] text-stone-500">Per Private Traveler (Double Cap / Private Transport)</div>
        </div>

        <div class="space-y-4">
          <h4 class="font-serif text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-2">Expedition Highlights</h4>
          <ul class="space-y-3">
            ${highlightItemsHtml}
          </ul>
        </div>

        <div class="bg-gold-50 border border-gold-150 p-4 rounded-xl space-y-1.5 text-[11px] leading-relaxed">
          <p class="font-bold text-gold-800 uppercase tracking-wider font-mono">100% Inclusive Guarantee</p>
          <p class="text-stone-600 font-serif">Includes all national park fees, private chimpanzee & mountain gorilla trekking permits, internal domestic aviation flights, AMREF emergency airlift covers, luxury full board lodges, fine liquors, custom Land Cruisers, and private guide escorts.</p>
        </div>

        <div class="space-y-2 pt-2">
          <div 
            onclick="navigateTo('planner')" 
            class="w-full text-center px-4 py-3 bg-stone-950 hover:bg-gold-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-sm cursor-pointer"
          >
            Customize and Lock Dates
          </div>
          <div 
            onclick="navigateTo('catalog')" 
            class="w-full text-center px-4 py-3 bg-white hover:bg-stone-100 border border-stone-200 text-stone-900 text-xs font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer"
          >
            Back to Safari Alternatives
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Custom Multi-Step Travel Planner Handling
function handlePlannerNext() {
  if (plannerStep < 4) {
    plannerStep += 1;
    updatePlannerUi();
  }
}

function handlePlannerPrev() {
  if (plannerStep > 1) {
    plannerStep -= 1;
    updatePlannerUi();
  }
}

function handlePlannerCheck(type, val) {
  const index = plannerForm[type].indexOf(val);
  if (index > -1) {
    plannerForm[type].splice(index, 1);
  } else {
    plannerForm[type].push(val);
  }
  
  // Update checkbox styles
  const btn = document.querySelector(`[data-check-type="${type}"][data-check-val="${val}"]`);
  if (btn) {
    const isChecked = plannerForm[type].includes(val);
    if (isChecked) {
      btn.className = "checkbox-btn cursor-pointer p-4 rounded-xl border-2 border-gold-600 bg-gold-50/50 text-stone-900 transition-all font-mono text-xs flex justify-between items-center";
      btn.querySelector('.check-indicator').innerHTML = '<i data-lucide="check" class="w-4 h-4 text-gold-600"></i>';
    } else {
      btn.className = "checkbox-btn cursor-pointer p-4 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-600 transition-all font-mono text-xs flex justify-between items-center";
      btn.querySelector('.check-indicator').innerHTML = '<div class="w-4 h-4 border border-stone-300 rounded"></div>';
    }
  }
  if (window.lucide) window.lucide.createIcons();
}

function selectRadioPlanner(type, val) {
  plannerForm[type] = val;

  // Toggle radio styles in UI
  document.querySelectorAll(`[data-radio-type="${type}"]`).forEach(btn => {
    const btnVal = btn.getAttribute('data-radio-val');
    if (btnVal === val) {
      btn.className = "radio-btn cursor-pointer p-4 rounded-xl border-2 border-gold-600 bg-gold-50/50 text-stone-900 transition-all font-mono text-xs flex justify-between items-center";
      btn.querySelector('.radio-indicator').innerHTML = '<div class="w-4 h-4 bg-gold-600 rounded-full flex items-center justify-center"><div class="w-1.5 h-1.5 bg-white rounded-full"></div></div>';
    } else {
      btn.className = "radio-btn cursor-pointer p-4 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-600 transition-all font-mono text-xs flex justify-between items-center";
      btn.querySelector('.radio-indicator').innerHTML = '<div class="w-4 h-4 border border-stone-300 rounded-full"></div>';
    }
  });
  if (window.lucide) window.lucide.createIcons();
}

function handleInputPlanner(type, val) {
  plannerForm[type] = val;
}

function updatePlannerUi() {
  // Update step progress labels and lines
  document.querySelectorAll('.planner-step-circle').forEach(el => {
    const s = parseInt(el.getAttribute('data-step'));
    if (s <= plannerStep) {
      el.className = "planner-step-circle w-10 h-10 rounded-full bg-stone-950 border border-stone-950 text-white flex items-center justify-center text-xs font-bold font-mono transition-colors";
    } else {
      el.className = "planner-step-circle w-10 h-10 rounded-full bg-white border border-stone-200 text-stone-400 flex items-center justify-center text-xs font-bold font-mono transition-colors";
    }
  });

  document.querySelectorAll('.planner-step-line').forEach(el => {
    const s = parseInt(el.getAttribute('data-step-line'));
    if (s < plannerStep) {
      el.className = "planner-step-line h-0.5 bg-stone-950 transition-colors flex-1";
    } else {
      el.className = "planner-step-line h-0.5 bg-stone-200 transition-colors flex-1";
    }
  });

  // Toggle Step Screens
  document.querySelectorAll('.planner-step-screen').forEach(el => {
    el.classList.add('hidden');
  });

  const activeStepScreen = document.getElementById(`planner-step-${plannerStep}`);
  if (activeStepScreen) {
    activeStepScreen.classList.remove('hidden');
  }

  // Handle CTA button states
  const prevBtn = document.getElementById('planner-prev-btn');
  const nextBtn = document.getElementById('planner-next-btn');
  const submitBtn = document.getElementById('planner-submit-btn');

  if (prevBtn) {
    if (plannerStep === 1) prevBtn.classList.add('invisible');
    else prevBtn.classList.remove('invisible');
  }

  if (nextBtn && submitBtn) {
    if (plannerStep === 4) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }
  }

  // Populate dynamic textual summaries inside Step 4 summary cards
  const sumCountry = document.getElementById('sum-destinations');
  const sumParties = document.getElementById('sum-party');
  const sumTiers = document.getElementById('sum-tier');
  
  if (sumCountry) sumCountry.textContent = plannerForm.destinations.length > 0 ? plannerForm.destinations.map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(', ') : 'None selected';
  if (sumParties) sumParties.textContent = `${plannerForm.partySize} Private Traveler(s) for ${plannerForm.duration} Days`;
  if (sumTiers) {
    const tierLabels = { elite: 'Elite Presidential Suites', classical: 'Authentic Luxury Camps', combined: 'Combined Explorer Standard' };
    sumTiers.textContent = tierLabels[plannerForm.lodgingPrestige] || plannerForm.lodgingPrestige;
  }
}

function setupFormHandlers() {
  const form = document.getElementById('travel-planner-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Submit fields locally
      const isOk = plannerForm.name && plannerForm.email && plannerForm.phone;
      if (!isOk) {
        alert('Please fill out all required fields to register your proposal inquiry.');
        return;
      }

      // Hide form steps inputs
      document.getElementById('planner-steps-layout').classList.add('hidden');
      document.getElementById('planner-step-indicators').classList.add('hidden');
      
      // Show confirmation
      document.getElementById('planner-success-screen').classList.remove('hidden');
      
      // Put summary info on success cards
      document.getElementById('client-title').textContent = `Thank You, ${plannerForm.name}`;
      document.getElementById('client-subtitle').textContent = `Your exclusive East African safari plan inquiries are registered under the care of chief Executive Officer Mr. Waluga Emmanual (Wemma)`;
    });
  }
}

function resetPlannerForm() {
  // Reset States
  plannerStep = 1;
  plannerForm = {
    destinations: [],
    duration: '10-14',
    partySize: '2',
    interests: [],
    lodgingPrestige: 'elite',
    name: '',
    email: '',
    phone: '',
    timeframe: 'Late 2026',
    notes: ''
  };

  // Reset checkboxes styles in step HTML
  document.querySelectorAll('.checkbox-btn').forEach(btn => {
    btn.className = "checkbox-btn cursor-pointer p-4 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-600 transition-all font-mono text-xs flex justify-between items-center";
    btn.querySelector('.check-indicator').innerHTML = '<div class="w-4 h-4 border border-stone-300 rounded"></div>';
  });

  // Reset custom form inputs
  const nameEl = document.getElementById('planner-name');
  const emailEl = document.getElementById('planner-email');
  const phoneEl = document.getElementById('planner-phone');
  const timeEl = document.getElementById('planner-timeframe');
  const noteEl = document.getElementById('planner-notes');

  if (nameEl) nameEl.value = '';
  if (emailEl) emailEl.value = '';
  if (phoneEl) phoneEl.value = '';
  if (timeEl) timeEl.value = 'Late 2026';
  if (noteEl) noteEl.value = '';

  // Return to step layout
  document.getElementById('planner-steps-layout').classList.remove('hidden');
  document.getElementById('planner-step-indicators').classList.remove('hidden');
  document.getElementById('planner-success-screen').classList.add('hidden');

  updatePlannerUi();
  if (window.lucide) window.lucide.createIcons();
}
