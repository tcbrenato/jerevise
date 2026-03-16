import { motion } from 'framer-motion'

export default function ProgressBar({ value = 0, color = '#4F46E5', height = 6, showLabel = false }) {
  return (
    <div className="w-full">
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: `${height}px`, background: 'rgba(255,255,255,0.08)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
      {showLabel && (
        <p className="text-xs text-slate-400 mt-1 text-right">{Math.round(value)}%</p>
      )}
    </div>
  )
}