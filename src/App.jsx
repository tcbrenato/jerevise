import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UEModule from './pages/UEModule'
import Cours from './pages/Cours'
import Flashcards from './pages/Flashcards'
import Quiz from './pages/Quiz'
import Stats from './pages/Stats'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/ue/:id" element={<UEModule />} />
          <Route path="/ue/:ueId/:matiereId/cours" element={<Cours />} />
          <Route path="/ue/:ueId/:matiereId/flashcards" element={<Flashcards />} />
          <Route path="/ue/:ueId/:matiereId/quiz" element={<Quiz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App