export const supportedSurahs = [
  {
    id: 99,
    number: "99",
    name: "Az-Zalzalah",
    arabicName: "الزلزلة",
    englishName: "The Earthquake",
    verses: 8,
    mood: "Intense",
    moodType: "dread",
    duration: "~2 min",
    palette: ["#0a0a0f", "#1a0a00"],
    glowColor: "var(--color-glow-amber)",
    summary: "Apocalyptic imagery of the earth shaking and testifying to human actions."
  },
  {
    id: 81,
    number: "81",
    name: "At-Takwir",
    arabicName: "التكوير",
    englishName: "The Overthrowing",
    verses: 29,
    mood: "Cosmic",
    moodType: "cosmic",
    duration: "~4 min",
    palette: ["#050508", "#1a1a2e"],
    glowColor: "var(--color-glow-blue)",
    summary: "Powerful cosmic events signaling the Day of Judgment."
  },
  {
    id: 91,
    number: "91",
    name: "Ash-Shams",
    arabicName: "الشمس",
    englishName: "The Sun",
    verses: 15,
    mood: "Reflective",
    moodType: "radiant",
    duration: "~3 min",
    palette: ["#1a1000", "#c9a84c"],
    glowColor: "var(--color-glow-amber)",
    summary: "Oaths by celestial phenomena emphasizing the soul's purification."
  },
  {
    id: 88,
    number: "88",
    name: "Al-Ghashiyah",
    arabicName: "الغاشية",
    englishName: "The Overwhelming",
    verses: 26,
    mood: "Warning",
    moodType: "warning",
    duration: "~4 min",
    palette: ["#1a0000", "#3d0000"],
    glowColor: "var(--color-glow-amber)",
    summary: "A stark contrast between the faces of the humbled and the joyful."
  },
  {
    id: 89,
    number: "89",
    name: "Al-Fajr",
    arabicName: "الفجر",
    englishName: "The Dawn",
    verses: 30,
    mood: "Solemn",
    moodType: "solemn",
    duration: "~5 min",
    palette: ["#0d0d14", "#1a1a2e"],
    glowColor: "var(--color-glow-teal)",
    summary: "Reflections on historical civilizations and the soul's ultimate peace."
  }
];

export const getSurahByNumber = (num) => supportedSurahs.find(s => s.number === num.toString());
