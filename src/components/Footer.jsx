export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-slate-500 text-sm">
          © 2024 <span className="text-white font-medium">Jerevise</span> — L1 DSLC
        </p>
        <p className="text-slate-600 text-xs">
          Propulsé par{' '}
          <span className="text-slate-400 font-medium">Rénato TCHOBO</span>
        </p>
      </div>
    </footer>
  )
}