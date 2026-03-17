import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleCTA = () => {
    navigate(user ? '/dashboard' : '/register')
  }

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="text-center px-6 py-16" style={{ background: '#FBEAF0' }}>
        <span className="inline-block text-xs font-medium px-4 py-1 rounded-full mb-5"
          style={{ background: '#F4C0D1', color: '#72243E' }}>
          Plateforme de révision
        </span>
        <h1 className="text-4xl font-medium leading-tight mb-4" style={{ color: '#26215C' }}>
          Révisez mieux,<br />retenez plus.
        </h1>
        <p className="text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: '#534AB7' }}>
          JeRévise vous accompagne dans vos révisions avec des flashcards,
          des quiz et un suivi personnalisé de vos progrès.
        </p>
        <button onClick={handleCTA}
          className="px-10 py-3 rounded-xl text-sm font-medium transition hover:opacity-90"
          style={{ background: '#534AB7', color: '#EEEDFE' }}>
          Commencer à réviser →
        </button>
      </section>

      {/* Étapes */}
      <section className="max-w-2xl mx-auto px-6 py-14">
        <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#993556' }}>
          Comment ça marche
        </p>
        <h2 className="text-2xl font-medium mb-8" style={{ color: '#26215C' }}>
          Simple, rapide, efficace
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { n: 1, title: 'Créez votre compte', desc: "Inscrivez-vous en quelques secondes avec votre nom et adresse email. Une seule inscription suffit." },
            { n: 2, title: 'Choisissez votre UE', desc: "Accédez à vos unités d'enseignement et parcourez les cours organisés par matière." },
            { n: 3, title: 'Révisez à votre rythme', desc: "Utilisez les flashcards et quiz interactifs pour ancrer vos connaissances durablement." },
            { n: 4, title: 'Suivez vos progrès', desc: "Consultez vos statistiques et identifiez les points à renforcer grâce au tableau de bord." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="flex items-start gap-4 rounded-xl p-5" style={{ background: '#FBEAF0' }}>
              <div className="flex items-center justify-center rounded-full text-sm font-medium shrink-0"
                style={{ width: 32, height: 32, background: '#F4C0D1', color: '#72243E' }}>
                {n}
              </div>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: '#3C3489' }}>{title}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#534AB7' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t mx-6" style={{ borderColor: '#CECBF6' }} />

      {/* Fonctionnalités */}
      <section className="max-w-2xl mx-auto px-6 py-14">
        <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#993556' }}>
          Fonctionnalités
        </p>
        <h2 className="text-2xl font-medium mb-8" style={{ color: '#26215C' }}>
          Tout ce qu'il vous faut
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { title: 'Flashcards', desc: 'Cartes mémoire pour une révision rapide' },
            { title: 'Quiz interactifs', desc: 'Testez vos connaissances en temps réel' },
            { title: 'Statistiques', desc: 'Suivez votre progression et performances' },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl p-5" style={{ background: '#EEEDFE' }}>
              <p className="text-sm font-medium mb-1" style={{ color: '#3C3489' }}>{title}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#534AB7' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}