export interface Highlight {
  id: string;
  title: string;
  player: string;
  event: string;
  year: string;
  map: string;
  description: string;
  quote: string;
  audioSrc?: string; // Path to local audio file in public/audio
  youtubeId?: string; // YouTube Video ID
  videoPoster?: string; // Placeholder for image
}

export const highlights: Highlight[] = [
  {
    id: "01",
    title: "The Clutch of a Lifetime",
    player: "cadiaN",
    event: "ESL Pro League S13",
    year: "2021",
    map: "Mirage",
    quote: "You can't do that, cadiaN! You can't do that!",
    description: "With no armor and a P250, cadiaN wins a 1v4 grand final clutch that defies all logic, securing the trophy for Heroic in the most dramatic fashion possible.",
    youtubeId: "5vb90Rst5AA",
    audioSrc: "/audio/cadian.mp3"
  },
  {
    id: "02",
    title: "The P250 Miracle",
    player: "ZywOo",
    event: "IEM Beijing",
    year: "2020",
    map: "Mirage",
    quote: "He's doing it with a P250! ZywOo is unstoppable!",
    description: "In a pistol round against NaVi, ZywOo showcases superhuman tracking and positioning, dismantling four opponents with just a pistol and 9 HP.",
    youtubeId: "z5IRTWrEC-U",
    audioSrc: "/audio/zywoo.mp3"
  },
  {
    id: "03",
    title: "The Donk Show",
    player: "donk",
    event: "IEM Katowice",
    year: "2024",
    map: "Nuke",
    quote: "He is just walking through them! Donk is playing a different game!",
    description: "The rookie sensation donk announces his arrival on the big stage with a fearless 1v5 ace clutch, aggressively hunting down FaZe Clan one by one.",
    youtubeId: "VyCImf0Nn6k",
    audioSrc: "/audio/donk.mp3"
  },
  {
    id: "04",
    title: "1v5 to Save the Dream",
    player: "refrezh",
    event: "ESL Pro League S14",
    year: "2021",
    map: "Inferno",
    quote: "AND HE DOES IT! REFREZH SAVES HEROIC!",
    description: "With Heroic facing elimination on match point, refrezh pulls off an impossible 1v5 clutch against Liquid, forcing overtime and eventually winning the series.",
    youtubeId: "X91yLQmj_tA",
    audioSrc: "/audio/refrezh.mp3"
  },
];
