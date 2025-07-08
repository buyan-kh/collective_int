import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { HomePage } from './pages/HomePage'
import { DashboardPage } from './pages/DashboardPage'
import { DreamJournalPage } from './pages/DreamJournalPage'
import { PersonalityPage } from './pages/PersonalityPage'
import { MoodTrackingPage } from './pages/MoodTrackingPage'
import { ShadowWorkPage } from './pages/ShadowWorkPage'
import { ArchetypePage } from './pages/ArchetypePage'
import { CommunityPage } from './pages/CommunityPage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dreams" element={<DreamJournalPage />} />
        <Route path="/personality" element={<PersonalityPage />} />
        <Route path="/mood" element={<MoodTrackingPage />} />
        <Route path="/shadow-work" element={<ShadowWorkPage />} />
        <Route path="/archetypes" element={<ArchetypePage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </div>
  )
}

export default App