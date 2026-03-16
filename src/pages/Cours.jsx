import { useState } from 'react'
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

export default function Cours() {
  const { ueId, matiereId } = useParams()
  const navigate = useNavigate()
  const { updateProgress } = useProgress()
  const ue = allUEs[ueId]
  const matiere = ue?.matieres.find(m => m.id === matiereId)
  const cours = matiere?.cours || []

  const [current, setCurrent] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [search, setSearch] = useState('')
  const [searchMode, setSearchMode] = useState(false)

  if (!ue || !matiere) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-slate-400">Contenu introuvable</p>
    </div>
  )

  const lecon = cours[current]

  const filteredCours = cours.filter(c =>
    c.titre.toLowerCase().includes(search.toLowerCase()) ||
    c.contenu.toLowerCase().includes(search.toLowerCase())
  )

  const handleNext = () => {
    if (current < cours.length - 1) {
      setCurrent(current + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setCompleted(true)
      updateProgress(ue.id, 'cours', true)
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center w-full">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Cours terminé !</h2>
          <p className="text-slate-400 text-sm mb-8">
            Tu as parcouru toutes les leçons de <span style={{ color: ue.couleur }}>{matiere.titre}</span>
          </p>
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <button onClick={() => navigate(`/ue/${ueId}/${matiereId}/flashcards`)} className="w-full py-3 rounded-xl font-medium text-white text-sm" style={{ background: '#06B6D4' }}>
              🃏 Continuer avec les Flashcards
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
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setSearchMode(!searchMode); setSearch('') }}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          {!searchMode && <span className="text-slate-400 text-sm">{current + 1} / {cours.length}</span>}
        </div>
      </div>

      {/* Barre de recherche */}
      <AnimatePresence>
        {searchMode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 overflow-hidden"
          >
            <input
              autoFocus
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher dans les cours..."
              className="w-full rounded-xl px-4 py-3 text-sm text-white border border-white/10 outline-none focus:border-white/30 transition-all"
              style={{ background: '#1E293B' }}
            />
            {search && (
              <div className="mt-3 flex flex-col gap-2">
                {filteredCours.length === 0 ? (
                  <p className="text-slate-500 text-sm text-center py-4">Aucun résultat pour "{search}"</p>
                ) : (
                  filteredCours.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setCurrent(cours.findIndex(x => x.id === c.id))
                        setSearchMode(false)
                        setSearch('')
                      }}
                      className="text-left rounded-xl px-4 py-3 border border-white/10 hover:border-white/20 transition-all"
                      style={{ background: '#1E293B' }}
                    >
                      <p className="text-white text-sm font-medium">{c.titre}</p>
                      <p className="text-slate-500 text-xs mt-1 line-clamp-2">
                        {c.contenu.replace(/\n/g, ' ').substring(0, 80)}...
                      </p>
                    </button>
                  ))
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matière titre */}
      <div className="rounded-xl px-4 py-3 mb-4 border border-white/10" style={{ background: `${ue.couleur}11` }}>
        <div className="flex items-center gap-2">
          <span className="text-lg">{matiere.emoji}</span>
          <p className="text-sm font-medium" style={{ color: ue.couleur }}>{matiere.titre}</p>
        </div>
      </div>

      {/* Barre progression */}
      {!searchMode && (
        <div className="w-full bg-white/10 rounded-full h-1.5 mb-6">
          <motion.div
            animate={{ width: `${((current + 1) / cours.length) * 100}%` }}
            transition={{ duration: 0.4 }}
            className="h-1.5 rounded-full"
            style={{ background: ue.couleur }}
          />
        </div>
      )}

      {/* Index des leçons */}
      {!searchMode && (
        <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
          {cours.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setCurrent(i)}
              className="flex-shrink-0 w-8 h-8 rounded-lg text-xs font-medium transition-all"
              style={{
                background: i === current ? ue.couleur : i < current ? `${ue.couleur}33` : 'rgba(255,255,255,0.05)',
                color: i === current ? 'white' : i < current ? ue.couleur : '#475569'
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Contenu leçon */}
      {!searchMode && (
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display font-bold text-xl text-white mb-5 leading-tight">
              {lecon.titre}
            </h2>

            <div className="rounded-2xl p-5 border border-white/10 mb-6" style={{ background: '#1E293B' }}>
              {lecon.contenu.split('\n').map((line, i) => {
                if (!line.trim()) return <div key={i} className="h-2" />
                if (line.match(/^\d+\./)) {
                  return (
                    <div key={i} className="flex gap-2 mb-3">
                      <span style={{ color: ue.couleur }} className="font-bold text-sm flex-shrink-0 mt-0.5">{line.split('.')[0]}.</span>
                      <p className="text-slate-300 text-sm leading-relaxed">{line.split('.').slice(1).join('.').trim()}</p>
                    </div>
                  )
                }
                if (line.startsWith('•') || line.startsWith('-')) {
                  return (
                    <div key={i} className="flex gap-2 mb-2">
                      <span style={{ color: ue.couleur }} className="flex-shrink-0 text-sm mt-0.5">▸</span>
                      <p className="text-slate-300 text-sm leading-relaxed">{line.replace(/^[•\-]\s*/, '')}</p>
                    </div>
                  )
                }
                if (line.startsWith('Ex') || line.startsWith('NB')) {
                  return (
                    <div key={i} className="rounded-lg px-3 py-2 mb-2 border-l-2" style={{ background: `${ue.couleur}11`, borderColor: ue.couleur }}>
                      <p className="text-slate-400 text-xs leading-relaxed italic">{line}</p>
                    </div>
                  )
                }
                return <p key={i} className="text-slate-300 text-sm leading-relaxed mb-2">{line}</p>
              })}
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className="flex-1 py-3 rounded-xl font-medium text-sm border border-white/10 text-slate-400 disabled:opacity-30 hover:border-white/20 transition-all"
              >
                ← Précédent
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3 rounded-xl font-medium text-sm text-white transition-all"
                style={{ background: ue.couleur }}
              >
                {current === cours.length - 1 ? '✓ Terminer' : 'Suivant →'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

    </div>
  )
}