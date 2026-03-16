import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useProgress } from '../context/ProgressContext'
import UE1 from '../data/ue1'
import UE2 from '../data/ue2'
import UE3 from '../data/ue3'
import UE4 from '../data/ue4'
import UE5 from '../data/ue5'
import UE6 from '../data/ue6'
import UE7 from '../data/ue7'

const allUEs = { ue1: UE1, ue2: UE2, ue3: UE3, ue4: UE4, ue5: UE5, ue6: UE6, ue7: UE7 }

export default function Flashcards() {
  const { ueId, matiereId } = useParams()
  const navigate = useNavigate()
  const { updateProgress } = useProgress()
  const ue = allUEs[ueId]
  const matiere = ue?.matieres.find(m => m.id === matiereId)

  const storageKey = `jerevise-custom-cards-${matiereId}`

  const [customCards, setCustomCards] = useState(() => {
    const saved = localStorage.getItem(storageKey)
    return saved ? JSON.parse(saved) : []
  })

  const [showAddForm, setShowAddForm] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')
  const [newReponse, setNewReponse] = useState('')
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState([])
  const [unknown, setUnknown] = useState([])
  const [completed, setCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('officiel')

  const officialCards = matiere?.flashcards || []
  const cards = activeTab === 'officiel' ? officialCards : customCards
  const card = cards[current]

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(customCards))
  }, [customCards])

  useEffect(() => {
    setCurrent(0)
    setFlipped(false)
    setKnown([])
    setUnknown([])
    setCompleted(false)
  }, [activeTab])

  if (!ue || !matiere) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-slate-400">Contenu introuvable</p>
    </div>
  )

  const handleAddCard = () => {
    if (!newQuestion.trim() || !newReponse.trim()) return
    const newCard = {
      id: Date.now(),
      question: newQuestion.trim(),
      reponse: newReponse.trim(),
    }
    setCustomCards([...customCards, newCard])
    setNewQuestion('')
    setNewReponse('')
    setShowAddForm(false)
  }

  const handleDeleteCard = (cardId) => {
    setCustomCards(customCards.filter(c => c.id !== cardId))
    if (current >= customCards.length - 1) setCurrent(0)
  }

  const handleKnow = () => {
    const newKnown = [...known, card.id]
    setKnown(newKnown)
    next(newKnown, unknown)
  }

  const handleUnknow = () => {
    const newUnknown = [...unknown, card.id]
    setUnknown(newUnknown)
    next(known, newUnknown)
  }

  const next = (k, u) => {
    setFlipped(false)
    setTimeout(() => {
      if (current < cards.length - 1) {
        setCurrent(current + 1)
      } else {
        const finalScore = Math.round((k.length / cards.length) * 100)
        if (activeTab === 'officiel') updateProgress(ue.id, 'flashcards', finalScore)
        setCompleted(true)
      }
    }, 200)
  }

  const restart = () => {
    setCurrent(0)
    setFlipped(false)
    setKnown([])
    setUnknown([])
    setCompleted(false)
  }

  if (completed) {
    const score = Math.round((known.length / cards.length) * 100)
    return (
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center w-full"
        >
          <div className="text-6xl mb-4">{score >= 70 ? '🎉' : '💪'}</div>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Session terminée !</h2>
          <p className="text-slate-400 text-sm mb-6">
            Tu as révisé {cards.length} flashcards
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8 max-w-xs mx-auto">
            <div className="rounded-xl p-4 border border-white/10" style={{ background: '#1E293B' }}>
              <p className="text-2xl font-bold text-green-400">{known.length}</p>
              <p className="text-slate-400 text-xs mt-1">Je savais ✓</p>
            </div>
            <div className="rounded-xl p-4 border border-white/10" style={{ background: '#1E293B' }}>
              <p className="text-2xl font-bold text-red-400">{unknown.length}</p>
              <p className="text-slate-400 text-xs mt-1">À revoir ✗</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <button onClick={restart} className="w-full py-3 rounded-xl font-medium text-white text-sm" style={{ background: ue.couleur }}>
              🔄 Recommencer
            </button>
            <button onClick={() => navigate(`/ue/${ueId}/${matiereId}/quiz`)} className="w-full py-3 rounded-xl font-medium text-white text-sm" style={{ background: '#F59E0B' }}>
              🧠 Passer au Quiz
            </button>
            <button onClick={() => navigate(`/ue/${ueId}`)} className="w-full py-3 rounded-xl font-medium text-slate-400 text-sm border border-white/10">
              Retour au module
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(`/ue/${ueId}`)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Retour
        </button>
        <span className="text-slate-400 text-sm">{cards.length > 0 ? `${current + 1} / ${cards.length}` : '0 carte'}</span>
      </div>

      {/* Matière */}
      <div className="rounded-xl px-4 py-3 mb-4 border border-white/10" style={{ background: `${ue.couleur}11` }}>
        <div className="flex items-center gap-2">
          <span className="text-lg">{matiere.emoji}</span>
          <p className="text-sm font-medium" style={{ color: ue.couleur }}>{matiere.titre}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5 p-1 rounded-xl border border-white/10" style={{ background: '#1E293B' }}>
        {[
          { id: 'officiel', label: `Officielles (${officialCards.length})` },
          { id: 'custom', label: `Mes cartes (${customCards.length})` },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 py-2 rounded-lg text-xs font-medium transition-all"
            style={{
              background: activeTab === tab.id ? ue.couleur : 'transparent',
              color: activeTab === tab.id ? 'white' : '#64748B'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bouton ajouter */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-white/20 text-slate-400 hover:text-white hover:border-white/40 transition-all text-sm mb-5"
      >
        <span className="text-lg">+</span>
        Ajouter ma propre flashcard
      </button>

      {/* Formulaire ajout */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-2xl p-5 border border-white/10 mb-5 overflow-hidden"
            style={{ background: '#1E293B' }}
          >
            <p className="text-white font-medium text-sm mb-4">✏️ Nouvelle flashcard</p>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-slate-400 text-xs mb-1 block">Question</label>
                <textarea
                  value={newQuestion}
                  onChange={e => setNewQuestion(e.target.value)}
                  placeholder="Écris ta question..."
                  rows={2}
                  className="w-full rounded-xl px-4 py-3 text-sm text-white border border-white/10 resize-none outline-none focus:border-white/30 transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />
              </div>
              <div>
                <label className="text-slate-400 text-xs mb-1 block">Réponse</label>
                <textarea
                  value={newReponse}
                  onChange={e => setNewReponse(e.target.value)}
                  placeholder="Écris la réponse..."
                  rows={2}
                  className="w-full rounded-xl px-4 py-3 text-sm text-white border border-white/10 resize-none outline-none focus:border-white/30 transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm text-slate-400 border border-white/10"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddCard}
                  className="flex-1 py-2.5 rounded-xl text-sm text-white font-medium"
                  style={{ background: ue.couleur }}
                >
                  Ajouter ✓
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Liste des cartes custom */}
      {activeTab === 'custom' && customCards.length > 0 && !completed && (
        <div className="flex flex-col gap-2 mb-5">
          {customCards.map((c, i) => (
            <div
              key={c.id}
              className="flex items-start justify-between rounded-xl px-4 py-3 border border-white/10"
              style={{ background: '#1E293B' }}
            >
              <div className="flex-1 pr-3">
                <p className="text-white text-xs font-medium">{c.question}</p>
                <p className="text-slate-500 text-xs mt-1">{c.reponse}</p>
              </div>
              <button
                onClick={() => handleDeleteCard(c.id)}
                className="text-slate-600 hover:text-red-400 transition-colors flex-shrink-0 text-lg leading-none"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Carte vide */}
      {cards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-4xl mb-3">🃏</p>
          <p className="text-slate-400 text-sm">Aucune carte disponible</p>
          <p className="text-slate-600 text-xs mt-1">Ajoute ta propre flashcard ci-dessus</p>
        </div>
      )}

      {/* Carte flip */}
      {cards.length > 0 && !completed && (
        <>
          <div className="w-full bg-white/10 rounded-full h-1.5 mb-6">
            <motion.div
              animate={{ width: `${((current + 1) / cards.length) * 100}%` }}
              className="h-1.5 rounded-full"
              style={{ background: ue.couleur }}
            />
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <span className="text-green-400 text-sm font-medium">✓ {known.length} sus</span>
            <span className="text-red-400 text-sm font-medium">✗ {unknown.length} à revoir</span>
          </div>

          <div className="flip-card w-full mb-8" style={{ height: '260px' }}>
            <div
              className={`flip-card-inner w-full h-full ${flipped ? 'flipped' : ''}`}
              onClick={() => setFlipped(!flipped)}
            >
              <div className="flip-card-front w-full h-full rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 cursor-pointer" style={{ background: '#1E293B' }}>
                <span className="text-xs px-3 py-1 rounded-full mb-4" style={{ background: `${ue.couleur}22`, color: ue.couleur }}>Question</span>
                <p className="text-white text-center font-medium text-base leading-relaxed">{card.question}</p>
                <p className="text-slate-500 text-xs mt-6">Appuie pour voir la réponse</p>
              </div>
              <div className="flip-card-back w-full h-full rounded-2xl border flex flex-col items-center justify-center p-6 cursor-pointer" style={{ background: `${ue.couleur}18`, borderColor: `${ue.couleur}44` }}>
                <span className="text-xs px-3 py-1 rounded-full mb-4" style={{ background: `${ue.couleur}33`, color: ue.couleur }}>Réponse</span>
                <p className="text-white text-center text-sm leading-relaxed whitespace-pre-line">{card.reponse}</p>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {flipped && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex gap-3"
              >
                <button onClick={handleUnknow} className="flex-1 py-4 rounded-xl font-medium text-sm border-2 border-red-500/40 text-red-400 hover:bg-red-500/10 transition-all">
                  ✗ À revoir
                </button>
                <button onClick={handleKnow} className="flex-1 py-4 rounded-xl font-medium text-sm border-2 text-green-400 hover:bg-green-500/10 transition-all" style={{ borderColor: '#22c55e66' }}>
                  ✓ Je sais !
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

    </div>
  )
}