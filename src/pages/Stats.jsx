import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import UE1 from '../data/ue1'
import UE2 from '../data/ue2'
import UE3 from '../data/ue3'
import UE4 from '../data/ue4'
import UE5 from '../data/ue5'
import UE6 from '../data/ue6'
import UE7 from '../data/ue7'

const allUEs = [UE1, UE2, UE3, UE4, UE5, UE6, UE7]

export default function Stats() {
  const navigate = useNavigate()
  const { progress, getUEProgress } = useProgress()

  const totalProgress = Math.round(
    allUEs.reduce((acc, ue) => acc + getUEProgress(ue.id), 0) / allUEs.length
  )

  const totalFlashcards = allUEs.reduce((acc, ue) =>
    acc + (ue.matieres?.reduce((a, m) => a + (m.flashcards?.length || 0), 0) || 0), 0
  )
  const totalQuiz = allUEs.reduce((acc, ue) =>
    acc + (ue.matieres?.reduce((a, m) => a + (m.quiz?.length || 0), 0) || 0), 0
  )
  const totalCours = allUEs.reduce((acc, ue) =>
    acc + (ue.matieres?.reduce((a, m) => a + (m.cours?.length || 0), 0) || 0), 0
  )

  const maitrisees = allUEs.filter(ue => getUEProgress(ue.id) >= 80).length
  const enCours = allUEs.filter(ue => getUEProgress(ue.id) > 0 && getUEProgress(ue.id) < 80).length
  const nonCommencees = allUEs.filter(ue => getUEProgress(ue.id) === 0).length

  const getLevel = (p) => {
    if (p >= 80) return { label: 'Expert', color: '#10B981', emoji: '🏆' }
    if (p >= 60) return { label: 'Avancé', color: '#06B6D4', emoji: '⭐' }
    if (p >= 40) return { label: 'Intermédiaire', color: '#F59E0B', emoji: '📈' }
    if (p >= 20) return { label: 'Débutant', color: '#F97316', emoji: '🌱' }
    return { label: 'Nouveau', color: '#64748B', emoji: '🎯' }
  }

  const level = getLevel(totalProgress)

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Retour
        </button>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display font-bold text-2xl text-white mb-6"
      >
        📊 Mes statistiques
      </motion.h1>

      {/* Niveau */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl p-6 mb-5 border border-white/10 text-center"
        style={{ background: `${level.color}15`, borderColor: `${level.color}33` }}
      >
        <p className="text-5xl mb-2">{level.emoji}</p>
        <p className="font-display font-bold text-2xl text-white mb-1">{level.label}</p>
        <p className="text-slate-400 text-sm">Niveau actuel · {totalProgress}% de progression globale</p>
        <div className="w-full bg-white/10 rounded-full h-2 mt-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${totalProgress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-2 rounded-full"
            style={{ background: level.color }}
          />
        </div>
      </motion.div>

      {/* Stats rapides */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'Maîtrisées', value: maitrisees, color: '#10B981', emoji: '✅' },
          { label: 'En cours', value: enCours, color: '#F59E0B', emoji: '⏳' },
          { label: 'À commencer', value: nonCommencees, color: '#64748B', emoji: '🔒' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="rounded-xl p-3 border border-white/10 text-center"
            style={{ background: '#1E293B' }}
          >
            <p className="text-xl mb-1">{stat.emoji}</p>
            <p className="font-display font-bold text-white text-2xl" style={{ color: stat.color }}>{stat.value}</p>
            <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Contenu total */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Leçons', value: totalCours, emoji: '📖' },
          { label: 'Flashcards', value: totalFlashcards, emoji: '🃏' },
          { label: 'Questions', value: totalQuiz, emoji: '🧠' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="rounded-xl p-3 border border-white/10 text-center"
            style={{ background: '#1E293B' }}
          >
            <p className="text-xl mb-1">{stat.emoji}</p>
            <p className="font-display font-bold text-white text-xl">{stat.value}</p>
            <p className="text-slate-500 text-xs">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Détail par UE */}
      <h2 className="font-display font-semibold text-white text-lg mb-4">Détail par UE</h2>
      <div className="flex flex-col gap-3">
        {allUEs.map((ue, index) => {
          const p = getUEProgress(ue.id)
          const quizScore = progress[ue.id]?.quiz || 0
          const flashScore = progress[ue.id]?.flashcards || 0
          const courseFait = progress[ue.id]?.cours || false

          return (
            <motion.div
              key={ue.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.07 }}
              onClick={() => navigate(`/ue/${ue.id}`)}
              className="rounded-2xl p-4 border border-white/10 cursor-pointer hover:border-white/20 transition-all"
              style={{ background: '#1E293B' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{ue.emoji}</span>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{ue.titre}</p>
                  <p className="text-xs" style={{ color: ue.couleur }}>{ue.code}</p>
                </div>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: `${ue.couleur}22`, color: ue.couleur }}
                >
                  {Math.round(p)}%
                </span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-1.5 mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${p}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.07 }}
                  className="h-1.5 rounded-full"
                  style={{ background: ue.couleur }}
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <p className="text-xs" style={{ color: courseFait ? '#10B981' : '#475569' }}>
                    {courseFait ? '✓' : '○'} Cours
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">
                    🃏 {flashScore}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">
                    🧠 {quizScore}%
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

    </div>
  )
}