import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SurahExperience from './pages/SurahExperience'
import Bookmarks from './pages/Bookmarks'
import Collections from './pages/Collections'
import AppShell from './components/layout/AppShell'

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah/:id" element={<SurahExperience />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </AppShell>
  )
}

export default App
