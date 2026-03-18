import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-yellow-950">
      {/* Banner Principal - Elite Theme */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-yellow-700 via-yellow-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-yellow-400 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-white drop-shadow-lg">
            👑 PREPARAÇÃO DE ELITE
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 drop-shadow-md font-bold">
            Domine seus conhecimentos. Conquiste seu futuro.
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Cards de Navegação */}
        <section className="mb-20">
          <h2 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 text-center">
            SEUS PODERES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Resolver Questões */}
            <Link href="/questoes">
              <div className="group h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-yellow-900/40 hover:to-gray-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-yellow-500/30 border border-yellow-600/20 hover:border-yellow-500/50">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">⚔️</div>
                <h3 className="text-2xl font-black mb-3 text-yellow-400">DESAFIOS</h3>
                <p className="text-gray-300 mb-4">Enfrente questões selecionadas das melhores bancas</p>
                <div className="flex items-center text-yellow-400 font-bold group-hover:text-yellow-300">
                  <span>INICIAR COMBATE</span>
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Importar Questões */}
            <Link href="/importar-questoes">
              <div className="group h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-red-900/40 hover:to-gray-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-red-500/30 border border-red-600/20 hover:border-red-500/50">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📥</div>
                <h3 className="text-2xl font-black mb-3 text-red-400">ARSENAL</h3>
                <p className="text-gray-300 mb-4">Importe suas questões em JSON. Customize seu arsenal.</p>
                <div className="flex items-center text-red-400 font-bold group-hover:text-red-300">
                  <span>CARREGAR</span>
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 3: Gerar com IA */}
            <Link href="/gerar-com-gemini">
              <div className="group h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-purple-900/40 hover:to-gray-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-600/20 hover:border-purple-500/50">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-2xl font-black mb-3 text-purple-400">PODER IA</h3>
                <p className="text-gray-300 mb-4">Gemini cria questões sob demanda. Treinamento infinito.</p>
                <div className="flex items-center text-purple-400 font-bold group-hover:text-purple-300">
                  <span>CRIAR</span>
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 4: Admin */}
            <Link href="/admin">
              <div className="group h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-blue-900/40 hover:to-gray-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 border border-blue-600/20 hover:border-blue-500/50">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
                <h3 className="text-2xl font-black mb-3 text-blue-400">CONTROLE</h3>
                <p className="text-gray-300 mb-4">Gerencie seu arsenal pessoal. Customize tudo.</p>
                <div className="flex items-center text-blue-400 font-bold group-hover:text-blue-300">
                  <span>GERENCIAR</span>
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 5: Exemplos */}
            <Link href="/exemplos-questoes">
              <div className="group h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-green-900/40 hover:to-gray-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-green-500/30 border border-green-600/20 hover:border-green-500/50">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-2xl font-black mb-3 text-green-400">EXEMPLOS</h3>
                <p className="text-gray-300 mb-4">Templates prontos para copiar e usar imediatamente.</p>
                <div className="flex items-center text-green-400 font-bold group-hover:text-green-300">
                  <span>VER</span>
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 6: Premium */}
            <div className="group h-full bg-gradient-to-br from-yellow-900/20 to-gray-800 rounded-2xl p-8 cursor-pointer shadow-lg border border-yellow-500/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-xs font-black uppercase">
                Premium
              </div>
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">👑</div>
              <h3 className="text-2xl font-black mb-3 text-yellow-300">ELITE PREMIUM</h3>
              <p className="text-gray-400 mb-4">Recursos avançados em desenvolvimento.</p>
              <div className="flex items-center text-yellow-300/50 font-bold text-sm">
                EM BREVE
              </div>
            </div>
          </div>
        </section>

        {/* Guia de Uso */}
        <section className="mb-20">
          <h2 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 text-center">
            COMO FUNCIONA
          </h2>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-yellow-600/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center text-3xl font-black text-black mb-4 shadow-lg shadow-yellow-500/50">
                  1
                </div>
                <h3 className="text-lg font-black text-yellow-400 mb-3">ADICIONE</h3>
                <p className="text-gray-300">
                  Use <strong>Arsenal</strong> ou <strong>Poder IA</strong> para adicionar questões
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-3xl font-black text-white mb-4 shadow-lg shadow-red-500/50">
                  2
                </div>
                <h3 className="text-lg font-black text-red-400 mb-3">PRATIQUE</h3>
                <p className="text-gray-300">
                  Acesse <strong>Desafios</strong> e filtre por matéria, banca e nível
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-3xl font-black text-white mb-4 shadow-lg shadow-purple-500/50">
                  3
                </div>
                <h3 className="text-lg font-black text-purple-400 mb-3">APRENDA</h3>
                <p className="text-gray-300">
                  Receba feedback imediato com explicações detalhadas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formato JSON */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 text-center">
            FORMATO DE IMPORTAÇÃO
          </h2>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-yellow-600/20">
            <p className="text-gray-300 mb-6">
              Para importar questões, use o seguinte formato JSON:
            </p>
            
            <div className="bg-black rounded-lg p-6 overflow-x-auto mb-6 border border-yellow-600/20">
              <pre className="text-sm text-yellow-300 font-mono">{`[
  {
    "pergunta": "Qual é a capital da França?",
    "opcaoA": "Londres",
    "opcaoB": "Paris",
    "opcaoC": "Berlim",
    "opcaoD": "Madri",
    "respostaCorreta": "B",
    "materia": "Geografia",
    "banca": "ENEM",
    "nivel": "Fácil",
    "explicacao": "Paris é a capital da França"
  }
]`}</pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-black text-yellow-400 mb-3">✓ OBRIGATÓRIOS</h3>
                <ul className="text-gray-300 space-y-2 text-sm font-semibold">
                  <li>• pergunta</li>
                  <li>• opcaoA, opcaoB, opcaoC, opcaoD</li>
                  <li>• respostaCorreta (A, B, C ou D)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-black text-red-400 mb-3">○ OPCIONAIS</h3>
                <ul className="text-gray-300 space-y-2 text-sm font-semibold">
                  <li>• explicacao</li>
                  <li>• materia</li>
                  <li>• banca</li>
                  <li>• nivel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-yellow-700/30 bg-gradient-to-r from-black via-yellow-950/10 to-black py-8 px-6 mt-20 text-center">
        <p className="text-yellow-300 font-black mb-2">PREPARAÇÃO DE ELITE © 2026</p>
        <p className="text-gray-400 text-sm">
          Sistema de Treinamento Inteligente • Powered by Gemini IA
        </p>
      </footer>
    </div>
  );
}
