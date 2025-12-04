export interface Highlight {
  id: string;
  title: string;
  player: string;
  event: string;
  year: string;
  map: string;
  description: string;
  quote: string;
  audioSrc?: string; // Placeholder for audio path
  videoPoster?: string; // Placeholder for image
}

export const highlights: Highlight[] = [
  {
    id: "01",
    title: "The Jumping Double",
    player: "coldzera",
    event: "MLG Columbus",
    year: "2016",
    map: "Mirage",
    quote: "Oh! The jumping double from Cold! What is going on right now?!",
    description: "A moment that defied physics and probability, shifting the momentum of a major semi-final and immortalizing a graffiti on the B-site walls.",
  },
  {
    id: "02",
    title: "The Big Apple Snax",
    player: "Snax",
    event: "ESL One New York",
    year: "2016",
    map: "Cobblestone",
    quote: "The Big Apple and Snax is hungry!",
    description: "A 1v4 pistol round clutch that showcased the intuitive brilliance of the Virtus.pro veteran in a high-stakes grand final.",
  },
  {
    id: "03",
    title: "Happy's Deagle Ace",
    player: "Happy",
    event: "DreamHack Open London",
    year: "2015",
    map: "Inferno",
    quote: "Oh and another one! And a third!",
    description: "A sequence of mechanical perfection and timing through the smoke, creating one of the most viral clips in esports history.",
  },
  {
    id: "04",
    title: "Stewie's B-Site Hold",
    player: "Stewie2K",
    event: "ELEAGUE Major Boston",
    year: "2018",
    map: "Inferno",
    quote: "But look at the time! ... Stewie's won the round!",
    description: "The clutch that saved Cloud9 from elimination and propelled them to become the first North American Major champions.",
  },
];

