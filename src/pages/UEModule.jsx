import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProgress } from '../context/ProgressContext'
import UE1 from '../data/ue1'
import UE2 from '../data/ue2'
import UE3 from '../data/ue3'
import UE4 from '../data/ue4'
import UE5 from '../data/ue5'
import UE6 from '../data/ue6'
import UE7 from '../data/ue7'

const allUEs = { ue1: UE1, ue2: UE2, ue3: UE3, ue4: UE4, ue5: UE5, ue6: UE6, ue7: UE7 }

export default function UEModule() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getUEProgress } = useProgress()
  const ue = allUEs[id]

  if (!ue) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-slate-400">UE introuvable</p>
    </div>
  )

  const progress = getUEProgress(ue.id)
  const totalCours = ue.matieres?.reduce((acc, m) => acc + (m.cours?.length || 0), 0) || 0
  const totalFlashcards = ue.matieres?.reduce((acc, m) => acc + (m.flashcards?.length || 0), 0) || 0
  const totalQuiz = ue.matieres?.reduce((acc, m) => acc + (m.quiz?.length || 0), 0) || 0

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">

      {/* Header UE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-6 mb-6 border border-white/10"
        style={{ background: '#1E293B' }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
          style={{ background: `${ue.couleur}22` }}
        >
          {ue.emoji}
        </div>
        <p className="text-xs font-medium mb-1" style={{ color: ue.couleur }}>
          {ue.code}
        </p>
        <h1 className="font-display font-bold text-2xl text-white mb-4">
          {ue.titre}
        </h1>
        <div className="w-full bg-white/10 rounded-full h-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8 }}
            className="h-1.5 rounded-full"
            style={{ background: ue.couleur }}
          />
        </div>
        <p className="text-slate-500 text-xs mt-2">{Math.round(progress)}% complété</p>
      </motion.div>

      {/* Stats globales UE */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Leçons', value: totalCours, emoji: '📖' },
          { label: 'Flashcards', value: totalFlashcards, emoji: '🃏' },
          { label: 'Questions', value: totalQuiz, emoji: '🧠' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl p-3 border border-white/10 text-center"
            style={{ background: '#1E293B' }}
          >
            <p className="text-lg mb-1">{stat.emoji}</p>
            <p className="font-display font-bold text-white text-xl">{stat.value}</p>
            <p className="text-slate-500 text-xs">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Matières */}
      <h2 className="font-display font-semibold text-white text-lg mb-4">
        Matières
      </h2>

      <div className="flex flex-col gap-5">
        {ue.matieres?.map((matiere, index) => (
          <motion.div
            key={matiere.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-white/10 overflow-hidden"
            style={{ background: '#1E293B' }}
          >
            {/* Titre matière */}
            <div
              className="px-5 py-4 border-b border-white/10"
              style={{ background: `${ue.couleur}11` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{matiere.emoji}</span>
                <div>
                  <p className="text-white font-display font-semibold text-base leading-tight">
                    {matiere.titre}
                  </p>
                  {matiere.disponible === false ? (
                    <p className="text-slate-500 text-xs mt-0.5">Contenu bientôt disponible</p>
                  ) : (
                    <p className="text-slate-400 text-xs mt-0.5">
                      {matiere.cours?.length || 0} leçons
                      {' · '}
                      {matiere.flashcards?.length || 0} cartes
                      {' · '}
                      {matiere.quiz?.length || 0} questions
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Modes */}
            <div className="p-4 flex flex-col gap-2">
              {matiere.disponible === false ? (
                <div
                  className="rounded-xl px-4 py-6 border border-white/10 text-center"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <p className="text-3xl mb-2">🚧</p>
                  <p className="text-slate-400 text-sm font-medium">
                    Contenu bientôt disponible
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Ce cours sera ajouté prochainement
                  </p>
                </div>
              ) : (
                [
                  { id: 'cours', label: 'Cours', emoji: '📖', color: '#4F46E5', desc: `${matiere.cours?.length || 0} leçons` },
                  { id: 'flashcards', label: 'Flashcards', emoji: '🃏', color: '#06B6D4', desc: `${matiere.flashcards?.length || 0} cartes` },
                  { id: 'quiz', label: 'Quiz', emoji: '🧠', color: '#F59E0B', desc: `${matiere.quiz?.length || 0} questions` },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => navigate(`/ue/${id}/${matiere.id}/${mode.id}`)}
                    className="w-full flex items-center gap-3 rounded-xl px-4 py-3 border border-white/10 hover:border-white/20 transition-all text-left"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                      style={{ background: `${mode.color}22` }}
                    >
                      {mode.emoji}
                    </span>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{mode.label}</p>
                      <p className="text-slate-500 text-xs">{mode.desc}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}