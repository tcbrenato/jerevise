import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const ADMIN_PASSWORD = 'monmotdepasseadmin' // changez ceci !

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false)
  const [pwd, setPwd] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const handleLogin = e => {
    e.preventDefault()
    if (pwd === ADMIN_PASSWORD) setAuthed(true)
    else alert('Mot de passe incorrect')
  }

  useEffect(() => {
    if (!authed) return
    setLoading(true)
    supabase.from('profiles').select('*').order('created_at', { ascending: false })
      .then(({ data }) => { setUsers(data || []); setLoading(false) })
  }, [authed])

  if (!authed) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4 text-center">Accès Admin</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="password" placeholder="Mot de passe admin" value={pwd}
            onChange={e => setPwd(e.target.value)}
            className="w-full border rounded-lg px-4 py-2" />
          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900">
            Accéder
          </button>
        </form>
      </div>
    </div>
  )

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Tableau de bord Admin</h1>
      <p className="text-gray-500 mb-6">Total inscrits : <strong>{users.length}</strong></p>
      {loading ? <p>Chargement...</p> : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-3">Prénom</th>
                <th className="text-left px-4 py-3">Nom</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Date d'inscription</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{u.first_name}</td>
                  <td className="px-4 py-3">{u.last_name}</td>
                  <td className="px-4 py-3">{u.email}</td>
                  <td className="px-4 py-3">{new Date(u.created_at).toLocaleDateString('fr-FR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}