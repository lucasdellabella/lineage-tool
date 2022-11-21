const backs = {
  "Amethyst Mines": "Hailing from the Amethyst Mines",
  "Anuran Bog (Midnight)": "Hailing from the Bogs of the <Anuran Countryside>",
  "Anuran Bog (Noon)": "Hailing from the Bogs of the <Anuran Countryside>",
  "Candles of Mt. Kalfus": "Hailing from the searing apex of Mt. Kalfus",
  "Caps of Mt. Kalfus": "Hailing from the high reaches of Mt. Kalfus",
  "Celestial Navigation": "Hailing from the Osmerian Sea",
  "Dunes of Kathoon": "Hailing from the Dunes of Kathoon",
  "Eddie's Tavern Wall":
    "Part of the tight knit community formed at Eddie’s Tavern",
  "Farewell To The Fallen": "[Farewell to the Fallen]",
  "Fool's Gold": "[Fool’s Gold]",
  Fruitsipper:
    "Having learned to work side-by-side with fruitsippers to achieve their goals",
  "Garden of One Hundred Scents":
    "Some of the few who still guard the Garden of One Hundred Scents",
  "Hope At Last": "Hailing from the the regions surrounding Kharth’s Daggers",
  "Kharth's Daggers": "Hailing from Kharth’s Daggers",
  "Odona's Tears": "Hailing from Odona’s Tears",
  "Stormy Weather":
    "Hailing, shockingly, from within the storms that rumble over the plains of Kharth",
  "The Many-Eyed One": "Surviving their encounter with the Many-Eyed One",
  "The Marble Desert": "Hailing from the harsh Marble Desert",
  "The Tithes of Faith":
    "Part of the community of divers searching for the grave of Akak Gagak",
  "View Through The Thespin Skytram":
    "Hailing from the Rootmason capital city of Thespin",
  "Wanderer's Refuge": "Often found in nearby Wanderer’s Refuge",
  "Widow's Peak": "Hailing from Widow’s Peak",
};

// ("Ruinous Storm");
// ("Runic Inscription");
// ("Shattered Cosmos");
// ("Xanthan Forest");

// ("Mohoan Purification Pond");
// ("Moribund Mists");
// ("Elder Tree's Gaze");

const lefts = {
  "Amoria's Mask": "[Amoria’s Mask]",
  "Blossoming Boutonniere (Marigold)":
    "are known for their strength, vitality, and good fortune.",
  "Blossoming Boutonniere (Rose)":
    "Are known for their love, romance, joy and great luck.",
  "Candescent Crow (Alabaster)": "[Candescent Crow (Alabaster)]",
  "Candescent Crow (Vibrant)": "[Candescent Crow (Vibrant)]",
  "Chef's Toolset":
    "are known for cheffin up the good shit. That good good. Yeah.",
  "Cinderkeep Candelabra":
    "are known to frequent Cinderkeep and consort with the mad wizard Zephyrial.",
  "Clouddrop Basin":
    "are known for frequenting clouddrop basin. Though it’s not clear why.",
  "Conjoined Lacunae": "[Conjoined Lacunae]",
  "Dalia's Reclamation":
    "are known for their strange naturalist burial traditions.",
  "Diver's Temptation":
    "are known to dive deep for treasures and marine resources.",
  "Dune Surfer": "are known for their adept handling of dune surfers.",
  "Explorer's Inventory":
    "are known for their skill at retrieving long lost relics… via methods savory and unsavory.",
  "Flashmarble Fragment (Skywinder - Candescent)":
    "are known for their exceptional candescent flashmarble craftsmanship.",
  "Flashmarble Fragment (Skywinder - Deep Forest)":
    "are known for their exceptional deep forest flashmarble craftsmanship.",
  "Flashmarble Fragment (Skywinder - Frost)":
    "are known for their exceptional frost flashmarble craftsmanship.",
  "Flashmarble Fragment (Skywinder - Marble)":
    "are known for their exceptional flashmarble craftsmanship.",
  "Fruit Incubator":
    "are known for their stewardship of unripe Fruit Folk, and assisting with incubation when necessary.",
  "Goatlich's Prophecy":
    "mentioned in goatlich’s prophecy foretelling the end of days.",
  "Groodu's Compassion":
    "owe a debt of gratitude to the Groodu for deliverance in their time of need.",
  Liquidation:
    "are known for their primarily liquid-based diet. Where do they get their protein?",
  "Matriarch's Demise": "[Matriarch’s Demise]",
  "Matriarchal Assertion": "[Matriarchal Assertion]",
  "Mercenary's Armory":
    "are known for their prowess with nearly any form of arms.",
  "Mohoan Lullaby":
    "are known for their captivating music that seems to overwhelm listeners with ecstasy.",
  "Moonlight Condenser":
    "capture moonlight in a moonlight condenser - old technology created by the Gibbun in order to distill moonlight for further processing.",
  Mycoconda:
    "are known for their obsession with decomposition, be it fungi or poison.",
  Primordyceps:
    "have a heavy amount of Primordyceps in their diet. Recently they’ve been feeling a little… different.",
  "Rootmason Flute":
    "are known far and wide for their affinity with all manner of woodwind.",
  "Sword of the Prophet":
    "have passed down an interesting looking sword for generations.",
  "Thespin Skytram":
    "were involved in the initial conception of the Thespin Skytram.",
  "Varicose Vines":
    "are known for their near-fanatical devotion to becoming one with nature.",
};

