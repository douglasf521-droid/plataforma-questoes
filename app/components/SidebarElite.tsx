'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SidebarElite() {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { icon: '👑', label: 'Dashboard', href: '/', badge: 'Elite' },
    { icon: '⚔️', label: 'Desafios', href: '/questoes', badge: 'Combate' },
    { icon: '📥', label: 'Arsenal', href: '/importar-questoes', badge: 'Upload' },
    { icon: '🤖', label: 'IA', href: '/gerar-com-gemini', badge: 'Poder' },
    { icon: '⚙️', label: 'Controle', href: '/admin', badge: 'Admin' },
    { icon: '📊', label: 'Estatísticas', href: '/exemplos-questoes', badge: 'Stats' },
  ]

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-950 via-yellow-950 to-black text-white transition-all duration-300 z-50 ${
        expanded ? 'w-64' : 'w-20'
      } shadow-2xl border-r border-yellow-700/30`}
    >
      {/* Logo/Branding */}
      <div className="h-24 flex items-center justify-center border-b border-yellow-700/30 bg-gradient-to-b from-black to-yellow-900/20 relative overflow-hidden">
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-pulse"></div>
        <div className="relative text-center">
          <div className="text-3xl font-black text-yellow-400 drop-shadow-lg">👑</div>
          {expanded && (
            <div className="text-xs font-black text-yellow-300 tracking-widest drop-shadow-lg">
              ELITE
            </div>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="mt-8 space-y-2 px-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`px-4 py-3 flex items-center gap-4 cursor-pointer transition-all rounded-lg relative group ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/50'
                    : 'hover:bg-yellow-700/20 text-yellow-100'
                }`}
              >
                <span className="text-2xl min-w-fit">{item.icon}</span>
                {expanded && (
                  <div className="flex-1">
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className="text-xs opacity-75">{item.badge}</div>
                  </div>
                )}
                {isActive && <div className="absolute right-2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Level Box */}
      {expanded && (
        <div className="absolute bottom-6 left-4 right-4 bg-gradient-to-br from-yellow-900/40 to-black rounded-lg p-4 text-center border border-yellow-700/50 shadow-lg">
          <div className="text-2xl font-black text-yellow-400 mb-1">⭐ LVL 1</div>
          <div className="text-xs text-yellow-200 font-semibold mb-2">INICIANTE</div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-full w-1/3 shadow-lg shadow-yellow-500/50"></div>
          </div>
          <div className="text-xs text-yellow-300 mt-2">250 / 1000 XP</div>
        </div>
      )}
    </div>
  )
}
