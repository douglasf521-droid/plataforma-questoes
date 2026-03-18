import Link from 'next/link'

export default function HomeElite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-yellow-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* 🎯 HERO SECTION */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo/Branding */}
          <div className="mb-8 animate-pulse">
            <div className="text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl">
              👑 PREPARAÇÃO DE ELITE 👑
            </div>
          </div>

          {/* Tagline */}
          <p className="text-2xl text-yellow-200 mb-8 font-bold drop-shadow-lg">
            DOMINE OS CONHECIMENTOS. CONQUISTE SEU FUTURO.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <Link href="/questoes">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black text-lg rounded-lg hover:from-yellow-500 hover:to-yellow-300 transition-all shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/70 hover:scale-105 transform">
                <span className="relative z-10">⚔️ INICIAR COMBATE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg opacity-0 group-hover:opacity-50 blur-xl transition-all -z-10"></div>
              </button>
            </Link>

            <Link href="/importar-questoes">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-black text-lg rounded-lg hover:from-red-600 hover:to-red-500 transition-all shadow-2xl shadow-red-600/50 hover:shadow-red-500/70 hover:scale-105 transform">
                <span className="relative z-10">📥 CARREGAR ARSENAL</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 rounded-lg opacity-0 group-hover:opacity-50 blur-xl transition-all -z-10"></div>
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-600/30 rounded-lg p-6 shadow-xl backdrop-blur">
              <div className="text-4xl font-black text-yellow-400 mb-2">∞</div>
              <p className="text-yellow-200 font-bold">Questões</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-600/30 rounded-lg p-6 shadow-xl backdrop-blur">
              <div className="text-4xl font-black text-red-500 mb-2">🤖</div>
              <p className="text-yellow-200 font-bold">IA Poderosa</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-600/30 rounded-lg p-6 shadow-xl backdrop-blur">
              <div className="text-4xl font-black text-blue-400 mb-2">⚡</div>
              <p className="text-yellow-200 font-bold">Feedback Real</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 FEATURES SECTION */}
      <section className="relative py-20 px-6 border-y border-yellow-700/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
            SEUS PODERES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/questoes">
              <div className="group h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-600/20 hover:border-yellow-500/50 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">⚔️</div>
                <h3 className="text-2xl font-black text-yellow-400 mb-3">DESAFIOS ÉPICOS</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Enfrente questões selecionadas das melhores bancas. Você está preparado?
                </p>
                <div className="flex items-center text-yellow-400 font-bold group-hover:gap-3 transition-all">
                  ENTRAR EM COMBATE
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/importar-questoes">
              <div className="group h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-red-600/20 hover:border-red-500/50 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">📥</div>
                <h3 className="text-2xl font-black text-red-400 mb-3">CARREGAR ARSENAL</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Importe suas questões em JSON. Customize seu treinamento.
                </p>
                <div className="flex items-center text-red-400 font-bold group-hover:gap-3 transition-all">
                  ADICIONAR QUESTÕES
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/gerar-com-gemini">
              <div className="group h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-purple-600/20 hover:border-purple-500/50 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">🤖</div>
                <h3 className="text-2xl font-black text-purple-400 mb-3">PODER DA IA</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Gemini 2.0 cria questões sob demanda. Treinamento infinito.
                </p>
                <div className="flex items-center text-purple-400 font-bold group-hover:gap-3 transition-all">
                  CRIAR QUESTÕES
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/admin">
              <div className="group h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-blue-600/20 hover:border-blue-500/50 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">⚙️</div>
                <h3 className="text-2xl font-black text-blue-400 mb-3">PAINEL DE CONTROLE</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Gerencie seu arsenal pessoal. Customize tudo ao seu jeito.
                </p>
                <div className="flex items-center text-blue-400 font-bold group-hover:gap-3 transition-all">
                  GERENCIAR
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exemplos-questoes">
              <div className="group h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-green-600/20 hover:border-green-500/50 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">📋</div>
                <h3 className="text-2xl font-black text-green-400 mb-3">EXEMPLOS</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Veja templates prontos para copiar. Comece imediatamente.
                </p>
                <div className="flex items-center text-green-400 font-bold group-hover:gap-3 transition-all">
                  VER TEMPLATES
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            </Link>

            {/* Card 6 - Upgrade */}
            <div className="group h-full bg-gradient-to-br from-yellow-900/40 via-gold-800/40 to-black border-2 border-yellow-500/40 hover:border-yellow-400/70 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-1 text-xs font-black rounded-bl-lg">
                PREMIUM
              </div>
              <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">👑</div>
              <h3 className="text-2xl font-black text-yellow-300 mb-3">MODO ELITE PREMIUM</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Em breve: Estatísticas avançadas, certificados e muito mais.
              </p>
              <div className="flex items-center text-yellow-300 font-bold opacity-50">
                EM DESENVOLVIMENTO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 SISTEMA DE PROGRESSÃO */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            🏆 SUBA DE NÍVEL
          </h2>

          <div className="space-y-6">
            {[
              { nivel: 'RECRUTA', xp: '0-500', icone: '🥚' },
              { nivel: 'SOLDADO', xp: '501-1.000', icone: '⚔️' },
              { nivel: 'GUERREIRO', xp: '1.001-2.500', icone: '🛡️' },
              { nivel: 'CAVALEIRO', xp: '2.501-5.000', icone: '🐴' },
              { nivel: 'LEGENDA', xp: '5.001+', icone: '👑' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 bg-gradient-to-r from-gray-900 to-gray-800 border border-yellow-600/20 rounded-lg p-6 hover:border-yellow-500/50 transition-all">
                <div className="text-5xl">{item.icone}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-yellow-400">{item.nivel}</h3>
                  <p className="text-gray-400">{item.xp} XP</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-400">Recompensas</div>
                  <div className="text-yellow-400 font-black">+{(idx + 1) * 100} CRÉDITOS</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 CTA FINAL */}
      <section className="relative py-20 px-6 border-t border-yellow-700/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            ESTÁ PRONTO PARA A JORNADA?
          </h2>

          <p className="text-xl text-yellow-200 mb-12 leading-relaxed">
            Junte-se aos elevados. Comece seu treinamento de elite hoje.
            Apenas os determinados chegam ao topo.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/questoes">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black text-xl rounded-xl hover:from-yellow-500 hover:to-yellow-300 transition-all shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/70 hover:scale-110 transform">
                <span className="relative z-10">⚔️ COMEÇAR AGORA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-all -z-10"></div>
              </button>
            </Link>

            <Link href="/admin">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-gray-700 to-gray-600 text-yellow-300 font-black text-xl rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all shadow-2xl border-2 border-yellow-600 hover:scale-110 transform">
                <span className="relative z-10">⚙️ GERENCIAR</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-yellow-700/30 bg-gradient-to-r from-black via-yellow-950/20 to-black text-center">
        <p className="text-yellow-300 font-bold mb-2">PREPARAÇÃO DE ELITE © 2026</p>
        <p className="text-gray-500 text-sm">
          Sistema de Treinamento Inteligente para Concursos • Desenvolvido com IA
        </p>
      </footer>
    </div>
  )
}
