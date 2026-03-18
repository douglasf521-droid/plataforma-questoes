'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ExemplosQuestoes() {
  const [copiadoIdx, setCopiadoIdx] = useState(-1)

  const exemplos = [
    {
      titulo: "ENEM - Matemática",
      json: `[
  {
    "pergunta": "Uma escola tem 500 alunos. Se 60% são meninas, quantas meninas há na escola?",
    "opcaoA": "200",
    "opcaoB": "300",
    "opcaoC": "400",
    "opcaoD": "500",
    "respostaCorreta": "B",
    "explicacao": "60% de 500 = 0,60 × 500 = 300 meninas",
    "materia": "Matemática",
    "banca": "ENEM",
    "nivel": "fácil"
  }
]`
    },
    {
      titulo: "ENEM - Geografia",
      json: `[
  {
    "pergunta": "Qual é a maior floresta tropical do mundo?",
    "opcaoA": "Floresta do Congo",
    "opcaoB": "Floresta Amazônica",
    "opcaoC": "Floresta Tropical da Ásia",
    "opcaoD": "Floresta Tropical da Austrália",
    "respostaCorreta": "B",
    "explicacao": "A Floresta Amazônica, localizada na América do Sul, é a maior floresta tropical do mundo, com cerca de 5,5 milhões de km².",
    "materia": "Geografia",
    "banca": "ENEM",
    "nivel": "médio"
  }
]`
    },
    {
      titulo: "CESPE - Questão",
      json: `[
  {
    "pergunta": "A Constituição Federal de 1988 é a lei fundamental do Brasil.",
    "opcaoA": "Certo",
    "opcaoB": "Errado",
    "opcaoC": "N/A",
    "opcaoD": "N/A",
    "respostaCorreta": "A",
    "explicacao": "A Constituição Federal de 1988, também conhecida como Constituição Cidadã, é efetivamente a lei fundamental que rege o Brasil.",
    "materia": "Direito Constitucional",
    "banca": "CESPE",
    "nivel": "médio"
  }
]`
    }
  ]

  const copiarParaClipboard = (json: string, idx: number) => {
    navigator.clipboard.writeText(json)
    setCopiadoIdx(idx)
    setTimeout(() => setCopiadoIdx(-1), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Exemplos de Questões 📋</h1>
          <Link href="/importar-questoes" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
            Voltar →
          </Link>
        </div>

        <div className="mb-6 p-4 bg-blue-900 rounded border border-blue-700">
          <p className="text-sm">
            💡 Copie qualquer exemplo abaixo e cole na página de importação. Você pode combinar múltiplas questões em um único JSON.
          </p>
        </div>

        <div className="space-y-6">
          {exemplos.map((ex, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{ex.titulo}</h2>
                <button
                  onClick={() => copiarParaClipboard(ex.json, idx)}
                  className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                    copiadoIdx === idx
                      ? 'bg-green-600'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {copiadoIdx === idx ? '✅ Copiado!' : '📋 Copiar'}
                </button>
              </div>

              <pre className="bg-gray-900 p-4 rounded border border-gray-700 overflow-x-auto text-sm">
                <code>{ex.json}</code>
              </pre>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold mb-3">📝 Como criar suas questões:</h3>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>Copie um dos exemplos acima</li>
            <li>Modifique os dados (pergunta, opções, etc)</li>
            <li>Você pode adicionar múltiplas questões em um único array</li>
            <li>Cole no importador</li>
            <li>Clique em "Importar Questões"</li>
          </ol>
        </div>

        <div className="mt-6 bg-green-900 p-6 rounded-2xl border border-green-700">
          <h3 className="text-lg font-bold mb-3">✅ Campos obrigatórios:</h3>
          <ul className="space-y-1 text-sm list-disc list-inside">
            <li><strong>pergunta</strong> - Texto da pergunta</li>
            <li><strong>opcaoA, opcaoB, opcaoC, opcaoD</strong> - As 4 opções (ou use "alternativas")</li>
            <li><strong>respostaCorreta</strong> - Letra da resposta (A, B, C ou D)</li>
            <li><strong>explicacao</strong> - Justificativa (opcional mas recomendado)</li>
            <li><strong>materia</strong> - Disciplina (ex: Matemática)</li>
            <li><strong>banca</strong> - Organizadora (ex: ENEM)</li>
            <li><strong>nivel</strong> - Dificuldade (fácil, médio, difícil)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