const rights = {
  '"The Hour of Abiogenesis"':
    "Now biding their time, secretly bestowing life upon inanimate things",
  "Anuran Fireflies":
    "Now guiding travelers that attempt to cross the continent in the dead of night",
  "Astronomer's Console":
    "Now armed with knowledge of the stars, moons, and tides",
  "Blinkrabbit's Paw": "Now armed with good fortune and high spirits",
  "Chronomancer's Focus":
    "Now almost finished uncovering the details about chronomancers and their magics from aeons past",
  "Clouddrop Wisps":
    "Now almost finished uncovering the origin of the mysterious wisps of Clouddrop Basin",
  Compressors: "Now almost finished domesticating compressor cats",
  "Gibbun Staff":
    "Now consorting and aligning themselves with the Gibbun leadership",
  "Goblets of Skourd": "Now lying in boredom, hungering for war",
  "Golden Goose":
    "Now finally living a life of leisure as their ‘investments’ grow their wealth beyond imagining",
  "Igneous Axe":
    "Now serving as full-time mercenaries (and part-time arsonists)",
  "Mineral Mold":
    "Now a member of a group researching the intersection of Groodu and Rootmason magics",
  "Mohoan Cocoon": "Now serving as caretakers of Mohoan Larvae",
  "Oasis Crab": "Now residing atop the oasis crabs of Kathoon",
  "Prophet's Clasp": "[Prophet’s Clasp]",
  "Rusted Bindings": "Now finally free from the prison cells of the Gibbun",
  "Satura's Experimental Shield":
    "Now serving as guards-for-hire using their high-tech defensive equipment",
  "Satura's Tri-Tipped Bow": "Now the defacto kings of the nearby woodlands",
  "Sequin Birds":
    "Now equipped with detailed knowledge of all the birds across Kharth, and the ability to communicate with them",
  "Siren Spider":
    "Now working as diviners - those who navigate the dreams of others in order to heal mental afflictions",
  "Skywinder Symbol": "Now operating as members of the Skywinder Cult",
  "Staff of Grace": "Now biding their time as healers in nearby villages",
  "Summoner's Palette":
    "Now renowned portrayers - those who are able to summon their imaginings into reality via brushstroke",
  "Sundew Lotus": "[Sundew Lotus]",
  Terratides:
    "Now experienced navigators that captain liquefaction based transport systems",
  "The Osmerian Anomaly":
    "One of the few who witnessed the Osmerian Anomaly, and equipped with the knowledge of what may have actually happened",
  "[Forgotten]": "[Forgotten] -> handmade description",
};

const createCrestName = ({ crestName, leftName, backName, rightName }) => {
  if (false) {
  } else {
    return `${backs[backName]}, the ${crestName} ${lefts[leftName]} ${rights[rightName]}, they look towards the future with a glint in their eye. Their future is bright. The only question: what comes next?`;
  }
};

console.log(
  createCrestName({
    crestName: "Mandrills of the Dark Caverns",
    leftName: "Cinderkeep Candelabra",
    rightName: "Mineral Mold",
    backName: "Amethyst Mines",
  })
);
