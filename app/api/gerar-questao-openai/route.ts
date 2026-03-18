import { GoogleGenerativeAI } from "@google/generative-ai"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)

// Função de delay (espera em ms)
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Retry com exponential backoff
async function gerarComRetry(prompt: string, tentativa = 0): Promise<string> {
  const MAX_TENTATIVAS = 3
  const DELAY_INICIAL = 2000 // 2 segundos

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
    const result = await model.generateContent(prompt)
    const response = result.response
    return response.text()
  } catch (error: any) {
    // Se for erro 429 (Too Many Requests) e ainda tiver tentativas
    if (error?.status === 429 && tentativa < MAX_TENTATIVAS) {
      const delayMs = DELAY_INICIAL * Math.pow(2, tentativa) // Exponential backoff
      console.log(`⏳ Rate limit atingido. Aguardando ${delayMs / 1000}s antes de retry...`)
      await sleep(delayMs)
      return gerarComRetry(prompt, tentativa + 1)
    }
    throw error
  }
}

export async function POST(req: Request) {
  try {
    const { materia, banca, nivel, quantidade = 1 } = await req.json()

    // Limitar a quantidade máxima por requisição para evitar rate limit
    const qtd = Math.min(parseInt(quantidade), 3)

    console.log('Gerando questões com Gemini:', { materia, banca, nivel, quantidade: qtd })

    const questoesGeradas = []

    for (let i = 0; i < qtd; i++) {
      // Delay entre questões (importante para não estourar rate limit)
      if (i > 0) {
        console.log(`⏳ Aguardando 3s antes da próxima questão...`)
        await sleep(3000)
      }

      const prompt = `Você é um especialista em concursos públicos. Crie uma questão INÉDITA e ORIGINAL no estilo da banca ${banca}, sobre ${materia}, nível ${nivel}.

IMPORTANTE: Retorne APENAS em JSON VÁLIDO, sem nenhum texto antes ou depois:

{
  "pergunta": "texto da pergunta",
  "alternativas": {
    "A": "opção A",
    "B": "opção B",
    "C": "opção C",
    "D": "opção D"
  },
  "correta": "A",
  "explicacao": "explicação clara"
}`

      // Usar retry com exponential backoff
      const texto = await gerarComRetry(prompt)

      console.log('Resposta Gemini:', texto.substring(0, 100) + '...')

      if (!texto) throw new Error('Resposta vazia do Gemini')

      // Parse JSON
      let questao
      try {
        // Remove markdown code blocks se existirem
        let jsonText = texto.trim()
        if (jsonText.startsWith('```json')) {
          jsonText = jsonText.replace(/^```json\n/, '').replace(/\n```$/, '')
        } else if (jsonText.startsWith('```')) {
          jsonText = jsonText.replace(/^```\n/, '').replace(/\n```$/, '')
        }
        questao = JSON.parse(jsonText)
      } catch (e) {
        console.error('Erro ao fazer parse JSON:', texto)
        throw new Error(`JSON inválido do Gemini: ${texto.substring(0, 100)}`)
      }

      // Validar estrutura
      if (!questao.pergunta || !questao.alternativas || !questao.correta || !questao.explicacao) {
        throw new Error('Resposta do Gemini sem campos obrigatórios')
      }

      // Salvar no banco de dados Prisma (ao invés de Supabase)
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/questoes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pergunta: questao.pergunta,
          opcaoA: questao.alternativas.A,
          opcaoB: questao.alternativas.B,
          opcaoC: questao.alternativas.C,
          opcaoD: questao.alternativas.D,
          respostaCorreta: questao.correta,
          explicacao: questao.explicacao,
          materia: materia,
          banca: banca,
          nivel: nivel
        })
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(`Erro ao salvar questão: ${err.erro}`)
      }

      questoesGeradas.push(questao)
      console.log(`✅ Questão ${i + 1}/${qtd} salva com sucesso`)
    }

    return Response.json({
      sucesso: true,
      total: questoesGeradas.length,
      questoes: questoesGeradas
    })

  } catch (error) {
    console.error('❌ Erro:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return Response.json(
      { erro: `Erro ao gerar questões: ${errorMessage}` },
      { status: 500 }
    )
  }
}
