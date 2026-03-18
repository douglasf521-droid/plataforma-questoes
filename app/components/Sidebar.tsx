'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { icon: '📊', label: 'Dashboard', href: '/' },
    { icon: '📝', label: 'Resolver', href: '/questoes' },
    { icon: '📥', label: 'Importar', href: '/importar-questoes' },
    { icon: '🤖', label: 'Gerar IA', href: '/gerar-com-gemini' },
    { icon: '⚙️', label: 'Admin', href: '/admin' },
    { icon: '📋', label: 'Exemplos', href: '/exemplos-questoes' },
  ]

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 z-50 ${
        expanded ? 'w-56' : 'w-20'
      } shadow-2xl border-r border-slate-700`}
    >
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-700">
        <span className="text-2xl">{expanded ? '📚 Questões' : '📚'}</span>
      </div>

      {/* Menu Items */}
      <nav className="mt-8">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`px-6 py-4 flex items-center gap-4 cursor-pointer transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-r-4 border-blue-400'
                    : 'hover:bg-slate-700/50'
                }`}
              >
                <span className="text-xl min-w-fit">{item.icon}</span>
                <span
                  className={`whitespace-nowrap overflow-hidden transition-opacity ${
                    expanded ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Info Box */}
      {expanded && (
        <div className="absolute bottom-6 left-4 right-4 bg-slate-700/50 rounded-lg p-3 text-xs text-gray-300 border border-slate-600">
          <p className="font-semibold mb-1">💡 Dica:</p>
          <p>Passe o mouse sobre o menu para expandir</p>
        </div>
      )}
    </div>
  )
}
