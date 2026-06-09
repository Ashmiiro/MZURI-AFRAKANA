export interface DayPlan {
  dayNumber: number;
  title: string;
  description: string;
  lodging?: string;
  meals?: string;
  activities: string[];
}

export interface FlagshipItinerary {
  id: string;
  name: string;
  duration: number;
  vibe: string;
  price: number;
  description: string;
  highlights: string[];
  imageSeed: string;
  days: DayPlan[];
}

export interface CatalogItem {
  id: string;
  title: string;
  duration: number;
  price: number;
  category: "Classic Safaris" | "Private Classic Safaris" | "Private Custom Safaris" | "Options & Extensions";
  highlights: string;
  description: string;
}

export const CatalogItems: CatalogItem[] = [
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
    price: 0, // Request custom
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

export const FlagshipItineraries: FlagshipItinerary[] = [
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
      "Sunset boat cruise to the base of Murchison Falls, the world's most powerful waterfall",
      "Deep-forest tracking of chimpanzees in the Primate Capital, Kibale",
      "Staggering crater lake drives and savannah predator tracking in Queen Elizabeth National Park"
    ],
    imageSeed: "river_nile",
    days: [
      {
        dayNumber: 1,
        title: "The Gateway of the Nile",
        description: "Arrive at Entebbe International Airport where you will be met inside the air bridge by our executive meet-and-greet team. After fast-tracked customs clearance, you are introduced to your Private Expedition Guide. Board your custom-outfitted Mzuri 4x4 Safari Land Cruiser, enjoying chilled refreshments and on-board Wi-Fi as you transfer to the legendary adventure capital, Jinja, on the edge of Lake Victoria.",
        lodging: "The Haven Nile River Lodge (Ultra-Luxury Suite)",
        meals: "Dinner",
        activities: ["VIP Meet & Greet", "Scenic Land Cruiser transfer to Jinja", "Private sundowner cocktail overlooking the Nile"]
      },
      {
        dayNumber: 2,
        title: "Conquering the Source of the Nile",
        description: "Awake to the roar of the rapids. The morning is dedicated to a thrilling private white-water rafting excursion on the historic Victoria Nile, tailor-made to your comfort level (mild or wild). In the afternoon, board a private luxury displacement boat to cruise to the exact, geographic 'Source of the River Nile' where British explorer John Hanning Speke stood. Conclude with a scenic sunset transfer back to the capital city of Kampala.",
        lodging: "The Serena Hotel Kampala (Executive Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Private White Water Rafting", "Displacement Boat cruise to official Source of the Nile", "Private transfer to Kampala"]
      },
      {
        dayNumber: 3,
        title: "The Return of the Rhinos",
        description: "Depart Northward toward the expansive Murchison Falls. En route, we enter the Ziwa Rhino Sanctuary. Here, we embark on an incredibly intimate, guided on-foot trek to track the endangered Southern White Rhinos. Walk within paces of these massive, prehistoric giants in perfect safety with armed sanctuary rangers. After a gourmet organic bush lunch, continue your journey, climbing up to the gate of Murchison Falls National Park.",
        lodging: "Chobe Safari Lodge (Superior Nile-Facing Room)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["On-foot Rhino Tracking in Ziwa", "Gourmet bush lunch", "Scenic drive into Murchison Falls NP"]
      },
      {
        dayNumber: 4,
        title: "The Thunderous Majesty of Murchison",
        description: "Set out at sunrise for an elite game drive across the savannah plains of Northern Murchison, tracking lions, giraffes, leopards, and giant herds of elephants. In the afternoon, embark on a private launch cruise up the Victoria Nile to the base of Murchison Falls itself. Watch eighty million gallons of water squeeze through a narrow 7-meter gorge every second, creating a massive, misty rainbow across the canyon.",
        lodging: "Nile Safari Lodge (Exclusive Riverside Chalet)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Sunrise game drive with private spotter", "Private launch cruise to base of Murchison Falls", "Top-of-falls hiking experience"]
      },
      {
        dayNumber: 5,
        title: "Journey to the Primate Capital",
        description: "Enjoy a leisurely morning on your private chalet deck overlooking the moving Nile. Today is a scenic overland transit to Kibale Forest National Park. As we drive through the verdant, rolling hills of Fort Portal, the landscape transforms from open savannah into deep, ancient tropical rainforest. Your custom Land Cruiser’s pop-up roof provides perfect angles of the towering Rwenzori Mountains ('Mountains of the Moon').",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Scenic Rwenzori Mountain foothills drive", "Explore Fort Portal tea estates", "Lodge check-in overlooking a volcanic crater lake"]
      },
      {
        dayNumber: 6,
        title: "Encountering the Chimpanzees of Kibale",
        description: "Enter the Kibale Rainforest canopy. Accompanied by experienced researchers, you will embark on a chimpanzee tracking expedition. Listen to the haunting, echoing pant-hoots of our closest genetic relatives before encountering them grooming, feeding, and playing in the branches above. In the afternoon, explore the adjacent Bigodi Wetland Sanctuary on a private boardwalk trail, identifying rare Colobus monkeys and colorful endemic birdlife.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Chimpanzee Tracking with specialized biologists", "Guided Bigodi Swamp Walk", "Community coffee roasting demonstration"]
      },
      {
        dayNumber: 7,
        title: "The Savannahs of Queen Elizabeth",
        description: "Scenic transfer south, crossing the Equator with a celebratory photo opportunity. Enter the plains of Queen Elizabeth National Park. In the late afternoon, we transition into the volcanic crater lakes region for a dramatic panoramic ridge drive. Follow this with a sunset game drive, seeking out hunting pride lions, herds of cape buffaloes, and secretive leopards under the golden glow of dusk.",
        lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Equator Crossing ceremony", "Crater Lakes scenic ridge drive", "Sunset savannah game tracking"]
      },
      {
        dayNumber: 8,
        title: "Return to the Gateway",
        description: "An early breakfast followed by a short morning game drive to catch the savannah's early risers. Then, we begin our return transit toward Entebbe. Stop for a celebratory three-course farewell lunch at a private country estate, before arriving at Entebbe International Airport in the evening for your fast-tracked international flight departure.",
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
      "In-depth wildlife tracks in Murchison Falls and Queen Elizabeth National Parks",
      "Full-day Chimpanzee Habituation Experience inside Kibale Rainforest",
      "Private boat cruise along the majestic, wildlife-dense Kazinga Channel",
      "Search for the mythical tree-climbing lions in the remote Ishasha Sector",
      "Mountain Gorilla Trekking in Bwindi Impenetrable Forest, an existential encounter"
    ],
    imageSeed: "gorilla_bwindi",
    days: [
      {
        dayNumber: 1,
        title: "Arrival in the Pearl of Africa",
        description: "Welcome to Uganda. Touch down at Entebbe, where you will be fast-tracked through customs and met by your Private Mzuri Guide. A short transfer brings you to your exclusive boutique hotel in Entebbe’s quiet, leafy suburbs. Meet your lead expedition planner for an evening welcome cocktail and safari briefing.",
        lodging: "Hotel No. 5 (Luxury Poolside Villa)",
        meals: "Dinner",
        activities: ["VIP Meet & Greet", "Fast-track VIP customs support", "Welcome cocktail briefing"]
      },
      {
        dayNumber: 2,
        title: "The Pulse of Kampala & Historical Wonders",
        description: "Explore the historic and cultural landmarks of Uganda's capital, Kampala. Visit the Kasubi Tombs (UNESCO World Heritage Site), the imposing Gaddafi Mosque for a panoramic summit view of the seven hills, and sample a private gourmet tea tasting of locally grown organic green leaf. Return to Entebbe for a relaxed evening of preparation.",
        lodging: "Hotel No. 5 (Luxury Poolside Villa)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Kampala Private Cultural Tour", " Kasubi Tombs private guide", "Artisanal tea tasting experience"]
      },
      {
        dayNumber: 3,
        title: "Ascend to Murchison Falls National Park",
        description: "An early morning departure drives us orthward through historical towns and lush agricultural landscapes. Our target is the northern plains of Murchison Falls. Before entering the park, we detour to the Ziwa Sanctuary for an incredibly close and thrilling on-foot rhino tracking trek. Arrive in Murchison, crossing the iconic Nile River bridge to check into your ultra-luxury eco-lodge.",
        lodging: "Nile Safari Lodge (Exclusive Riverside Chalet)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Ziwa Rhino tracking", "Private Nile bridge transit", "Dinner under the stars overlooking the river"]
      },
      {
        dayNumber: 4,
        title: "The Gorge and the Giants of Murchison",
        description: "An extensive sunrise game drive tracks lion prides, dynamic elephant herds, and herds of giraffe along the Buligi plains. After culinary lunch at the lodge, board a private luxury launch boat. We cruise slowly up the Nile, passing vast pods of snorting hippopotamuses, immense Nile crocodiles, and elephant herds cooling off at the riverbank. Disembark for a private guided hike up to the misty, thundering summit of the falls.",
        lodging: "Nile Safari Lodge (Exclusive Riverside Chalet)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Sunrise savannah photography track", "Private Nile river launch cruise", "Elite hike to top of Murchison Falls"]
      },
      {
        dayNumber: 5,
        title: "The Fort Portal Highlands and crater crater lakes",
        description: "We travel south past Lake Albert, tracing the high-altitude escarpment with stunning views of the Congolese Blue Mountains in the distance. Drive into Fort Portal, an attractive town nestled in the foothills of the Rwenzori Mountains. Arrive at your magnificent lodge, composed of high-end hand-logged cabins perched right on the edge of a pristine ancient crater lake.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Great Rift Valley escarpment drive", "Fort Portal private tour", "Sunset walk around crater rim"]
      },
      {
        dayNumber: 6,
        title: "Full-Day Chimpanzee Habituation (CHEX)",
        description: "An unparalleled primate experience. Today, you are privileged to participate in a full-day Chimpanzee Habituation Experience (CHEX) inside Kibale. Accompany the national park's leading researchers and habituation rangers before dawn. Spend a full day following a wild chimpanzee troop from their nesting nests, observing foraging, tool-use, social dynamics, and vocal play. This is far more immersive than standard tracking.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full-day custom Chimpanzee Habituation permit", "In-depth forest ecosystem lecture by head biologist"]
      },
      {
        dayNumber: 7,
        title: "Descent to the Equator & Queen Elizabeth",
        description: "After a scenic breakfast, transfer south past Fort Portal to cross the equator. Enter the classic savannah landscapes of Queen Elizabeth National Park. In the late afternoon, we transition into a private crater-lake cruise, scanning the ancient geological calderas, before embarking on a late-evening game drive to seek out active lions and leopards starting their dusk hunts.",
        lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Equator Crossing ceremony", "Sunset game drive across Kasenyi plains"]
      },
      {
        dayNumber: 8,
        title: "The Majestic Kazinga Channel",
        description: "Awake to the wilderness calls. Set out for an early morning game drive in search of elusive savannah predators. In the afternoon, embark on our absolute favorite regional highlight: a private luxury charter boat cruise on the natural Kazinga Channel, connecting Lake George and Lake Edward. This channel has the highest concentration of hippos on Earth, alongside hundreds of elephants, waterbucks, and rare birds.",
        lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Kasenyi plains game drive", "Private luxury yacht cruise on the Kazinga Channel"]
      },
      {
        dayNumber: 9,
        title: "The Lions of Ishasha & Bwindi's Rainforest",
        description: "Today, we head deep south into the remote, wild Ishasha sector of the park. This region is world-renowned for its bizarre population of big-cat lions who spend the hot hours of the day resting high up in the branches of giant fig trees. Spot these majestic tree-climbers before continuing up into the high-altitude mossy ridges of Bwindi Impenetrable National Park.",
        lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Track Tree-Climbing Lions in Ishasha", "High-altitude mountain forest drive to Bwindi"]
      },
      {
        dayNumber: 10,
        title: "The Gorilla Trek - A Soul-Stirring Encounter",
        description: "The day you will remember forever. After an early briefing by the park warden, you are allocated a small team of master trackers and trackers. Enter the mystical, primordial rain forest, slicing through vines and dense brush. When you finally locate the wild family of Mountain Gorillas, your heart will skip a beat. Spend one magical, completely silent hour sitting feet away from wild giant silverbacks and infants. A life-changing encounter.",
        lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Private Mountain Gorilla Trekking Permit", "Post-tracking celebratory champagne at lodge"]
      },
      {
        dayNumber: 11,
        title: "The Elands and Zebras of Lake Mburo",
        description: "Descend from the highlands into Lake Mburo National Park, a scenic savannah ecosystem punctuated by lakes, rocky outcrops, and Acacia woodlands. It is the only national park in Western Uganda where you can see massive herds of Burchell's Zebras, Impalas, and giant Eland antelope. Check into your luxury clifftop lodge, before embarking on a private sunset walking safari among wild herds.",
        lodging: "Mihingo Lodge (Luxury Executive Tent)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Highland-to-lowland transit", "Guided on-foot savannah walking safari", "Night game drive looking for leopards"]
      },
      {
        dayNumber: 12,
        title: "Equator Crossing & Farewell",
        description: "A final morning horseback safari (optional) or morning game drive. We then begin our return transit toward Entebbe. Stop at the Equator crossing for a gourmand country farewell lunch and a fun gravity demonstration. Arrive in Entebbe in the late afternoon, with private airport lounge access registered for your check-in and flight home.",
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
      "Authentic cultural engagement with the semi-nomadic Karamojong and IK peoples",
      "Expansive wildlife trackers in the spectacular Narus Valley",
      "Gorilla trek in Bwindi's ancient forest",
      "Peaceful canoeing and sunset reflection on the islands of Lake Bunyonyi"
    ],
    imageSeed: "kidepo_valley",
    days: [
      {
        dayNumber: 1,
        title: "Arrival and Lakeside Rest",
        description: "Touch down at Entebbe, where you are received inside airport arrivals with fast-track customs assistance. Your private guide transfers you to your lakeside sanctuary in Entebbe. Dine on your private balcony, looking out over the expansive, shimmering waters of Lake Victoria.",
        lodging: "Hotel No. 5 (Executive Suite)",
        meals: "Dinner",
        activities: ["VIP Meet & Greet", "Fast-track VIP handling", "Lakeside dining"]
      },
      {
        dayNumber: 2,
        title: "Flight to the Lost Valley - Kidepo",
        description: "Board a private Mzuri executive charter flight from Entebbe directly to Kidepo Valley National Park, tucked into the far northeast corner of Uganda, bordering South Sudan. This is a region of immense, dry savannah framed by jagged mountain calderas. Game drive through the spectacular Narus Valley, viewing massive herds of buffalo and breeding elephants.",
        lodging: "Apoka Safari Lodge (Executive Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Private air charter flight to Kidepo", "Sunset game drive in Narus Valley", "Stargazing fire circle"]
      },
      {
        dayNumber: 3,
        title: "The Karamojong and IK Highlands",
        description: "Ascend into the dry mountain passes of the Morungole ranges to spend a privileged, deeply authentic day interacting with the IK people, one of the smallest and most secluded ethnic tribes in Africa. In the afternoon, visit a traditional manyatta (homestead) of the semi-nomadic Karamojong warriors, learning their ancient history, dance, and cattle culture.",
        lodging: "Apoka Safari Lodge (Executive Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["IK Mountain Tribe cultural immersion", "Traditional Karamojong Manyatta visit"]
      },
      {
        dayNumber: 4,
        title: "Transfer to Murchison's Northern Horizons",
        description: "A scenic morning game drive in Kidepo Valley before we board our private charter flight to Murchison Falls National Park. We land directly at the Chobe air strip, stepping off directly into your five-star lodge which runs alongside the rushing rapids of the Nile River.",
        lodging: "Chobe Safari Lodge (Presidents River Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Charter flight to Murchison Falls", "Private sunset deck cocktail", "Luxury dinner overlooking roaring rapids"]
      },
      {
        dayNumber: 5,
        title: "The Delta Nile Cruise & Predator Tracking",
        description: "Board an elite, small-deck boat to cruise the tranquil waters of the Nile Delta, where the river empties into Lake Albert. Search for the legendary, prehistoric Shoebill Stork, alongside herds of hippos and elephants. An afternoon game drive explores the heart of Murchison's northern peninsula, tracking prides of lions and hunting leopards.",
        lodging: "Nile Safari Lodge (Exclusive Riverside Chalet)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Nile Shoebill Delta private cruise", "Nile Delta game tracking with lead ranger", "Spa treatments at the lodge"]
      },
      {
        dayNumber: 6,
        title: "Drive to the Primate Capital via Fort Portal",
        description: "An elegant drive south via Hoima town, offering picturesque views of verdant tea plantations and local villages. Roll into the beautiful garden town of Fort Portal, arriving at your majestic elevated log lodge overlooking the Rwenzori foothills.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Scenic country road drive", "Fort Portal cultural walking tour", "Lodge dining overlooking lake crater"]
      },
      {
        dayNumber: 7,
        title: "The Chimpanzee Sanctuary and Cultural Trails",
        description: "Spend your morning tracking chimpanzees in Kibale National Park, learning about troop hierarchies and nesting habits. In the afternoon, engage in a guided community walk where you meet local traditional herbalists and visit primary school classrooms sponsored by our Mzuri Foundation.",
        lodging: "Kyaninga Lodge (Luxury Elevated Log Cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Kibale Chimpanzee tracking", "Mzuri Foundation village project tour", "Traditional hand-drip coffee processing"]
      },
      {
        dayNumber: 8,
        title: "Queen Elizabeth's Volcanic Ridges",
        description: "Transfer south across the Equator, descending into the Rift Valley floor of Queen Elizabeth National Park. In the late afternoon, drive through the spectacular volcanic crater explosion loop, navigating high peaks with breathtaking views of lakes and valleys.",
        lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Equator Crossing ceremony", "Crater Lakes scenic ridge drive", "Predator savannah game drive"]
      },
      {
        dayNumber: 9,
        title: "The Great Savannah Tracks",
        description: "A comprehensive sunrise game drive tracking elephants, Uganda Kobs, and lions across the Kasenyi plains. After lunch, embark on a private Kazinga Channel boat cruise, enjoying fine wines and cheeses while observing hippos and herds of elephant right along the shoreline.",
        lodging: "Elephant Plains Lodge (Luxury Eco-Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Kasenyi plains game drive", "Private Kazinga Channel luxury yacht cruise"]
      },
      {
        dayNumber: 10,
        title: "The Glassy Waters of Bunyonyi",
        description: "Drive south, climbing through the beautiful Kigezi Highlands (the 'Switzerland of Africa') to Lake Bunyonyi, Uganda’s deepest and most peaceful lake, containing 29 islands. Board a private, hand-carved canoe at sunset, gliding silently across the glassy water as mist gathers on the green terraced slopes.",
        lodging: "Lost Paradise Resort (Presidential Lakeside Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Highland scenic drive", "Private sunset canoe excursions to islands", "Lake-side fine dining bonfire"]
      },
      {
        dayNumber: 11,
        title: "Return Flight & Farewell",
        description: "Enjoy a peaceful lakeside sunrise. A short transfer to nearby Kisoro airstrip where you board your direct charter flight back to Entebbe. Fast-track airport access is provided for your luxury departure flight.",
        lodging: "Day Room at Hotel No.5 (Prior to flight)",
        meals: "Breakfast, Lunch",
        activities: ["Scenic flight Kisoro to Entebbe", "VIP Fast Track airport services", "Farewell champagne toast"]
      }
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
      "Private aerial hot air balloon flight over the endless Serengeti plains, Tanzania",
      "Descend into Ngorongoro Crater, the intact ancient volcanic caldera wildlife sanctuary",
      "Highly reflective and private tour of Kigali, Rwanda’s capital and memorials",
      "Double gorilla or golden monkey tracks in Volcanoes National Park & Bwindi"
    ],
    imageSeed: "masai_mara",
    days: [
      {
        dayNumber: 1,
        title: "Jambo Kenya - Nairobi Welcome",
        description: "Touch down in Nairobi, Kenya. Our executive team clears you through customs and transfers you to your legendary, colonial-era luxury boutique hotel. Spend your evening dining on gourmet organic cuisine under the jacaranda trees.",
        lodging: "Hemingways Nairobi (Bespoke Luxury Suite)",
        meals: "Dinner",
        activities: ["VIP Meet & Greet", "Fast-track VIP customs support", "Welcome cocktail briefing"]
      },
      {
        dayNumber: 2,
        title: "Nairobi's Giraffes & Sheldrick Trust",
        description: "A magical morning visiting the Karen Blixen Giraffe Centre, feeding endangered Rothschild's giraffes from an elevated boardwalk. Next, enjoy a private prior-to-public viewing at the Sheldrick Wildlife Trust, meeting orphan baby elephants. Afternoon flights take you straight to the legendary Masai Mara.",
        lodging: "Angama Mara (Luxury Tent overlooking the plains)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Private Giraffe Centre experience", "Sheldrick Wildlife Trust private visit", "Scheduled flight to Masai Mara"]
      },
      {
        dayNumber: 3,
        title: "Masai Mara's Endless Gold Plains",
        description: "Set out across the golden Mara savannahs in search of the Big Five: lions, leopards, rhinos, elephants, and buffaloes. Explore the Mara River crossings, where giant crocodiles wait in anticipation of the annual wildebeest migration.",
        lodging: "Angama Mara (Luxury Tent)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Sunrise Mara game drive", "Bush breakfast under acacia trees", "Sunset predator tracking"]
      },
      {
        dayNumber: 4,
        title: "Mara Balloon Safari & Warrior Trails",
        description: "Awake before dawn for a private Hot Air Balloon flight, floating silently over the Great Migration herds. After a champagne landing, visit a traditional, private Maasai village, learning ancient fire-making techniques and spear skills.",
        lodging: "Angama Mara (Luxury Tent)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Sunrise Hot Air Balloon Safari", "Private Maasai Manyatta community encounter"]
      },
      {
        dayNumber: 5,
        title: "Fly to Serengeti, Tanzania",
        description: "Cross the border via a private air-transfer, landing right in the heart of Serengeti National Park, Tanzania. Check into your ultra-luxury, five-star safari camp, designed with vintage furnishings and premium modern luxuries.",
        lodging: "Singita Sasakwa Lodge (Luxury Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Cross-border flight Mara to Serengeti", "Serengeti sunset savannah game tracking"]
      },
      {
        dayNumber: 6,
        title: "The Endless Plains of Serengeti",
        description: "Enjoy extensive full-day game tracking drives across the legendary Serengeti plains. Search for massive cheetah coalitions, hunting lions, and rare black rhinos. Dine on fine wines and premium beef around the campfire.",
        lodging: "Singita Sasakwa Lodge (Luxury Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Serengeti predator tracking", "Sunrise high-definition photography instruction"]
      },
      {
        dayNumber: 7,
        title: "The Great Serengeti Tracks",
        description: "Further explore Serengeti's secret waterholes, finding nesting leopards and hippos. Enjoy gourmet poolside dining and luxury spa treatments at the lodge during the hot hours of the afternoon.",
        lodging: "Singita Sasakwa Lodge (Luxury Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Serengeti game drive", "In-camp luxury spa treatment", "Vintage wine cellar tasting"]
      },
      {
        dayNumber: 8,
        title: "The Descent to Ngorongoro Crater",
        description: "Transit toward the legendary Ngorongoro Crater, the largest intact volcanic caldera in the world. Check into your spectacular lodge, perched right on the misty crater edge. Enjoy breathtaking afternoon views of this lost world.",
        lodging: "Ngorongoro Crater Lodge (Executive Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Scenic escarpment drive", "Guided rim-walk with Maasai warrior", "Fine dining on the crater edge"]
      },
      {
        dayNumber: 9,
        title: "Ngorongoro Crater Exploration",
        description: "Descend 600 meters into the crater rim for a private game drive inside this natural sanctuary. Encounter black rhinos, giant bull elephants carrying massive tusks, and dense prides of crater lions. Enjoy an elite hot-lunch picnic in the forest.",
        lodging: "Ngorongoro Crater Lodge (Executive Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Ngorongoro Crater floor game drive", "Gourmet hot picnic under the yellow-fever acacias"]
      },
      {
        dayNumber: 10,
        title: "Flight to Kigali, Rwanda",
        description: "Board a charter flight to Kigali, Rwanda. Settle into the modern elegance of Kigali, visiting the Kigali Genocide Memorial on a private, highly reflective historical tour. Dine on French-Rwandan fine culinary cuisine.",
        lodging: "The Retreat by Heaven (Luxury Suite)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Charter flight Serengeti to Kigali", "Private Kigali Genocide Memorial tour", "Fine dining custom gourmet dinner"]
      },
      {
        dayNumber: 11,
        title: "Journey to Volcanoes National Park",
        description: "Drive through Rwanda's rolling green hills, climbing higher up to Volcanoes National Park (the 'Land of a Thousand Hills'). Check into your world-renowned luxury jungle retreat nestled in the high volcano jungle.",
        lodging: "One&Only Gorilla's Nest (Luxury Jungle Lodge)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Scenic drive to Volcanoes National Park", "Primate conservation private lecture by chief researcher"]
      },
      {
        dayNumber: 12,
        title: "Golden Monkey Tracking in Volcanoes",
        description: "An active trek in Volcanoes National Park to track the playful, endangered Golden Monkeys. Watch them move in flash speeds through the bamboo forests. Settle back into your lodge for an afternoon of organic luxury.",
        lodging: "One&Only Gorilla's Nest (Luxury Jungle Lodge)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Private Golden Monkey tracking trek", "Eucalyptus forest spa treatment"]
      },
      {
        dayNumber: 13,
        title: "Gorilla Trekking - The Ultimate Primate Experience",
        description: "Wake to the mist. Settle into Bwindi or Volcanoes National Park for a magnificent Mountain Gorilla Tracking expedition. Encountering the silverback head on represents the absolute pinnacle of luxury wildlife interactions.",
        lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Mountain Gorilla tracking trek", "Post-trek celebratory drinks", "Private dining under starry canopy"]
      },
      {
        dayNumber: 14,
        title: "Seamless Flight to Entebbe & Departure",
        description: "Board a private regional charter flight from Volcanoes/Kisoro back to Entebbe, Uganda. Stay in our executive day room prior to fast-track check-in for your international flight home.",
        lodging: "Day Room at Hotel No.5 (Prior to flight)",
        meals: "Breakfast, Lunch",
        activities: ["Scheduled mountain-flight Kisoro to Entebbe", "VIP lounge boarding handling"]
      }
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
      "Full-day Chimpanzee Habituation Experience (CHEX) in Kibale rainforest",
      "Mountain Gorilla Tracking in the primordial mist of Bwindi Forest",
      "Authentic cultural walk with the forest-dwelling indigenous Batwa community",
      "Breathtaking mountain crater ridge drives",
      "Scenic domestic flight back to Entebbe for international connections"
    ],
    imageSeed: "chimp_kibale",
    days: [
      {
        dayNumber: 1,
        title: "Arrival at Entebbe Gateway",
        description: "Touch down at Entebbe, where you are received inside airport arrivals with fast-track customs assistance. Your private guide transfers you to your lakeside sanctuary in Entebbe. Dine on your private balcony, looking out over the expansive, shimmering waters of Lake Victoria.",
        lodging: "Hotel No. 5 (Executive Suite)",
        meals: "Dinner",
        activities: ["VIP Meet & Greet", "Fast-track VIP handling", "Lakeside dining"]
      },
      {
        dayNumber: 2,
        title: "The Climb to the Primate Capital",
        description: "Board your private custom Land Cruiser, heading west toward Kibale Forest National Park. The drive winds through Fort Portal's scenic tea country, climbing onto crater lake ridges before plunging into the cool forest canopy.",
        lodging: "Kyaninga Lodge (Luxury elevated log cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Scenic highlands transfer to Kibale", "Explore Fort Portal organic tea holdings", "Sunset lodge cocktail"]
      },
      {
        dayNumber: 3,
        title: "Full-Day Chimpanzee Habituation Experience",
        description: "Wake up before the sun. Accompanied by national park biologists, spend a stunning full day following a wild chimpanzee group as they descend from canopy nests, forage, groom, and socialise. You get five times more exposure than standard tours.",
        lodging: "Kyaninga Lodge (Luxury elevated log cabin)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full-day custom Chimpanzee Habituation permit", "Guided Bigodi Swamp bird-watching Walk"]
      },
      {
        dayNumber: 4,
        title: "Scenic Transfer to Bwindi Forest",
        description: "A gorgeous scenic mountain and crater-lake transfer south, crossing the Queen Elizabeth plains before climbing higher into the misty cloud forests of Bwindi Impenetrable National Park.",
        lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Scenic escarpment mountain drive", "Lodge arrival in mountain-mist Bwindi", "Private fireplace styling"]
      },
      {
        dayNumber: 5,
        title: "Mountain Gorilla Tracking",
        description: "Today is the crown jewel. Guided by master rangers, enter Bwindi's impenetrable rainforest thicket in search of mountain gorillas. Encountering these giant silverbacks face-to-face is an ancient, soul-stirring event.",
        lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Mountain Gorilla tracking permit", "Celebrated gourmet five-course lodge dinner"]
      },
      {
        dayNumber: 6,
        title: "Batwa Community Walks & Reflections",
        description: "Embark on an interactive walk with the indigenous Batwa community, the original forest-dwellers of Bwindi. Learn ancient survival skills, medicinal herbs tree-climbing, and honey gathering, followed by an evening flight briefing.",
        lodging: "Clouds Mountain Gorilla Lodge (Exclusive Stone Cottage)",
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Batwa cultural forest trail", "Exclusive private lecture on gorilla health monitoring"]
      },
      {
        dayNumber: 7,
        title: "Domestic Scenic Flight back to Entebbe",
        description: "A morning scenic flight from Kisoro back to Entebbe, catching spectacular aerial vistas of the volcanoes and lakes. Settle into our day room prior to checking in for your international departure flight.",
        lodging: "Day Room at Hotel No.5 (Prior to flight)",
        meals: "Breakfast, Lunch",
        activities: ["Scenic flight Kisoro to Entebbe", "VIP Lounge fast-track departure"]
      }
    ]
  }
];
