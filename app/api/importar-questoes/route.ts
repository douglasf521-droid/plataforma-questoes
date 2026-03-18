import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { questoes } = await req.json()

    if (!questoes || !Array.isArray(questoes)) {
      return Response.json(
        { erro: 'Envie um array de questões' },
        { status: 400 }
      )
    }

    const questoesProcessadas = questoes.map((q: any) => ({
      pergunta: q.pergunta,
      opcaoA: q.opcaoA || q.alternativas?.A,
      opcaoB: q.opcaoB || q.alternativas?.B,
      opcaoC: q.opcaoC || q.alternativas?.C,
      opcaoD: q.opcaoD || q.alternativas?.D,
      respostaCorreta: q.respostaCorreta || q.correta,
      explicacao: q.explicacao || q.explanation || '',
      materia: q.materia || 'Sem Categoria',
      banca: q.banca || 'Diversas',
      nivel: q.nivel || 'médio',
      fonte: q.fonte || 'importada'
    }))

    // Salvar todas as questões
    const salvas = await prisma.questao.createMany({
      data: questoesProcessadas,
      skipDuplicates: false
    })

    console.log(`✅ ${salvas.count} questões importadas`)

    // Buscar as questões salvas para retornar
    const questaosSalvas = await prisma.questao.findMany({
      take: questoesProcessadas.length,
      orderBy: { id: 'desc' }
    })

    return Response.json({
      sucesso: true,
      total: salvas.count,
      questoes: questaosSalvas.reverse()
    })

  } catch (error) {
    console.error('❌ Erro ao importar:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return Response.json(
      { erro: `Erro ao importar questões: ${errorMessage}` },
      { status: 500 }
    )
  }
}
