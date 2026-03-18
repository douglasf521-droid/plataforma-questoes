import { GoogleGenerativeAI } from "@google/generative-ai";

// Banco de questões estáticas como fallback
const questoesEstáticas: Record<string, any[]> = {
  'Matemática-ENEM-fácil': [
    {
      pergunta: "Qual é o resultado de 2 + 2 × 3?",
      A: "8",
      B: "12",
      C: "6",
      D: "10",
      correta: "C",
      explicacao: "Pela ordem de operações, primeiro fazemos a multiplicação: 2 × 3 = 6, depois a soma: 2 + 6 = 8"
    },
    {
      pergunta: "Quanto é 50% de 200?",
      A: "50",
      B: "100",
      C: "150",
      D: "200",
      correta: "B",
      explicacao: "50% significa metade. Metade de 200 é 100."
    }
  ],
  'Português-ENEM-fácil': [
    {
      pergunta: "Qual palavra está grafada corretamente?",
      A: "Recebimento",
      B: "Recebimeto",
      C: "Recebimento",
      D: "Recebemento",
      correta: "A",
      explicacao: "A grafia correta é 'recebimento', com 'i' na primeira sílaba do sufixo -mento"
    }
  ],
  'História-ENEM-médio': [
    {
      pergunta: "Em que ano terminou a Primeira Guerra Mundial?",
      A: "1916",
      B: "1918",
      C: "1920",
      D: "1922",
      correta: "B",
      explicacao: "A Primeira Guerra Mundial terminou em 11 de novembro de 1918 com o Armistício"
    }
  ],
  'Biologia-ENEM-médio': [
    {
      pergunta: "Qual organela é responsável pela produção de energia na célula?",
      A: "Núcleo",
      B: "Mitocôndria",
      C: "Lisossomo",
      D: "Ribossomo",
      correta: "B",
      explicacao: "A mitocôndria é a organela responsável pela respiração celular e produção de ATP, a molécula de energia da célula"
    }
  ],
  'Física-ENEM-fácil': [
    {
      pergunta: "O que é velocidade?",
      A: "A distância percorrida",
      B: "A aceleração de um objeto",
      C: "A razão entre a distância percorrida e o tempo gasto",
      D: "A força aplicada a um objeto",
      correta: "C",
      explicacao: "Velocidade é definida como a razão entre a distância percorrida e o tempo necessário para percorrê-la."
    }
  ],
  'Geografia-ENEM-médio': [
    {
      pergunta: "Qual é a capital da Austrália?",
      A: "Sydney",
      B: "Melbourne",
      C: "Camberra",
      D: "Brisbane",
      correta: "C",
      explicacao: "Camberra é a capital federal da Austrália, construída especificamente para ser a capital do país."
    }
  ]
};

export async function POST(req: Request) {
  try {
    const { materia, banca, nivel } = await req.json();

    console.log("🔍 Requisição recebida:", { materia, banca, nivel });

    // Tentar usar questão estática primeiro
    const chaveEstática = `${materia}-${banca}-${nivel}`;
    if (questoesEstáticas[chaveEstática] && questoesEstáticas[chaveEstática].length > 0) {
      const questoes = questoesEstáticas[chaveEstática];
      const questao = questoes[Math.floor(Math.random() * questoes.length)];
      
      const texto = `Pergunta: ${questao.pergunta}
A) ${questao.A}
B) ${questao.B}
C) ${questao.C}
D) ${questao.D}
Resposta correta: ${questao.correta}
Explicação: ${questao.explicacao}`;
      
      console.log("✅ Usando questão estática");
      return Response.json({ texto });
    }

    console.log("⚠️ Nenhuma questão pré-configurada para estas opções");
    
    return Response.json(
      { erro: "Questões não disponíveis para esta combinação. Use o Painel de Admin para adicionar questões." },
      { status: 404 }
    );

  } catch (error) {
    console.error("❌ Erro ao gerar questão:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return Response.json(
      { erro: `Erro ao gerar questão: ${errorMessage}` },
      { status: 500 }
    );
  }
}
