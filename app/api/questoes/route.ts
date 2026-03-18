import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const materia = searchParams.get('materia')
    const banca = searchParams.get('banca')
    const nivel = searchParams.get('nivel')

    const questoes = await prisma.questao.findMany({
      where: {
        ...(materia && { materia }),
        ...(banca && { banca }),
        ...(nivel && { nivel }),
      },
      orderBy: { criadoEm: 'desc' },
    })

    return Response.json(questoes)
  } catch (error) {
    console.error('Erro ao buscar questões:', error)
    return Response.json({ erro: 'Erro ao buscar questões' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { pergunta, opcaoA, opcaoB, opcaoC, opcaoD, respostaCorreta, explicacao, materia, banca, nivel, fonte } = await req.json()

    if (!pergunta || !opcaoA || !opcaoB || !opcaoC || !opcaoD || !respostaCorreta || !materia || !banca || !nivel) {
      return Response.json({ erro: 'Campos obrigatórios faltando' }, { status: 400 })
    }

    const questao = await prisma.questao.create({
      data: {
        pergunta,
        opcaoA,
        opcaoB,
        opcaoC,
        opcaoD,
        respostaCorreta,
        explicacao: explicacao || '',
        materia,
        banca,
        nivel,
        fonte: fonte || '',
      },
    })

    return Response.json(questao, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar questão:', error)
    return Response.json({ erro: 'Erro ao criar questão' }, { status: 500 })
  }
}
