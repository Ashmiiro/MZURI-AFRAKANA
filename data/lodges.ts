export interface LodgeInfo {
  id: string;
  name: string;
  location: string;
  country: string;
  description: string;
  amenities: string[];
  partnerTier: string;
  imageSeed: string;
}

export const LodgesData: LodgeInfo[] = [
  {
    id: "clouds-gorilla",
    name: "Clouds Mountain Gorilla Lodge",
    location: "Southern Bwindi Impenetrable National Park",
    country: "Uganda",
    description: "Perched at an incredible 2,100 meters above sea level, Clouds is Uganda's highest lodge, looking directly out over the misty ridges of the Bwindi Impenetrable Forest and the active Virunga Volcanoes. Guests stay in exclusive hand-crafted Obsidian stone cottages featuring soaring ceilings, roaring personal fireplaces, original fine Ugandan art, and private dedicated personal butlers to manage their every tracking and dining need.",
    amenities: ["Private dedicated personal butler", "Double stone fireplaces", "In-villa massage spa service", "Forest-view veranda balcony", "Private bar and fine wine list"],
    partnerTier: "Ultra-Classic Luxury Primate Lodge",
    imageSeed: "clouds_lodge"
  },
  {
    id: "nile-safari",
    name: "Nile Safari Lodge",
    location: "Murchison Falls National Park",
    country: "Uganda",
    description: "Escaping the conventional, Nile Safari Lodge sits directly over the slow-moving banks of the Victoria Nile, designed to blend completely into the river vegetation. Built using natural local timber, stone, and thatch, each eco-luxury chalet is a masterpiece of design, offering an outdoor monsoon shower, a private plunge pool on a suspended wooden deck, and floor-to-ceiling glass walls that pull the river and passing elephants straight into your room.",
    amenities: ["Private riverside infinity plunge pool", "Outdoor jungle monsoon shower", "Dedicated professional guide & tracker", "Private wooden sunset viewing deck", "Eco-friendly natural cooling design"],
    partnerTier: "Premium Riverside Sanctuary",
    imageSeed: "nile_safari_lodge"
  },
  {
    id: "chobe-safari",
    name: "Chobe Safari Lodge",
    location: "Northern Murchison Falls National Park",
    country: "Uganda",
    description: "Located on the northern banks of the River Nile, Chobe Safari Lodge is a massive jewel of premium hospitality. The main lodge and Presidential Suites look out directly over a sweep of rolling rapids that fill the air with a majestic, soothing sound. With a tiered three-level swimming pool, extensive health club facilities, and an airfield for simple private charters, Chobe represents ultimate comfort inside the wild northern savannahs.",
    amenities: ["Three-tier panoramic swimming pool", "Private private charter airfield", "State-of-the-art health club & spa", "Elevated river-view executive dining", "Sunset fishing and birding deck"],
    partnerTier: "Elite Savannah Oasis",
    imageSeed: "chobe_lodge"
  },
  {
    id: "paramount-properties",
    name: "Paramount Properties",
    location: "Entebbe, Kampala & National Parks",
    country: "Uganda",
    description: "A network of custom-curated city estates and strategic bush retreats tailored exclusively for Mzuri travellers. From Hotel No. 5 in Entebbe's quiet botanical avenues to high-end boutique properties in the city center, our Paramount properties guarantee a seamless standard of climate-controlled rooms, five-star linens, high-speed encrypted Wi-Fi, and elite corporate security.",
    amenities: ["Bespoke fast-track airport concierge", "High-speed encrypted fiber internet", "Twenty-four-seven armed executive security", "Customized internal dining menus", "Private business lounges"],
    partnerTier: "Executive City Concierge",
    imageSeed: "paramount_estates"
  },
  {
    id: "one-only-gorillas-nest",
    name: "One&Only Gorilla’s Nest",
    location: "Volcanoes National Park",
    country: "Rwanda",
    description: "Nestled in an ancient eucalyptus tree forest, One&Only Gorilla’s Nest is the absolute apex of jungle luxury. Modern treehouse suites are suspended in the rich leaves, offering private firepits, panoramic glass-room bathtubs, and luxury details. Guests are invited to reconnect with nature under the silhouette of the dramatic Virunga ranges, enjoying high-end Rwandan coffee and premier spa rituals.",
    amenities: ["Eucalyptus forest suspension spa", "Outdoor lava rock shower & hot tub", "Artisanal coffee tasting lounge", "Infinity swimming pool heated", "Private golf carts for inner-transit"],
    partnerTier: "Ultra-Premium Luxury Primate Retreat",
    imageSeed: "gorillas_nest"
  },
  {
    id: "wilderness-safaris-camps",
    name: "Wilderness Safaris Camps",
    location: "Akagera, Volcanoes & Regional Reserves",
    country: "Rwanda & Regional",
    description: "Wilderness Safaris is synonymous with high-end, light-footprint ecological conservation. Their partner camps—like Bisate Lodge operating in a volcanic cone—redefine architecture, weaving organic rounded nests into the hillsides. Experience deep, science-led primate tracking, organic local dining, and an unparalleled standard of private conservation hospitality.",
    amenities: ["Science-led conservation tracking guide", "Award-winning volcanic nested architecture", "Organic sustainable farm-to-table cuisine", "Personal wine cellars", "Private viewing optical scopes"],
    partnerTier: "Premier Conservation Camps",
    imageSeed: "wilderness_camp"
  },
  {
    id: "lemala-luxury-camps",
    name: "Lemala Luxury Camps",
    location: "Serengeti & Ngorongoro Crater",
    country: "Tanzania",
    description: "Lemala camps deliver the ultimate vintage vintage-tent safari romance inside Tanzania's premier animal theatres. From Lemala Nanyukie in the Serengeti to exclusive tents nestled on the Ngorongoro Crater Rim. Premium details include double vanities, copper rolltop baths, plush wooden floors covered in Persian rugs, and outdoor campfires to recount local stories under the stars.",
    amenities: ["Vintage copper rolltop bathtubs", "Persian rug-laden canvas suites", "Private butler & bush dining setups", "Safari library & whiskey lounge", "Night game viewing devices"],
    partnerTier: "Premium Classic Canvas Camps",
    imageSeed: "lemala_camp"
  },
  {
    id: "singita-properties",
    name: "Singita Luxury Reserves",
    location: "Serengeti, Mara & Sabi Sands",
    country: "Tanzania, Kenya & SA",
    description: "Widely regarded as the ultimate brand in ultra-luxury African tourism, Singita's properties represent absolute award-winning excellence. From the stately stone elegance of Sasakwa Lodge overlooking the Serengeti plains, to intimate riverine villas. Singita seamlessly marries high design, fine art, world-class culinary collections, and game dynamic guides.",
    amenities: ["Award-winning private wine reserve", "Private wellness spa & tennis arenas", "Professional-grade photography studio", "Gourmet multi-course visual dining", "Private game vehicles & trackers"],
    partnerTier: "Ultra-Bespoke Global Sovereign Tier",
    imageSeed: "singita_sasakwa"
  }
];
