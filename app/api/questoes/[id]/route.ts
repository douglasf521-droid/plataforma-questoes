import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const questao = await prisma.questao.findUnique({
      where: { id: parseInt(id) },
    })

    if (!questao) {
      return Response.json({ erro: 'Questão não encontrada' }, { status: 404 })
    }

    return Response.json(questao)
  } catch (error) {
    return Response.json({ erro: 'Erro ao buscar questão' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const dados = await req.json()

    const questao = await prisma.questao.update({
      where: { id: parseInt(id) },
      data: dados,
    })

    return Response.json(questao)
  } catch (error) {
    return Response.json({ erro: 'Erro ao atualizar questão' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await prisma.questao.delete({
      where: { id: parseInt(id) },
    })

    return Response.json({ sucesso: true })
  } catch (error) {
    return Response.json({ erro: 'Erro ao deletar questão' }, { status: 500 })
  }
}
