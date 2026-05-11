# See The Quran ✨

![See The Quran Hero](C:\Users\USER\.gemini\antigravity\brain\4b1fadaa-2e85-4bbc-8a2c-03a6037532bb\see_the_quran_hero_1778523010312.png)

> **"A cinematic, immersive journey through the heart of Juz Amma."**

**See The Quran** is a premium web application built for the **Quran Foundation Hackathon 2026**. It transforms the experience of reading and listening to the Quran into a deeply contemplative and cinematic journey. By combining high-fidelity audio, immersive visual atmospheres, and real-time tafsir, the app aims to foster a deeper emotional connection with the Divine word.

## 🌌 The Experience

- **Cinematic Rendering**: A custom scene-driven architecture that adapts the visual atmosphere (nebulae, dawn, intense tremors) to the mood of the Surah.
- **Synced Audio & Tafsir**: Precise timestamp synchronization between recitation, Arabic text, English translation, and Tafsir.
- **Atmospheric Soundscapes**: Carefully curated audio experiences that enhance the emotional weight of each verse.
- **Premium Aesthetics**: A glassmorphic UI built with Tailwind CSS and Framer Motion for smooth, ethereal transitions.

## 📖 Featured Surahs (Juz Amma)

The application currently features 5 powerful Surahs, each with a unique visual and emotional "Mood":

| Surah | Name | Mood | Summary |
| :--- | :--- | :--- | :--- |
| **99** | **Az-Zalzalah** | 🌋 Intense | Apocalyptic imagery of the earth shaking and testifying. |
| **81** | **At-Takwir** | 🌌 Cosmic | Powerful cosmic events signaling the Day of Judgment. |
| **91** | **Ash-Shams** | ☀️ Reflective | Oaths by celestial phenomena emphasizing soul purification. |
| **88** | **Al-Ghashiyah** | ⚠️ Warning | A stark contrast between the faces of the humbled and joyful. |
| **89** | **Al-Fajr** | 🌅 Solemn | Reflections on history and the soul's ultimate peace. |

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend/Auth**: [Firebase](https://firebase.google.com/)
- **APIs**: [Quran Foundation Content APIs](https://api.qurancdn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Quran Foundation API Client ID

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Muayyad822/seethequran.git
   cd seethequran
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory and add your credentials:
   ```env
   VITE_QF_CLIENT_ID=your_client_id
   VITE_QF_CLIENT_SECRET=your_client_secret
   # Firebase Config
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

## 🏗️ Architecture

The project follows a modular structure:
- `src/components/experience`: Core components for the immersive viewer.
- `src/data/scenes`: JSON-based scene configurations for different Surahs.
- `src/services`: Integration layers for Quran Foundation and Firebase.
- `src/hooks`: Custom hooks for audio synchronization and API fetching.

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Built with ❤️ by [Muayyad](https://abdulmuizjimoh.vercel.app) for the Quran Foundation Hackathon 2026.*
