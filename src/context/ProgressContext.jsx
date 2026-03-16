import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('jerevise-progress')
    return saved ? JSON.parse(saved) : {
      ue1: { flashcards: 0, quiz: 0, cours: false },
      ue2: { flashcards: 0, quiz: 0, cours: false },
      ue3: { flashcards: 0, quiz: 0, cours: false },
      ue4: { flashcards: 0, quiz: 0, cours: false },
      ue5: { flashcards: 0, quiz: 0, cours: false },
      ue6: { flashcards: 0, quiz: 0, cours: false },
      ue7: { flashcards: 0, quiz: 0, cours: false },
    }
  })

  useEffect(() => {
    localStorage.setItem('jerevise-progress', JSON.stringify(progress))
  }, [progress])

  const updateProgress = (ueId, type, value) => {
    setProgress(prev => ({
      ...prev,
      [ueId]: { ...prev[ueId], [type]: value }
    }))
  }

  const getUEProgress = (ueId) => {
    const p = progress[ueId]
    if (!p) return 0
    let score = 0
    if (p.cours) score += 33
    if (p.flashcards > 0) score += Math.min(33, Math.round((p.flashcards / 100) * 33))
    if (p.quiz > 0) score += Math.min(34, Math.round((p.quiz / 100) * 34))
    return Math.min(100, score)
  }

  const resetProgress = () => {
    const empty = {}
    for (let i = 1; i <= 7; i++) {
      empty[`ue${i}`] = { flashcards: 0, quiz: 0, cours: false }
    }
    setProgress(empty)
  }

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, getUEProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}