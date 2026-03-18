'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HomeUpgradada() {
  const [sidebarAberto, setSidebarAberto] = useState(false)

  return (
    <div className="min-h-screen bg-gray-950">
      {/* 🎨 SEÇÃO 1: Hero com Imagem de Fundo */}
      <section 
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%)`
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl font-black text-white mb-4 drop-shadow-xl">
            📚 Plataforma de Questões
          </h1>
          <p className="text-2xl text-blue-100 drop-shadow-lg mb-8">
            Domine seus estudos com inteligência artificial
          </p>
          <Link href="/questoes" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl">
            Começar Agora →
          </Link>
        </div>
      </section>

      {/* 🎯 SEÇÃO 2: Features com Cards e Imagens */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Escolha Seu Caminho
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/questoes">
              <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  📝
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Resolver Questões</h3>
                  <p className="text-gray-300 mb-4">Pratique com centenas de questões do banco</p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-semibold">
                    Começar <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/importar-questoes">
              <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  📥
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Importar Questões</h3>
                  <p className="text-gray-300 mb-4">Suas próprias questões em JSON</p>
                  <div className="flex items-center text-green-400 group-hover:text-green-300 font-semibold">
                    Importar <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/gerar-com-gemini">
              <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  🤖
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Gerar com IA</h3>
                  <p className="text-gray-300 mb-4">Gemini 2.0 cria questões para você</p>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-semibold">
                    Gerar <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 💪 SEÇÃO 3: Como Funciona */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Simples e Poderoso
          </h2>

          <div className="space-y-12">
            {/* Passo 1 */}
            <div className="flex gap-8 items-center">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Adicione Questões</h3>
                <p className="text-gray-300 text-lg">
                  Importe suas questões em JSON, crie com IA ou adicione manualmente no painel admin
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="flex gap-8 items-center">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Escolha e Pratique</h3>
                <p className="text-gray-300 text-lg">
                  Selecione matéria, banca e nível de dificuldade para começar a resolver
                </p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="flex gap-8 items-center">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Aprenda com Feedback</h3>
                <p className="text-gray-300 text-lg">
                  Receba explicações detalhadas de cada questão e melhore seu conhecimento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 SEÇÃO 4: Stats */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">∞</div>
            <p className="text-blue-100">Questões Ilimitadas</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">🤖</div>
            <p className="text-green-100">IA Gemini 2.0</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">⚡</div>
            <p className="text-purple-100">Feedback Imediato</p>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">📱</div>
            <p className="text-orange-100">Funciona em Tudo</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Pronto para Começar?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="/questoes"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Resolver Questões
            </Link>
            <Link 
              href="/importar-questoes"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all shadow-xl border border-white/20"
            >
              Importar Minhas Questões
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Plataforma de Questões | Feito com ❤️ para você estudar melhor</p>
        </div>
      </footer>
    </div>
  )
}

// Para usar esta página, salve em: app/exemplos/home-melhorada.tsx
// E acesse em: localhost:3000/exemplos/home-melhorada
