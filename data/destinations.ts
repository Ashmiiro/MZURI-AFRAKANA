export interface DestinationInfo {
  id: string;
  name: string;
  country: string;
  highlights: string[];
  description: string;
  tagline: string;
  imageSeed: string;
}

export const DestinationsData: DestinationInfo[] = [
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
    description: "Kenya represents the golden-age romance of the classic African safari. Its endless acacia plains are home to some of the greatest wildlife densities on Earth, culminated in the grand spectacle of the annual Great Wildebeest Migration. With custom-outfitted, private land excursions and flights coordinated by Mzuri, Kenya is an indispensable extension for those wishing to compare Uganda’s lush rainforests with the grand plains of cinematic lore."
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
