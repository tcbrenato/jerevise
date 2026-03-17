import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UEModule from './pages/UEModule'
import Cours from './pages/Cours'
import Flashcards from './pages/Flashcards'
import Quiz from './pages/Quiz'
import Stats from './pages/Stats'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Routes publiques */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Routes protégées (inscription obligatoire) */}
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/stats" element={<ProtectedRoute><Stats /></ProtectedRoute>} />
            <Route path="/ue/:id" element={<ProtectedRoute><UEModule /></ProtectedRoute>} />
            <Route path="/ue/:ueId/:matiereId/cours" element={<ProtectedRoute><Cours /></ProtectedRoute>} />
            <Route path="/ue/:ueId/:matiereId/flashcards" element={<ProtectedRoute><Flashcards /></ProtectedRoute>} />
            <Route path="/ue/:ueId/:matiereId/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App