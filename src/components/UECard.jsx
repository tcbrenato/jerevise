import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProgressBar from './ProgressBar'
import { useProgress } from '../context/ProgressContext'

export default function UECard({ ue, index }) {
  const navigate = useNavigate()
  const { getUEProgress } = useProgress()
  const progress = getUEProgress(ue.id)

  const getStatusLabel = (p) => {
    if (p === 0) return { label: 'Non commencé', color: '#64748B' }
    if (p < 40) return { label: 'En cours', color: '#F59E0B' }
    if (p < 80) return { label: 'Bien avancé', color: '#06B6D4' }
    return { label: 'Maîtrisé', color: '#10B981' }
  }

  const status = getStatusLabel(progress)

  const totalFlashcards = ue.matieres?.reduce((acc, m) => acc + (m.flashcards?.length || 0), 0) || 0
  const totalCours = ue.matieres?.reduce((acc, m) => acc + (m.cours?.length || 0), 0) || 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={() => navigate(`/ue/${ue.id}`)}
      className="card-hover cursor-pointer rounded-2xl p-5 border border-white/10"
      style={{ background: '#1E293B' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${ue.couleur}22`, border: `1px solid ${ue.couleur}44` }}
        >
          {ue.emoji}
        </div>
        <span
          className="text-xs font-medium px-2 py-1 rounded-full"
          style={{ background: `${status.color}22`, color: status.color }}
        >
          {status.label}
        </span>
      </div>

      <p className="text-xs font-medium mb-1" style={{ color: ue.couleur }}>
        {ue.code}
      </p>
      <h3 className="font-display font-semibold text-white text-lg mb-2 leading-tight">
        {ue.titre}
      </h3>

      {/* Matières séparées */}
      <div className="flex flex-col gap-1 mb-4">
        {ue.matieres?.map((m, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs">{m.emoji}</span>
            <p className="text-slate-400 text-xs leading-relaxed">{m.titre}</p>
          </div>
        ))}
      </div>

      <ProgressBar value={progress} color={ue.couleur} height={4} />

      <div className="flex items-center justify-between mt-3">
        <span className="text-slate-500 text-xs">{Math.round(progress)}% complété</span>
        <div className="flex gap-2">
          <span className="text-xs text-slate-500">{totalCours} leçons</span>
          <span className="text-xs text-slate-500">·</span>
          <span className="text-xs text-slate-500">{totalFlashcards} cartes</span>
        </div>
      </div>
    </motion.div>
  )
}