import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const questao = await prisma.questao.findUnique({
      where: { id: parseInt(params.id) },
    })

    if (!questao) {
      return Response.json({ erro: 'Questão não encontrada' }, { status: 404 })
    }

    return Response.json(questao)
  } catch (error) {
    return Response.json({ erro: 'Erro ao buscar questão' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const dados = await req.json()

    const questao = await prisma.questao.update({
      where: { id: parseInt(params.id) },
      data: dados,
    })

    return Response.json(questao)
  } catch (error) {
    return Response.json({ erro: 'Erro ao atualizar questão' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.questao.delete({
      where: { id: parseInt(params.id) },
    })

    return Response.json({ sucesso: true })
  } catch (error) {
    return Response.json({ erro: 'Erro ao deletar questão' }, { status: 500 })
  }
}
