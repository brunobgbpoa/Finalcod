import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function SorteioBotPainel() {
  const [centenas, setCentenas] = useState([]);
  const [novaCentena, setNovaCentena] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [showUpgrade, setShowUpgrade] = useState(false);

  function adicionarCentena() {
    if (!whatsapp.match(/^\d{10,13}$/)) {
      alert('Informe um número de WhatsApp válido.');
      return;
    }
    if (novaCentena.match(/^\d{3}$/)) {
      if (centenas.length >= 1) {
        setShowUpgrade(true);
        return;
      }
      if (!centenas.includes(novaCentena)) {
        setCentenas([...centenas, novaCentena]);
        setNovaCentena('');
      }
    }
  }

  function removerCentena(index) {
    const novas = [...centenas];
    novas.splice(index, 1);
    setCentenas(novas);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white transition-colors duration-300 font-sans px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <img src="/logo.png" alt="SorteioBot Logo" className="h-12 mx-auto mb-4" />
        <h1 className="text-3xl font-bold">SorteioBot</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">Receba alertas quando sua centena for sorteada</p>
      </div>

      <div className="max-w-xl mx-auto mt-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu WhatsApp (ex: 51998024774)"
            className="border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white p-3 rounded-xl w-full"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Centena"
              className="border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white p-3 rounded-xl w-full"
              value={novaCentena}
              onChange={(e) => setNovaCentena(e.target.value)}
            />
            <button
              onClick={adicionarCentena}
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-1 hover:bg-indigo-700 transition"
            >
              <Plus size={16} /> Adicionar
            </button>
          </div>

          {showUpgrade && (
            <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 p-3 rounded-xl">
              Você só pode cadastrar uma centena no plano gratuito. Faça upgrade para liberar mais!
            </div>
          )}

          <ul className="mt-4 space-y-3">
            {centenas.map((c, i) => (
              <li key={i} className="flex justify-between items-center bg-gray-100 dark:bg-neutral-800 p-3 rounded-xl">
                <span className="font-mono text-lg">{c}</span>
                <button onClick={() => removerCentena(i)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="text-center mt-12 text-sm text-gray-400 dark:text-gray-500">
        © 2025 SorteioBot. Inspirado por Stripe.
      </footer>
    </div>
  );
}
