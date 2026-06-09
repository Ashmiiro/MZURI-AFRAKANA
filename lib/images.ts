const IMAGE_MAPPING: Record<string, string> = {
  // Hero / General backdrops
  "safari_land": "https://lh3.googleusercontent.com/d/1-ciPfaD1DbeVAKNuaXlL6IN-EBuDNDy3",
  
  // Destinations
  "uganda_general": "https://lh3.googleusercontent.com/d/114Me01XhETLn6fSrlg11I1Fhari0Zort",
  "rwanda_hills": "https://lh3.googleusercontent.com/d/18ujQ6yW8Bez3ojPkAgAQeulDdCjqhOn-",
  "kenya_mara": "https://lh3.googleusercontent.com/d/1K7kuX1-zpQS8iLHVzOriwad8_6OhFKi2",
  "tanzania_serengeti": "https://lh3.googleusercontent.com/d/1LJQmb2VAqoqHyC6iK8e3PvDzrScayAE5",
  
  // Itineraries
  "river_nile": "https://lh3.googleusercontent.com/d/1VWDGHyFRb7U_jfSnEWmPsHYScdEUETvG",
  "gorilla_bwindi": "https://lh3.googleusercontent.com/d/1Y2c3UgTpxUw0I-fdyzoKnzCVaWhtLm7O",
  "kidepo_valley": "https://lh3.googleusercontent.com/d/1_RzKFW3ABbQSmTnKzGZNsHkCzNKIKgdn",
  "masai_mara": "https://lh3.googleusercontent.com/d/1dirOnWVBZvD8OMuOtu4t2iIwajt0_57c",
  "chimp_kibale": "https://lh3.googleusercontent.com/d/1dx_LTZM2r7dDVuALmNBBXVhiAo8cboo7",
  
  // Other Sections / Highlights
  "ugandaculture": "https://lh3.googleusercontent.com/d/1e-XjpDICFyz1yR4r1Nwg52PawoBoleY0",
  "lion_video": "https://lh3.googleusercontent.com/d/1snzYJ7oqvZ8ePCCB4U55Ih0kda5ks9FF",
  
  // Partner Lodges
  "clouds_lodge": "https://lh3.googleusercontent.com/d/1tArQzjaPsMk_xfOEyJizP1J6fmQTiV1O",
  "nile_safari_lodge": "https://lh3.googleusercontent.com/d/1VWDGHyFRb7U_jfSnEWmPsHYScdEUETvG", // Source of the soul river
  "chobe_lodge": "https://lh3.googleusercontent.com/d/1-ciPfaD1DbeVAKNuaXlL6IN-EBuDNDy3", // Safari land / hero
  "paramount_estates": "https://lh3.googleusercontent.com/d/114Me01XhETLn6fSrlg11I1Fhari0Zort", // Uganda general
  "gorillas_nest": "https://lh3.googleusercontent.com/d/114Me01XhETLn6fSrlg11I1Fhari0Zort", // Rwanda hills
  "wilderness_camp": "https://lh3.googleusercontent.com/d/18ujQ6yW8Bez3ojPkAgAQeulDdCjqhOn-", // Rwanda hills secondary
  "lemala_camp": "https://lh3.googleusercontent.com/d/1K7kuX1-zpQS8iLHVzOriwad8_6OhFKi2", // Kenya mara
  "singita_sasakwa": "https://lh3.googleusercontent.com/d/1LJQmb2VAqoqHyC6iK8e3PvDzrScayAE5", // Tanzania Serengeti
};

export function getSafariImage(seed: string): string {
  const cleanSeed = seed ? seed.trim() : "";
  if (IMAGE_MAPPING[cleanSeed]) {
    return IMAGE_MAPPING[cleanSeed];
  }
  
  // Fallbacks: Map by matching keywords or pick a stable fallback from our 13 high-quality images
  const lowercase = cleanSeed.toLowerCase();
  if (lowercase.includes("uganda")) return IMAGE_MAPPING["uganda_general"];
  if (lowercase.includes("rwanda") || lowercase.includes("gorilla")) return IMAGE_MAPPING["gorilla_bwindi"];
  if (lowercase.includes("kenya") || lowercase.includes("mara")) return IMAGE_MAPPING["kenya_mara"];
  if (lowercase.includes("tanzania") || lowercase.includes("serengeti")) return IMAGE_MAPPING["tanzania_serengeti"];
  if (lowercase.includes("chimp") || lowercase.includes("kibale")) return IMAGE_MAPPING["chimp_kibale"];
  if (lowercase.includes("nile") || lowercase.includes("river") || lowercase.includes("water")) return IMAGE_MAPPING["river_nile"];
  if (lowercase.includes("valley") || lowercase.includes("kidepo")) return IMAGE_MAPPING["kidepo_valley"];
  
  // Ultimate default is the hero landscape
  return IMAGE_MAPPING["safari_land"];
}
