export interface Highlight {
  id: string;
  slug: string;
  title: string;
  year: string;
  event: string;
  map: string;
  videoUrl: string; // path relative to public, e.g. "/video/s1mple-falling.mp4"
  audioUrl: string; // path relative to public, e.g. "/audio/s1mple-falling.mp3"
  imageUrl: string; // path relative to public, e.g. "/images/s1mple-graffiti.jpg"
  quote: string;
  description: string;
  analysis?: string; // Longer text for the detail page
}

export const highlights: Highlight[] = [
  {
    id: "1",
    slug: "coldzera-jumping-awp",
    title: "Coldzera's Jumping AWP",
    year: "2016",
    event: "MLG Columbus",
    map: "Mirage",
    videoUrl: "/video/placeholder.mp4",
    audioUrl: "/audio/placeholder.mp3",
    imageUrl: "/images/placeholder.jpg",
    quote: "THE JUMPING DOUBLE FROM COLD!",
    description:
      "Marcelo 'coldzera' David's legendary 4K on Mirage B-site, including a jumping double no-scope that turned the tide of the semi-final.",
    analysis:
      "This moment is cemented in CS history not just by the visual improbability, but by the sheer disbelief in the caster's voice. The graffiti on Mirage B-site permanently commemorates this sonic explosion.",
  },
  {
    id: "2",
    slug: "olofmeister-burning-defuse",
    title: "Olofmeister's Burning Defuse",
    year: "2014",
    event: "ESL One Cologne",
    map: "Overpass",
    videoUrl: "/video/placeholder.mp4",
    audioUrl: "/audio/placeholder.mp3",
    imageUrl: "/images/placeholder.jpg",
    quote: "Molotov comes down... he's sticking it!",
    description:
      "Olofmeister sticks the defuse while burning alive in a molotov, winning the round by a tick.",
    analysis:
      "The sound of the ticking bomb, the burning fire, and the crowd's rising roar create a sonic texture of pure tension. The graffiti of an angel in flames immortalizes this sacrifice.",
  },
  // Add more later
];

