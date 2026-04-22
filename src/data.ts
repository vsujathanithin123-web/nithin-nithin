export interface Character {
  id: string;
  name: string;
  alias: string;
  powers: string[];
  description: string;
  motive?: string;
  connection?: string;
  stats?: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    energy: number;
    fighting: number;
  };
  imageUrl: string;
  type: 'hero' | 'villain';
}

export interface Event {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  source: string;
  summary: string;
}

export const HEROES: Character[] = [
  {
    id: '1',
    name: 'Tony Stark',
    alias: 'Iron Man',
    powers: ['Genius-level intellect', 'Powered armor suit', 'Flight', 'Repulsor Blasts'],
    description: 'The visionary billionaire who built the armor that started it all.',
    stats: { intelligence: 7, strength: 6, speed: 5, durability: 6, energy: 6, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1623939012331-9b935d3ad5bd?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '2',
    name: 'Steve Rogers',
    alias: 'Captain America',
    powers: ['Superhuman strength', 'Agility', 'Indestructible shield', 'Master Strategist'],
    description: 'The moral compass of the Avengers, a man out of time leading the charge for freedom.',
    stats: { intelligence: 4, strength: 3, speed: 2, durability: 3, energy: 1, fighting: 7 },
    imageUrl: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: 's-m-1',
    name: 'Peter Parker',
    alias: 'Spider-Man',
    powers: ['Spider-sense', 'Superhuman strength', 'Wall-crawling', 'Web-swinging'],
    description: 'Your friendly neighborhood hero from Queens, brought into the big leagues by Tony Stark.',
    stats: { intelligence: 4, strength: 4, speed: 3, durability: 3, energy: 1, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '3',
    name: 'Thor Odinson',
    alias: 'God of Thunder',
    powers: ['Weather manipulation', 'Mjolnir/Stormbreaker', 'Immense strength', 'Flight'],
    description: 'The Asgardian prince whose might is matched only by his hammer.',
    stats: { intelligence: 2, strength: 7, speed: 7, durability: 6, energy: 6, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '4',
    name: 'Natasha Romanoff',
    alias: 'Black Widow',
    powers: ['Master spy', 'Expert martial artist', 'Infiltration', 'Marksman'],
    description: 'A former KGB assassin turned world-saving hero with no powers but pure skill.',
    stats: { intelligence: 3, strength: 3, speed: 2, durability: 3, energy: 3, fighting: 6 },
    imageUrl: 'https://images.unsplash.com/photo-1626278664285-f7c8a8d07f1b?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '5',
    name: 'Bruce Banner',
    alias: 'The Hulk',
    powers: ['Immense physical strength', 'Durability', 'Regeneration'],
    description: 'The strongest one there is, fueled by gamma rage and a brilliant scientific mind.',
    stats: { intelligence: 2, strength: 7, speed: 3, durability: 7, energy: 5, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1634128221889-82ed6efdfac3?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '6',
    name: 'Clint Barton',
    alias: 'Hawkeye',
    powers: ['Master archer', 'Expert combatant', 'Trick arrows'],
    description: 'The world\'s greatest marksman who never misses a shot.',
    stats: { intelligence: 3, strength: 2, speed: 2, durability: 2, energy: 1, fighting: 6 },
    imageUrl: 'https://images.unsplash.com/photo-1634828221818-503587f33d02?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '7',
    name: 'Wanda Maximoff',
    alias: 'Scarlet Witch',
    powers: ['Chaos magic', 'Reality warping', 'Telekinesis', 'Mind manipulation'],
    description: 'One of the most powerful beings in the multiverse, capable of bending reality itself.',
    stats: { intelligence: 3, strength: 2, speed: 2, durability: 2, energy: 7, fighting: 3 },
    imageUrl: 'https://images.unsplash.com/photo-1636572481914-a07d36917486?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '8',
    name: 'Stephen Strange',
    alias: 'Doctor Strange',
    powers: ['Master of the Mystic Arts', 'Astral projection', 'Dimensional manipulation'],
    description: 'The Sorcerer Supreme and guardian of the New York Sanctum.',
    stats: { intelligence: 4, strength: 1, speed: 2, durability: 2, energy: 6, fighting: 3 },
    imageUrl: 'https://images.unsplash.com/photo-1542601906970-30f9d2d79afb?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '9',
    name: 'T\'Challa',
    alias: 'Black Panther',
    powers: ['Enhanced strength/speed', 'Vibranium suit', 'Genius intellect'],
    description: 'The King of Wakanda and protector of its sacred traditions.',
    stats: { intelligence: 5, strength: 3, speed: 2, durability: 3, energy: 3, fighting: 5 },
    imageUrl: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '10',
    name: 'Vision',
    alias: 'The Synthezoid',
    powers: ['Density manipulation', 'Flight', 'Solar energy beams', 'Hacking'],
    description: 'An advanced artificial lifeform powered by the Mind Stone.',
    stats: { intelligence: 4, strength: 5, speed: 3, durability: 6, energy: 6, fighting: 3 },
    imageUrl: 'https://images.unsplash.com/photo-1620336655055-188df0a31302?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '11',
    name: 'Scott Lang',
    alias: 'Ant-Man',
    powers: ['Size manipulation', 'Giant-man growth', 'Communication with ants'],
    description: 'A former thief who became a size-shifting hero using Hank Pym\'s technology.',
    stats: { intelligence: 3, strength: 3, speed: 2, durability: 2, energy: 1, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  },
  {
    id: '12',
    name: 'Sam Wilson',
    alias: 'Falcon / Captain America',
    powers: ['Mechanical wings', 'Redwing drone', 'Advanced combat training'],
    description: 'A skilled pararescueman who took up the mantle of Captain America.',
    stats: { intelligence: 3, strength: 2, speed: 3, durability: 2, energy: 1, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600',
    type: 'hero'
  }
];

export const VILLAINS: Character[] = [
  {
    id: '101',
    name: 'Thanos',
    alias: 'The Mad Titan',
    powers: ['Infinite power with Stones', 'Super strength', 'Strategic genius'],
    description: 'The titan who sought to bring balance to the universe through genocide.',
    motive: 'Universal sustainability through the eradication of half of all life.',
    connection: 'Primary antagonist of the Infinity Saga; snapped the Avengers into a 5-year exile.',
    stats: { intelligence: 6, strength: 7, speed: 4, durability: 6, energy: 6, fighting: 6 },
    imageUrl: 'https://images.unsplash.com/photo-1501432377862-3d0432b87a14?auto=format&fit=crop&q=80&w=600',
    type: 'villain'
  },
  {
    id: '102',
    name: 'Loki Laufeyson',
    alias: 'God of Mischief',
    powers: ['Illusion casting', 'Shapeshifting', 'Teleportation'],
    description: 'The adopted brother of Thor, driven by envy and a throne complex.',
    motive: 'Gaining a throne and proving himself superior to his brother, Thor.',
    connection: 'The reason the Avengers first assembled to defend New York.',
    stats: { intelligence: 5, strength: 2, speed: 2, durability: 2, energy: 5, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=600',
    type: 'villain'
  },
  {
    id: '103',
    name: 'Ultron',
    alias: 'The Peacekeeping Program',
    powers: ['Technopathy', 'Vibranium body', 'Absolute intelligence'],
    description: 'A peacekeeping A.I. that concluded humanity was the greatest threat to peace.',
    motive: 'Evolution of life on Earth by destroying the current "failed" iteration.',
    connection: 'Created by Tony Stark and Bruce Banner using the Mind Stone.',
    stats: { intelligence: 7, strength: 6, speed: 3, durability: 7, energy: 6, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c237ba8269?auto=format&fit=crop&q=80&w=600',
    type: 'villain'
  },
  {
    id: '104',
    name: 'Kang the Conqueror',
    alias: 'He Who Remains',
    powers: ['Time travel', 'Multiversal technology', 'Energy manipulation'],
    description: 'A multiversal traveler seeking to conquer all timelines.',
    motive: 'To prevent his other variants from destroying the multiverse through total control.',
    connection: 'The next massive multiversal threat facing the Avengers across time.',
    stats: { intelligence: 7, strength: 3, speed: 2, durability: 3, energy: 4, fighting: 4 },
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600',
    type: 'villain'
  }
];

export const TIMELINE: Event[] = [
  { id: 't1', year: '2012', title: 'The Battle of New York', description: 'The Avengers unite for the first time to stop the Chitauri invasion.' },
  { id: 't2', year: '2015', title: 'Age of Ultron', description: 'Tony Stark\'s peace-keeping program turns into a global threat.' },
  { id: 't3', year: '2018', title: 'The Snap', description: 'Thanos successfully wipes out half of all life in the universe.' },
  { id: 't4', year: '2023', title: 'The Blip', description: 'The Avengers travel through time to rescue the fallen.' }
];

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Iron Man Mark 85 Helmet', price: 299.99, category: 'Replica', imageUrl: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?auto=format&fit=crop&q=80&w=400' },
  { id: 'p2', name: 'Captain America Shield', price: 150.00, category: 'Gear', imageUrl: 'https://images.unsplash.com/photo-1527843812948-a8c2ddd2fb68?auto=format&fit=crop&q=80&w=400' },
  { id: 'p3', name: 'Avengers Logo Hoodie', price: 45.00, category: 'Apparel', imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400' }
];

export const NEWS: NewsItem[] = [
  { id: 'n1', date: 'April 20, 2026', title: 'New Threat Detected in Multiverse', source: 'Daily Bugle', summary: 'Strange anomalies reported in downtown NYC.' },
  { id: 'n2', date: 'April 18, 2026', title: 'Stark Industries Announces Clean Energy Initiative', source: 'Forbes', summary: 'Pepper Potts unveils the new arc reactor for public cities.' }
];

export const QUIZ_QUESTIONS = [
  {
    question: "What is Captain America's shield primarily composed of?",
    options: ["Adamantium", "Vibranium", "Titanium-Steel Alloy", "Promethium"],
    correctAnswer: "Vibranium"
  },
  {
    question: "Which S.H.I.E.L.D. director is known for the original 'Avengers Initiative'?",
    options: ["Maria Hill", "Alexander Pierce", "Nick Fury", "Phil Coulson"],
    correctAnswer: "Nick Fury"
  },
  {
    question: "What is the name of Thor's enchanted hammer?",
    options: ["Stormbreaker", "Mjolnir", "Gungnir", "Jarnbjorn"],
    correctAnswer: "Mjolnir"
  },
  {
    question: "Tony Stark's first Iron Man suit was built in what location?",
    options: ["Stark Tower", "The Cave", "The Malibu Mansion", "Avengers Compound"],
    correctAnswer: "The Cave"
  },
  {
    question: "Which infinity stone was contained within the Tesseract?",
    options: ["Space Stone", "Mind Stone", "Power Stone", "Time Stone"],
    correctAnswer: "Space Stone"
  },
  {
    question: "Who was the first Avenger to be officially recorded in the timeline?",
    options: ["Iron Man", "The Hulk", "Captain America", "Ant-Man"],
    correctAnswer: "Captain America"
  },
  {
    question: "What is the secret identity of the Black Widow?",
    options: ["Carol Danvers", "Natasha Romanoff", "Wanda Maximoff", "Peggy Carter"],
    correctAnswer: "Natasha Romanoff"
  },
  {
    question: "Which character uses the 'Hulkbuster' armor in Age of Ultron?",
    options: ["Bruce Banner", "Steve Rogers", "Tony Stark", "James Rhodes"],
    correctAnswer: "Tony Stark"
  },
  {
    question: "What is the name of the AI that Tony Stark created after JARVIS was destroyed?",
    options: ["ULTRON", "FRIDAY", "EDITH", "KAREN"],
    correctAnswer: "FRIDAY"
  },
  {
    question: "Where is the home of Black Panther and the source of Vibranium?",
    options: ["Asgard", "Xandar", "Wakanda", "Sokovia"],
    correctAnswer: "Wakanda"
  },
  {
    question: "Who is the god of mischief and Thor's adopted brother?",
    options: ["Hela", "Loki", "Malekith", "Surteur"],
    correctAnswer: "Loki"
  },
  {
    question: "What rare element powers the first Arc Reactor?",
    options: ["Vibranium", "Palladium", "Iridium", "Uranium"],
    correctAnswer: "Palladium"
  },
  {
    question: "Which Avenger is a master of the Mystic Arts and guardian of the New York Sanctum?",
    options: ["Vision", "Spider-Man", "Doctor Strange", "Falcon"],
    correctAnswer: "Doctor Strange"
  },
  {
    question: "What is the name of the organization that Captain America fought during WWII?",
    options: ["A.I.M.", "H.Y.D.R.A.", "The Hand", "The Ten Rings"],
    correctAnswer: "H.Y.D.R.A."
  },
  {
    question: "Which Avenger was previously an Air Force pararescueman?",
    options: ["Clint Barton", "Sam Wilson", "James Rhodes", "Scott Lang"],
    correctAnswer: "Sam Wilson"
  },
  {
    question: "What is the real name of the character known as Falcon?",
    options: ["Sam Wilson", "Bucky Barnes", "Clint Barton", "Nick Fury"],
    correctAnswer: "Sam Wilson"
  },
  {
    question: "Who is the daughter of Thanos and sister of Nebula?",
    options: ["Proxima Midnight", "Gamora", "Mantiss", "Hela"],
    correctAnswer: "Gamora"
  },
  {
    question: "What is the name of the artificial intelligence that became Vision?",
    options: ["Ultron", "JARVIS", "FRIDAY", "EDITH"],
    correctAnswer: "JARVIS"
  },
  {
    question: "Which Avenger can shrink and grow in size using Pym Particles?",
    options: ["Vision", "The Wasp", "Ant-Man", "Hawkeye"],
    correctAnswer: "Ant-Man"
  },
  {
    question: "What is the primary motive of the Mad Titan, Thanos?",
    options: ["Aesthetics", "Universal Balance", "Immortality", "Chaos"],
    correctAnswer: "Universal Balance"
  }
];
