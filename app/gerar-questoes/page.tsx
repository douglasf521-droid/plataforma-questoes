'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GerarQuestoes() {
  const [materia, setMateria] = useState('Matemática')
  const [banca, setBanca] = useState('ENEM')
  const [nivel, setNivel] = useState('médio')
  const [quantidade, setQuantidade] = useState(1)
  const [carregando, setCarregando] = useState(false)
  const [message, setMessage] = useState('')
  const [questoesGeradas, setQuestoesGeradas] = useState<any[]>([])

  const materias = ['Matemática', 'Português', 'História', 'Geografia', 'Biologia', 'Física', 'Química', 'Direito', 'Administração']
  const bancas = ['ENEM', 'CESPE', 'FCC', 'VUNESP', 'BANCA BRASIL']
  const niveis = ['fácil', 'médio', 'difícil']

  async function gerarQuestoes() {
    setCarregando(true)
    setMessage('')
    setQuestoesGeradas([])

    try {
      const res = await fetch('/api/gerar-questao-openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ materia, banca, nivel, quantidade: parseInt(quantidade as any) }),
      })

      const data = await res.json()

      if (!res.ok) {
        setMessage(`❌ Erro: ${data.erro}`)
        return
      }

      setQuestoesGeradas(data.questoes)
      setMessage(`✅ ${data.total} questão(ões) gerada(s) e salva(s) com sucesso!`)
    } catch (erro) {
      setMessage(`❌ Erro: ${erro instanceof Error ? erro.message : String(erro)}`)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Gerar Questões com Gemini 🤖</h1>
          <Link href="/admin" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg">
            ← Voltar
          </Link>
        </div>

        {/* Formulário */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Configurar Geração (Gemini - Grátis ✅)</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-2">Matéria</label>
              <select
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
                className="w-full p-2 bg-gray-700 rounded text-white border border-gray-600"
              >
                {materias.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Banca</label>
              <select
                value={banca}
                onChange={(e) => setBanca(e.target.value)}
                className="w-full p-2 bg-gray-700 rounded text-white border border-gray-600"
              >
                {bancas.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Nível</label>
              <select
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
                className="w-full p-2 bg-gray-700 rounded text-white border border-gray-600"
              >
                {niveis.map((n) => (
                  <option key={n} value={n}>
                    {n.charAt(0).toUpperCase() + n.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Quantidade</label>
              <select
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className="w-full p-2 bg-gray-700 rounded text-white border border-gray-600"
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={gerarQuestoes}
            disabled={carregando}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-3 rounded-lg font-bold transition-colors"
          >
            {carregando ? '⏳ Gerando... (pode levar alguns segundos)' : '🚀 Gerar Questões'}
          </button>

          {message && (
            <div className={`mt-4 p-3 rounded-lg border ${
              message.startsWith('✅')
                ? 'bg-green-900 border-green-700 text-green-200'
                : 'bg-red-900 border-red-700 text-red-200'
            }`}>
              <p>{message}</p>
            </div>
          )}
        </div>

        {/* Questões Geradas */}
        {questoesGeradas.length > 0 && (
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Questões Geradas ({questoesGeradas.length})</h2>

            {questoesGeradas.map((q, idx) => (
              <div key={idx} className="bg-gray-700 p-4 rounded-lg mb-4">
                <div className="mb-2">
                  <p className="text-sm text-gray-400">Questão {idx + 1}</p>
                  <p className="font-bold">{q.pergunta}</p>
                </div>

                <div className="space-y-1 mb-3 text-sm">
                  <p>A) {q.alternativas.A}</p>
                  <p>B) {q.alternativas.B}</p>
                  <p>C) {q.alternativas.C}</p>
                  <p>D) {q.alternativas.D}</p>
                </div>

                <div className="bg-gray-600 p-2 rounded text-sm">
                  <p className="font-bold text-yellow-300">Resposta: {q.correta}</p>
                  <p className="text-gray-300">{q.explicacao}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
