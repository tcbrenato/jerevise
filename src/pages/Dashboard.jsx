import { motion } from 'framer-motion'
import UECard from '../components/UECard'
import { useProgress } from '../context/ProgressContext'
import UE1 from '../data/ue1'
import UE2 from '../data/ue2'
import UE3 from '../data/ue3'
import UE4 from '../data/ue4'
import UE5 from '../data/ue5'
import UE6 from '../data/ue6'
import UE7 from '../data/ue7'

const allUEs = [UE1, UE2, UE3, UE4, UE5, UE6, UE7]

export default function Dashboard() {
  const { getUEProgress, resetProgress } = useProgress()

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

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-slate-400 text-sm mb-1">Bienvenue sur</p>
        <h1 className="font-display font-bold text-4xl text-white mb-2">
          Jere<span style={{ color: '#06B6D4' }}>vise</span> 📖
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          Ta plateforme de révision · L1 DSLC · Semestre 2
        </p>
      </motion.div>

      {/* Progression globale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl p-5 mb-6 border border-white/10 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)' }}
      >
        <p className="text-white/80 text-sm mb-1">Progression globale</p>
        <p className="font-display font-bold text-5xl text-white mb-4">{totalProgress}%</p>
        <div className="w-full bg-white/20 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${totalProgress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-2 bg-white rounded-full"
          />
        </div>
        <p className="text-white/70 text-xs mt-2">
          {allUEs.filter(ue => getUEProgress(ue.id) >= 80).length} UE maîtrisées sur {allUEs.length}
        </p>
      </motion.div>

      {/* Stats rapides */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-3 gap-3 mb-8"
      >
        {[
          { label: 'Leçons', value: totalCours, emoji: '📖' },
          { label: 'Flashcards', value: totalFlashcards, emoji: '🃏' },
          { label: 'Questions', value: totalQuiz, emoji: '🧠' },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-xl p-3 border border-white/10 text-center"
            style={{ background: '#1E293B' }}
          >
            <p className="text-xl mb-1">{stat.emoji}</p>
            <p className="font-display font-bold text-white text-xl">{stat.value}</p>
            <p className="text-slate-500 text-xs">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Titre section UEs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-between mb-4"
      >
        <h2 className="font-display font-semibold text-white text-lg">
          Mes UE
        </h2>
        <button
          onClick={() => {
            if (window.confirm('Réinitialiser toute la progression ?')) resetProgress()
          }}
          className="text-xs text-slate-500 hover:text-red-400 transition-colors"
        >
          Réinitialiser
        </button>
      </motion.div>

      {/* Grille des UEs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {allUEs.map((ue, index) => (
          <UECard key={ue.id} ue={ue} index={index} />
        ))}
      </div>

    </div>
  )
}