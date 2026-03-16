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

export default function Quiz() {
  const { ueId, matiereId } = useParams()
  const navigate = useNavigate()
  const { updateProgress } = useProgress()
  const ue = allUEs[ueId]
  const matiere = ue?.matieres.find(m => m.id === matiereId)
  const questions = matiere?.quiz || []

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [answers, setAnswers] = useState([])

  if (!ue || !matiere) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-slate-400">Contenu introuvable</p>
    </div>
  )

  const question = questions[current]

  const handleAnswer = (answerIndex) => {
    if (answered) return
    setSelected(answerIndex)
    setAnswered(true)
    const isCorrect = answerIndex === question.reponse
    const newScore = isCorrect ? score + 1 : score
    if (isCorrect) setScore(newScore)
    setAnswers([...answers, { question: question.question, correct: isCorrect, selected: answerIndex, reponse: question.reponse }])
  }

  const handleVraiFaux = (answer) => {
    if (answered) return
    setSelected(answer ? 1 : 0)
    setAnswered(true)
    const isCorrect = answer === question.reponse
    const newScore = isCorrect ? score + 1 : score
    if (isCorrect) setScore(newScore)
    setAnswers([...answers, { question: question.question, correct: isCorrect }])
  }

  const handleNext = () => {
    if (current < questions.length - 1) {
      setSelected(null)
      setAnswered(false)
      setCurrent(current + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const finalScore = Math.round((score / questions.length) * 100)
      updateProgress(ue.id, 'quiz', finalScore)
      setCompleted(true)
    }
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setCompleted(false)
    setAnswers([])
  }

  const getOptionStyle = (index) => {
    if (!answered) return { background: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', color: '#CBD5E1' }
    if (index === question.reponse) return { background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', color: '#4ade80' }
    if (index === selected && index !== question.reponse) return { background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#f87171' }
    return { background: '#1E293B', border: '1px solid rgba(255,255,255,0.05)', color: '#475569' }
  }

  if (completed) {
    const finalScore = Math.round((score / questions.length) * 100)
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <div className="text-6xl mb-4">{finalScore >= 80 ? '🏆' : finalScore >= 50 ? '👍' : '📚'}</div>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Quiz terminé !</h2>
          <p className="text-slate-400 text-sm mb-2">
            {finalScore >= 80 ? 'Excellent !' : finalScore >= 50 ? 'Bon effort, continue !' : 'Révise encore un peu !'}
          </p>

          <div className="rounded-2xl p-6 my-6 border border-white/10" style={{ background: '#1E293B' }}>
            <p className="font-display font-bold text-6xl mb-1"
              style={{ color: finalScore >= 80 ? '#4ade80' : finalScore >= 50 ? '#F59E0B' : '#f87171' }}>
              {finalScore}%
            </p>
            <p className="text-slate-400 text-sm">{score} / {questions.length} bonnes réponses</p>
          </div>

          <div className="text-left mb-6">
            <h3 className="font-display font-semibold text-white mb-3 text-sm">Récapitulatif</h3>
            <div className="flex flex-col gap-2">
              {answers.map((a, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl p-3 border border-white/10" style={{ background: '#1E293B' }}>
                  <span className={a.correct ? 'text-green-400 flex-shrink-0' : 'text-red-400 flex-shrink-0'}>{a.correct ? '✓' : '✗'}</span>
                  <p className="text-slate-400 text-xs leading-relaxed">{a.question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button onClick={restart} className="w-full py-3 rounded-xl font-medium text-white text-sm" style={{ background: ue.couleur }}>
              🔄 Recommencer
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
        <button
          onClick={() => navigate(`/ue/${ueId}`)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Retour
        </button>
        <span className="text-slate-400 text-sm">{current + 1} / {questions.length}</span>
      </div>

      {/* Matière titre */}
      <div className="rounded-xl px-4 py-3 mb-4 border border-white/10" style={{ background: `${ue.couleur}11` }}>
        <div className="flex items-center gap-2">
          <span className="text-lg">{matiere.emoji}</span>
          <p className="text-sm font-medium" style={{ color: ue.couleur }}>{matiere.titre}</p>
        </div>
      </div>

      {/* Barre */}
      <div className="w-full bg-white/10 rounded-full h-1.5 mb-6">
        <motion.div
          animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
          className="h-1.5 rounded-full"
          style={{ background: ue.couleur }}
        />
      </div>

      {/* Score */}
      <div className="flex justify-end mb-4">
        <span className="text-slate-400 text-sm">Score : <span className="text-white font-medium">{score}/{current}</span></span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          {/* Question */}
          <div className="rounded-2xl p-5 border border-white/10 mb-5" style={{ background: '#1E293B' }}>
            <span
              className="text-xs px-2 py-1 rounded-full mb-3 inline-block"
              style={{ background: `${ue.couleur}22`, color: ue.couleur }}
            >
              {question.type === 'vrai_faux' ? 'Vrai ou Faux' : 'QCM'}
            </span>
            <p className="text-white font-medium text-base leading-relaxed">{question.question}</p>
          </div>

          {/* Options QCM */}
          {question.type === 'qcm' && (
            <div className="flex flex-col gap-3 mb-5">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left rounded-xl p-4 text-sm font-medium transition-all"
                  style={getOptionStyle(index)}
                >
                  <span className="mr-3 opacity-60">{['A', 'B', 'C', 'D'][index]}.</span>
                  {option}
                </motion.button>
              ))}
            </div>
          )}

          {/* Options Vrai/Faux */}
          {question.type === 'vrai_faux' && (
            <div className="flex gap-3 mb-5">
              {[true, false].map((val) => {
                const isThis = selected === (val ? 1 : 0)
                const isCorrect = val === question.reponse
                let style = { background: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', color: '#CBD5E1' }
                if (answered && isCorrect) style = { background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', color: '#4ade80' }
                else if (answered && isThis && !isCorrect) style = { background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#f87171' }
                return (
                  <motion.button
                    key={String(val)}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleVraiFaux(val)}
                    className="flex-1 py-4 rounded-xl font-medium text-sm transition-all"
                    style={style}
                  >
                    {val ? '✓ Vrai' : '✗ Faux'}
                  </motion.button>
                )
              })}
            </div>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl p-4 mb-5 border-l-4"
                style={{
                  background: selected === question.reponse ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                  borderColor: selected === question.reponse ? '#4ade80' : '#f87171'
                }}
              >
                <p className="text-sm font-medium mb-1"
                  style={{ color: selected === question.reponse ? '#4ade80' : '#f87171' }}>
                  {selected === question.reponse ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}
                </p>
                {question.type === 'qcm' && selected !== question.reponse && (
                  <p className="text-slate-400 text-xs">
                    Bonne réponse : <span className="text-white">{question.options[question.reponse]}</span>
                  </p>
                )}
                {question.type === 'vrai_faux' && selected !== question.reponse && (
                  <p className="text-slate-400 text-xs">
                    Bonne réponse : <span className="text-white">{question.reponse ? 'Vrai' : 'Faux'}</span>
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </AnimatePresence>

      {/* Bouton suivant */}
      {answered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="w-full py-4 rounded-xl font-medium text-white text-sm"
          style={{ background: ue.couleur }}
        >
          {current === questions.length - 1 ? '✓ Voir les résultats' : 'Question suivante →'}
        </motion.button>
      )}

    </div>
  )
}