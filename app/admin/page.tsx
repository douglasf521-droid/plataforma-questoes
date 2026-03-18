'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Questao {
  id: number
  pergunta: string
  opcaoA: string
  opcaoB: string
  opcaoC: string
  opcaoD: string
  respostaCorreta: string
  explicacao: string
  materia: string
  banca: string
  nivel: string
  fonte?: string
}

export default function Admin() {
  const [questoes, setQuestoes] = useState<Questao[]>([])
  const [formulario, setFormulario] = useState({
    pergunta: '',
    opcaoA: '',
    opcaoB: '',
    opcaoC: '',
    opcaoD: '',
    respostaCorreta: 'A',
    explicacao: '',
    materia: 'Matemática',
    banca: 'ENEM',
    nivel: 'médio',
    fonte: '',
  })
  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState('')

  const materias = ['Matemática', 'Português', 'História', 'Geografia', 'Biologia', 'Física', 'Química']
  const bancas = ['ENEM', 'CESPE', 'FCC', 'VUNESP', 'BANCA BRASIL']
  const niveis = ['fácil', 'médio', 'difícil']

  useEffect(() => {
    carregarQuestoes()
  }, [])

  async function carregarQuestoes() {
    try {
      const res = await fetch('/api/questoes')
      const dados = await res.json()
      setQuestoes(dados)
    } catch (erro) {
      console.error('Erro ao carregar:', erro)
    }
  }

  async function adicionarQuestao(e: React.FormEvent) {
    e.preventDefault()
    setCarregando(true)

    try {
      const res = await fetch('/api/questoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formulario),
      })

      if (res.ok) {
        setMensagem('✅ Questão adicionada com sucesso!')
        setFormulario({
          pergunta: '',
          opcaoA: '',
          opcaoB: '',
          opcaoC: '',
          opcaoD: '',
          respostaCorreta: 'A',
          explicacao: '',
          materia: 'Matemática',
          banca: 'ENEM',
          nivel: 'médio',
          fonte: '',
        })
        await carregarQuestoes()
        setTimeout(() => setMensagem(''), 3000)
      }
    } catch (erro) {
      setMensagem('❌ Erro ao adicionar questão')
    } finally {
      setCarregando(false)
    }
  }

  async function deletarQuestao(id: number) {
    if (confirm('Tem certeza?')) {
      try {
        await fetch(`/api/questoes/${id}`, { method: 'DELETE' })
        await carregarQuestoes()
      } catch (erro) {
        console.error('Erro ao deletar:', erro)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">📊 Painel de Admin</h1>

        {/* Botões de Ação */}
        <div className="mb-8 flex gap-4 flex-wrap">
          <Link href="/importar-questoes" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold transition-colors">
            📥 Importar Questões (JSON)
          </Link>
          <Link href="/questoes" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold transition-colors">
            ← Voltar para Questões
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">➕ Adicionar Questão</h2>

            <form onSubmit={adicionarQuestao} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Pergunta</label>
                <textarea
                  value={formulario.pergunta}
                  onChange={(e) => setFormulario({ ...formulario, pergunta: e.target.value })}
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {['opcaoA', 'opcaoB', 'opcaoC', 'opcaoD'].map((campo) => (
                  <div key={campo}>
                    <label className="block text-sm mb-1">{campo.toUpperCase()}</label>
                    <input
                      type="text"
                      value={formulario[campo as keyof typeof formulario] as string}
                      onChange={(e) =>
                        setFormulario({ ...formulario, [campo]: e.target.value })
                      }
                      className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm mb-1">Resposta Correta</label>
                <select
                  value={formulario.respostaCorreta}
                  onChange={(e) => setFormulario({ ...formulario, respostaCorreta: e.target.value })}
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                >
                  {['A', 'B', 'C', 'D'].map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">Explicação</label>
                <textarea
                  value={formulario.explicacao}
                  onChange={(e) => setFormulario({ ...formulario, explicacao: e.target.value })}
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-sm mb-1">Matéria</label>
                  <select
                    value={formulario.materia}
                    onChange={(e) => setFormulario({ ...formulario, materia: e.target.value })}
                    className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                  >
                    {materias.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1">Banca</label>
                  <select
                    value={formulario.banca}
                    onChange={(e) => setFormulario({ ...formulario, banca: e.target.value })}
                    className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                  >
                    {bancas.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1">Nível</label>
                  <select
                    value={formulario.nivel}
                    onChange={(e) => setFormulario({ ...formulario, nivel: e.target.value })}
                    className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                  >
                    {niveis.map((n) => (
                      <option key={n} value={n}>
                        {n.charAt(0).toUpperCase() + n.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Fonte (opcional)</label>
                <input
                  type="text"
                  value={formulario.fonte}
                  onChange={(e) => setFormulario({ ...formulario, fonte: e.target.value })}
                  placeholder="Ex: ENEM 2023"
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                />
              </div>

              <button
                type="submit"
                disabled={carregando}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 p-3 rounded-lg font-bold transition-colors"
              >
                {carregando ? '⏳ Salvando...' : '✅ Adicionar Questão'}
              </button>

              {mensagem && (
                <div className="p-3 bg-blue-900 rounded border border-blue-700 text-blue-200">
                  {mensagem}
                </div>
              )}
            </form>
          </div>

          {/* Lista */}
          <div className="bg-gray-800 p-6 rounded-2xl max-h-[800px] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">📋 Questões ({questoes.length})</h2>

            <div className="space-y-3">
              {questoes.map((q) => (
                <div key={q.id} className="bg-gray-700 p-3 rounded border border-gray-600">
                  <p className="font-bold text-sm">{q.pergunta.substring(0, 50)}...</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {q.materia} • {q.banca} • {q.nivel}
                  </p>
                  <button
                    onClick={() => deletarQuestao(q.id)}
                    className="mt-2 text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
                  >
                    🗑️ Deletar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
