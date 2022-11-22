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
  Fruitsipper:
    "Having learned to work side-by-side with fruitsippers to achieve their goals",
  "Garden of One Hundred Scents":
    "Some of the few who still guard the Garden of One Hundred Scents",
  "Kharth's Daggers (Sunset)":
    "Hailing from the the regions surrounding Kharth’s Daggers",
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
  "Wanderer's Refuge": "Often found in and around Wanderer’s Refuge",
  "Widow's Peak": "Hailing from Widow’s Peak",
  "Rising Gemlanterns": "Hailing from the fjords of Wuund",
  "Xanthan Forest":
    "Hailing from the absurd Xanthan Forest, where the small is big and the big is small",
  // Different
  "Elder Tree": (name) =>
    `Constantly navigating the upper reaches of the Elder Tree, the ${name} were forced to survive in a treacherous environment. They're`,
  "Mohoan Purification Pond": (name) =>
    `Receiving aid from the Mohoe in a time of great need, the ${name} were left with a deep seated gratitude towards the Mohoe. They're`,
  "Moribund Mists": (name) =>
    `After losing many family members to decay and frailty within the Moribund Mists, those of the ${name} who made it out are strong. And certainly stronger than they look. They're`,
  "Ruinous Storm": (name) =>
    `Surviving a hellish meteor shower early in the family history, are the ${name} blessed or cursed? They're`,
  "Runic Inscription": (name) =>
    `There are Rootmason carvings all over the heirlooms of the ${name}. Why? How? They're`,
  "Treasure Chamber": (name) =>
    `Stumbling into lost treasure, the ${name} used the wealth well and quickly rose in stature to local royalty. They're`,
  "Shattered Cosmos": (name) =>
    `Seemingly appearing out of thin air, the ${name} aren’t even sure where they themselves are from. Without a known heritage to lean on, they identify as children of the cosmos. They're`,
};
/**
 * If not mohoe

Receiving aid from the Mohoe in a time of great need, the ___ were left with a deep seated gratitude towards the Mohoe. They’re <rest>

If mohoe

Hailing from the woods surrounding the legendary Mohoan purification ponds,
 */

//[Forgotten] -> handmade description

const lefts = {
  "Amoria's Mask":
    "are known for their belief and allegiance to the semi-sentient forest, Amoria",
  "Blossoming Boutonniere (Marigold)":
    "are known for their strength, vitality, and good fortune.",
  "Blossoming Boutonniere (Rose)":
    "are known for their love, romance, joy and great luck.",
  "Candescent Crow (Alabaster)":
    "are renowned for their ability to nullify magic, and travel unseen even amidst extraordinary mages.",
  "Candescent Crow (Vibrant)":
    "are known as handlers, friends of candescent crows, and have since developed a sixth sense to detect nearby magic use.",
  "Chef's Toolset":
    "are known for cheffin up the good shit. That good good. Yeah.",
  "Cinderkeep Candelabra":
    "are known to frequent Cinderkeep and consort with the mad wizard Zephyrial.",
  "Clouddrop Basin":
    "are known for frequenting clouddrop basin. Though it’s not clear why.",
  Soothounds:
    "are known for their skill in shadow magic. Specifically moving from shadow and shadow, smuggling goods within the shadows of clueless civilians.",
  "Dalia's Reclamation":
    "are known for their strange naturalist burial traditions.",
  "Diver's Temptation":
    "are known to dive deep for treasures and marine resources.",
  "Dune Surfer": "are known for their adept handling of dune surfers.",
  "Explorer's Inventory":
    "are known for their skill at retrieving long lost relics… via methods savory and unsavory",
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
  "Regicidal Edge":
    "might have… killed their former house leader? And that worries some people? Maybe? Yikes. Stay away from these guys.",
  "Pendant of Cold Fury":
    "are known for the lengths they’ll go to get their due. Over both injustice and insult.",
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
    "Now finished uncovering the origin of the Clouddrop wisps",
  Compressors: "Now having successfully domesticated compressor cats",
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
  "Prophet's Clasp":
    "Now, after unfurling a cursed scroll and discovering secrets few others in Kharth know",
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
  "Sundew Lotus":
    "Now, blessed with a sundew lotus due to their ties with the Groodu",
  Terratides:
    "Now experienced navigators that captain liquefaction-based transport systems",
  "The Osmerian Anomaly":
    "One of the few who witnessed the Osmerian Anomaly, and equipped with the knowledge of what may have actually happened",
  "[Forgotten]": "[Forgotten] -> handmade description",
};

const createCrestDescription = ({
  crestName,
  leftName,
  backName,
  rightName,
}) => {
  if (
    [
      "Elder Tree",
      "Mohoan Purification Pond",
      "Moribund Mists",
      "Ruinous Storm",
      "Runic Inscription",
      "Treasure Chamber",
      "Shattered Cosmos",
    ].includes(backName)
  ) {
    return `${backs[backName](crestName)} ${lefts[leftName]} ${
      rights[rightName]
    }, they look towards the future with a glint in their eye. Their future is bright. The only question: what comes next?`;
  } else if (["[Forgotten]"].includes(rightName)) {
    return `MANUAL`;
  } else {
    return `${backs[backName]}, the ${crestName} ${lefts[leftName]} ${rights[rightName]}, they look towards the future with a glint in their eye. Their future is bright. The only question: what comes next?`;
  }
};

module.exports = {
  createCrestDescription,
};
