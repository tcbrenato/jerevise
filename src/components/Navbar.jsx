import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10"
      style={{ background: 'rgba(15, 23, 42, 0.85)' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-display font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)' }}
          >
            J
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            Jere<span style={{ color: '#06B6D4' }}>vise</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {!isHome && (
            <Link to="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Accueil
            </Link>
          )}
          <Link
            to="/stats"
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-all"
            style={{
              background: location.pathname === '/stats' ? 'rgba(79,70,229,0.2)' : 'rgba(255,255,255,0.05)',
              color: location.pathname === '/stats' ? '#818CF8' : '#64748B'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
            Stats
          </Link>
          <div className="text-xs text-slate-500 hidden sm:block">L1 · DSLC · S2</div>
        </div>
      </div>
    </motion.nav>
  )
}