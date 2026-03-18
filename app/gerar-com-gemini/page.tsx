'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GerarComGemini() {
  const [materia, setMateria] = useState('História')
  const [banca, setBanca] = useState('ENEM')
  const [nivel, setNivel] = useState('médio')
  const [quantidade, setQuantidade] = useState(1)
  const [carregando, setCarregando] = useState(false)
  const [resultado, setResultado] = useState('')
  const [questoes, setQuestoes] = useState<any[]>([])

  const materias = ['História', 'Geografia', 'Português', 'Matemática', 'Biologia', 'Física', 'Química', 'Sociologia']
  const bancas = ['ENEM', 'CESPE', 'FCC', 'VUNESP', 'BANCA BRASIL']
  const niveis = ['fácil', 'médio', 'difícil']

  async function gerarQuestoes() {
    setCarregando(true)
    setResultado('')
    setQuestoes([])

    try {
      console.log('Gerando questões...', { materia, banca, nivel, quantidade })

      const res = await fetch('/api/gerar-questao-openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          materia,
          banca,
          nivel,
          quantidade: parseInt(quantidade.toString())
        })
      })

      const data = await res.json()

      if (!res.ok) {
        setResultado(`❌ Erro: ${data.erro}`)
        setCarregando(false)
        return
      }

      if (data.sucesso) {
        setQuestoes(data.questoes)
        setResultado(`✅ ${data.total} questões geradas e salvas no banco!`)
      } else {
        setResultado(`❌ Erro ao gerar questões`)
      }

      setCarregando(false)
    } catch (error) {
      setResultado(`❌ Erro: ${error instanceof Error ? error.message : String(error)}`)
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-blue-400 hover:underline">← Voltar ao Início</Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">🤖 Gerar Questões com Gemini 2.0</h1>
          <p className="text-gray-400">Use IA para gerar questões automaticamente e adicionar ao banco</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 border border-slate-600 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Matéria</label>
              <select
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
                className="w-full p-3 bg-slate-700 rounded border border-slate-600 text-white focus:border-blue-500 focus:outline-none"
              >
                {materias.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Banca</label>
              <select
                value={banca}
                onChange={(e) => setBanca(e.target.value)}
                className="w-full p-3 bg-slate-700 rounded border border-slate-600 text-white focus:border-blue-500 focus:outline-none"
              >
                {bancas.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Nível</label>
              <select
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
                className="w-full p-3 bg-slate-700 rounded border border-slate-600 text-white focus:border-blue-500 focus:outline-none"
              >
                {niveis.map((n) => (
                  <option key={n} value={n}>{n.charAt(0).toUpperCase() + n.slice(1)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Quantidade</label>
              <input
                type="number"
                min="1"
                max="3"
                value={quantidade}
                onChange={(e) => setQuantidade(Math.min(3, parseInt(e.target.value)))}
                className="w-full p-3 bg-slate-700 rounded border border-slate-600 text-white focus:border-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-400 mt-1">Máximo: 3 questões por vez (rate limit)</p>
            </div>
          </div>

          <button
            onClick={gerarQuestoes}
            disabled={carregando}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 px-6 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            {carregando ? '⏳ Gerando... (aguarde até 1 minuto)' : '🤖 Gerar Questões'}
          </button>

          <div className="mt-4 p-4 bg-yellow-900 rounded-lg border border-yellow-700 text-yellow-100 text-sm">
            <p><strong>⚠️ Sobre Rate Limit:</strong></p>
            <p className="mt-2">• Máximo de 3 questões por vez (limite da API grátis)</p>
            <p>• Aguarde 2-3 minutos entre gerações para evitar bloqueios</p>
            <p>• O sistema aguarda automaticamente se necessário</p>
          </div>

          {resultado && (
            <div className={`mt-4 p-4 rounded-lg border ${
              resultado.includes('✅')
                ? 'bg-green-900 border-green-700 text-green-200'
                : 'bg-red-900 border-red-700 text-red-200'
            }`}>
              {resultado}
            </div>
          )}
        </div>

        {questoes.length > 0 && (
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-600">
            <h2 className="text-2xl font-bold mb-6">📚 Questões Geradas</h2>
            <div className="space-y-6">
              {questoes.map((q, idx) => (
                <div key={idx} className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                  <p className="text-sm text-gray-400 mb-2">{materia} • {banca} • {nivel}</p>
                  <h3 className="text-lg font-semibold mb-4">{idx + 1}. {q.pergunta}</h3>
                  
                  <div className="space-y-2 mb-4">
                    {['A', 'B', 'C', 'D'].map((letra) => (
                      <div
                        key={letra}
                        className={`p-3 rounded ${
                          letra === q.correta
                            ? 'bg-green-900 border-2 border-green-700 text-green-100'
                            : 'bg-slate-600 text-gray-200'
                        }`}
                      >
                        <strong>{letra})</strong> {q.alternativas[letra]}
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-800 p-3 rounded border-l-4 border-blue-500">
                    <p className="text-sm text-gray-300"><strong>Resposta:</strong> {q.correta}</p>
                    <p className="text-sm text-gray-400 mt-2"><strong>Explicação:</strong> {q.explicacao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
