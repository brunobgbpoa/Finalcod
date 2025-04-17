import React from 'react'
import logo from '/logo-sorteiobot.png'
import {{ Sun, Moon }} from 'lucide-react'

export default function SorteioBotPainel() {{
  const [dark, setDark] = React.useState(false)
  React.useEffect(() => {{
    document.documentElement.classList.toggle('dark', dark)
  }}, [dark])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white dark:bg-gray-900">
      <header className="w-full max-w-3xl flex items-center justify-between mb-12">
        <img src={{logo}} alt="SorteioBot Logo" className="h-12" />
        <button
          className="text-gray-600 dark:text-gray-300"
          onClick={{() => setDark(!dark)}}
          aria-label="Toggle Theme"
        >
          {{dark ? <Sun /> : <Moon />}}
        </button>
      </header>
      <main className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Receba alertas quando sua centena for sorteada!</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Cadastre seu número e centena da Loteria Federal. Acompanhe em tempo real com o SorteioBot.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <input type="text" placeholder="Número de telefone" className="p-2 rounded border w-full mb-4" />
          <input type="text" placeholder="Centena" className="p-2 rounded border w-full mb-4" />
          <button className="bg-black text-white px-6 py-2 rounded w-full hover:bg-gray-800">Cadastrar</button>
        </div>
      </main>
    </div>
  )
}}
