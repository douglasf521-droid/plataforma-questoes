'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ImportarQuestoes() {
  const [jsonText, setJsonText] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [message, setMessage] = useState('')
  const [questoesImportadas, setQuestoesImportadas] = useState<any[]>([])

  async function importarQuestoes() {
    setCarregando(true)
    setMessage('')
    setQuestoesImportadas([])

    try {
      if (!jsonText.trim()) {
        setMessage('❌ Cole o JSON das questões')
        setCarregando(false)
        return
      }

      // Parse JSON
      let questoes
      try {
        questoes = JSON.parse(jsonText)
      } catch (e) {
        setMessage('❌ JSON inválido. Verifique se está bem formatado.')
        setCarregando(false)
        return
      }

      // Se for um objeto único, converte para array
      if (!Array.isArray(questoes)) {
        questoes = [questoes]
      }

      // Validar e processar
      const questoesValidas = questoes.filter((q) => {
        return (
          q.pergunta &&
          (q.opcaoA || q.alternativas?.A) &&
          (q.opcaoB || q.alternativas?.B) &&
          (q.opcaoC || q.alternativas?.C) &&
          (q.opcaoD || q.alternativas?.D) &&
          (q.respostaCorreta || q.correta)
        )
      })

      if (questoesValidas.length === 0) {
        setMessage('❌ Nenhuma questão válida encontrada')
        setCarregando(false)
        return
      }

      // Enviar para salvar
      const res = await fetch('/api/importar-questoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questoes: questoesValidas }),
      })

      const data = await res.json()

      if (!res.ok) {
        setMessage(`❌ Erro: ${data.erro}`)
        return
      }

      setQuestoesImportadas(data.questoes)
      setMessage(`✅ ${data.total} questão(ões) importada(s) com sucesso!`)
      setJsonText('')
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
          <h1 className="text-3xl font-bold">Importar Questões 📥</h1>
          <Link href="/admin" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg">
            ← Voltar
          </Link>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Cole o JSON com as questões</h2>

          <div className="mb-4 p-4 bg-gray-700 rounded border border-gray-600">
            <p className="text-sm text-gray-300 mb-2">Formato esperado:</p>
            <pre className="text-xs bg-gray-900 p-2 rounded overflow-x-auto">
{`[
  {
    "pergunta": "Qual é a capital do Brasil?",
    "opcaoA": "São Paulo",
    "opcaoB": "Brasília",
    "opcaoC": "Rio de Janeiro",
    "opcaoD": "Salvador",
    "respostaCorreta": "B",
    "explicacao": "Brasília é a capital...",
    "materia": "Geografia",
    "banca": "ENEM",
    "nivel": "fácil"
  }
]`}
            </pre>
          </div>

          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            placeholder="Cole aqui o JSON com as questões..."
            className="w-full h-64 p-4 bg-gray-700 rounded border border-gray-600 text-white font-mono text-sm"
          />

          <button
            onClick={importarQuestoes}
            disabled={carregando}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-3 rounded-lg font-bold transition-colors"
          >
            {carregando ? '⏳ Importando...' : '📥 Importar Questões'}
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

        {/* Questões Importadas */}
        {questoesImportadas.length > 0 && (
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Questões Importadas ({questoesImportadas.length})</h2>

            {questoesImportadas.map((q, idx) => (
              <div key={idx} className="bg-gray-700 p-4 rounded-lg mb-4">
                <div className="mb-2">
                  <p className="text-sm text-gray-400">Questão {idx + 1}</p>
                  <p className="font-bold">{q.pergunta}</p>
                </div>

                <div className="text-sm">
                  <p>A) {q.opcaoA || q.alternativas?.A}</p>
                  <p>B) {q.opcaoB || q.alternativas?.B}</p>
                  <p>C) {q.opcaoC || q.alternativas?.C}</p>
                  <p>D) {q.opcaoD || q.alternativas?.D}</p>
                </div>

                <div className="bg-gray-600 p-2 rounded text-sm mt-2">
                  <p className="font-bold text-yellow-300">Resposta: {q.respostaCorreta || q.correta}</p>
                  <p className="text-gray-300">{q.explicacao}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dicas */}
        <div className="mt-8 bg-gray-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold mb-3">💡 Onde encontrar questões:</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ <Link href="/exemplos-questoes" className="text-blue-400 hover:underline">Ver Exemplos de JSON</Link></li>
            <li>✅ <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem" target="_blank" className="text-blue-400 hover:underline">ENEM - Questões Oficiais</a></li>
            <li>✅ <a href="https://brainly.com.br" target="_blank" className="text-blue-400 hover:underline">Brainly - Comunidade de Questões</a></li>
            <li>✅ <a href="https://www.qconcursos.com" target="_blank" className="text-blue-400 hover:underline">QConcursos - Banco de Questões</a></li>
            <li>✅ Simplesmente copie e cole as questões em formato JSON</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
