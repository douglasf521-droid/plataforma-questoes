'use client'

import { useState } from 'react'

interface Questao {
  pergunta: string
  A: string
  B: string
  C: string
  D: string
  correta: string
  explicacao: string
}

export default function Questoes() {
  const [resposta, setResposta] = useState('')
  const [resultado, setResultado] = useState(null)
  const [questao, setQuestao] = useState<Questao | null>(null)
  const [carregando, setCarregando] = useState(false)
  const [materia, setMateria] = useState('Matemática')
  const [banca, setBanca] = useState('ENEM')
  const [nivel, setNivel] = useState('médio')
  const [mostraFormulario, setMostraFormulario] = useState(true)

  const materias = ['Matemática', 'Português', 'História', 'Geografia', 'Biologia', 'Física', 'Química']
  const bancas = ['ENEM', 'CESPE', 'FCC', 'VUNESP', 'BANCA BRASIL']
  const niveis = ['fácil', 'médio', 'difícil']

  async function gerarQuestao() {
    setCarregando(true)
    setResultado(null)
    setResposta('')

    try {
      console.log('Buscando questão do banco de dados...', { materia, banca, nivel })
      
      // Primeiro tenta buscar do banco de dados
      const res = await fetch(`/api/questoes?materia=${materia}&banca=${banca}&nivel=${nivel}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      const questoesBanco = await res.json()
      console.log('Questões do banco:', questoesBanco.length)

      if (questoesBanco.length > 0) {
        // Seleciona aleatoriamente uma do banco
        const questaoAleatoria = questoesBanco[Math.floor(Math.random() * questoesBanco.length)]
        
        const novaQuestao: Questao = {
          pergunta: questaoAleatoria.pergunta,
          A: questaoAleatoria.opcaoA,
          B: questaoAleatoria.opcaoB,
          C: questaoAleatoria.opcaoC,
          D: questaoAleatoria.opcaoD,
          correta: questaoAleatoria.respostaCorreta,
          explicacao: questaoAleatoria.explicacao,
        }

        console.log('Questão do banco carregada:', novaQuestao)
        setQuestao(novaQuestao)
        setMostraFormulario(false)
        setCarregando(false)
        return
      }

      console.log('Nenhuma questão no banco, tentando IA...')

      // Se não tiver no banco, mostra mensagem
      setResultado('❌ Nenhuma questão disponível. Vá para o Admin e importe questões em JSON!')
      setCarregando(false)
      return
    } catch (erro) {
      console.error('Erro na função:', erro)
      setResultado(`Erro: ${erro instanceof Error ? erro.message : String(erro)}`)
      setCarregando(false)
    }
  }

  function verificar() {
    if (!questao) return

    if (resposta === questao.correta) {
      setResultado('Acertou ✅')
    } else {
      setResultado(`Errou ❌ Resposta correta: ${questao.correta}`)
    }
  }

  function proximaQuestao() {
    setResposta('')
    setResultado(null)
    setMostraFormulario(true)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Plataforma de Questões 📚</h1>

      {mostraFormulario ? (
        // Formulário de seleção
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-md">
          <h2 className="text-xl font-bold mb-4">Gerar Nova Questão</h2>

          <div className="mb-4">
            <label className="block text-sm mb-2">Matéria</label>
            <select
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-white border border-gray-600"
            >
              {materias.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Banca</label>
            <select
              value={banca}
              onChange={(e) => setBanca(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-white border border-gray-600"
            >
              {bancas.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Nível de Dificuldade</label>
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

          <button
            onClick={gerarQuestao}
            disabled={carregando}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-3 rounded-lg font-bold transition-colors"
          >
            {carregando ? '⏳ Gerando... (aguarde até 30s)' : 'Gerar Questão'}
          </button>

          {resultado && (
            <div className="mt-4 p-3 bg-red-900 rounded-lg border border-red-700">
              <p className="text-red-200">{resultado}</p>
            </div>
          )}
        </div>
      ) : questao ? (
        // Questão
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-2xl">
          <div className="mb-4">
            <p className="text-xs text-gray-400">
              {materia} • {banca} • {nivel}
            </p>
            <h2 className="text-xl font-bold mt-2">{questao.pergunta}</h2>
          </div>

          <div className="space-y-2 mb-6">
            {(['A', 'B', 'C', 'D'] as const).map((letra) => (
              <button
                key={letra}
                onClick={() => !resultado && setResposta(letra)}
                className={`w-full text-left p-3 rounded-lg font-medium transition-colors ${
                  resposta === letra
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                } ${resultado && 'cursor-not-allowed'}`}
              >
                {letra}) {questao[letra]}
              </button>
            ))}
          </div>

          <button
            onClick={verificar}
            disabled={!resposta || !!resultado}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-bold transition-colors mb-4"
          >
            Responder
          </button>

          {resultado && (
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <p className="font-bold text-lg mb-2">{resultado}</p>
              <p className="text-gray-300">{questao.explicacao}</p>
              <button
                onClick={proximaQuestao}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-bold transition-colors"
              >
                Próxima Questão
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}
