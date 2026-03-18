// 🎨 GUIA PRÁTICO: Como Customizar Cores, Fontes e Imagens

// ================== CORES TAILWIND ====================

/* Paleta de cores disponíveis no Tailwind:
   - slate, gray, zinc, neutral, stone
   - red, orange, yellow, amber, lime, green, emerald, teal, cyan, blue, indigo, violet, purple, fuchsia, pink, rose

   Intensidades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
*/

// EXEMPLOS DE USOS:
// ❌ Antes (Cinza monótono)
// <div className="bg-gray-800 text-white">Cinzento</div>

// ✅ Depois (Colorido)
// <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Vibrante</div>

// ================== PALETAS RECOMENDADAS ====================

const paletas = {
  // 🔵 Azul-Roxo (Profissional, Confiável)
  moderno: {
    de: 'from-blue-600',
    para: 'to-purple-600',
    hover: 'hover:from-blue-700 hover:to-purple-700',
    light: 'from-blue-100 to-purple-100',
  },

  // 🟢 Verde-Teal (Saúde, Crescimento)
  natural: {
    de: 'from-green-600',
    para: 'to-emerald-600',
    hover: 'hover:from-green-700 hover:to-emerald-700',
  },

  // 🔥 Laranja-Vermelho (Energia, Ação)
  urgente: {
    de: 'from-orange-600',
    para: 'to-red-600',
    hover: 'hover:from-orange-700 hover:to-red-700',
  },

  // 🌸 Rosa-Roxo (Criativo, Inovador)
  criativo: {
    de: 'from-pink-600',
    para: 'to-purple-600',
    hover: 'hover:from-pink-700 hover:to-purple-700',
  },
};

// EXEMPLO DE USO:
export function CardExemplo() {
  return (
    <div className={`bg-gradient-to-r ${paletas.moderno.de} ${paletas.moderno.para} p-8 rounded-lg text-white`}>
      <h3 className="text-2xl font-bold">Meu Card</h3>
      <p>Com a paleta moderna</p>
    </div>
  );
}

// ================== FONTES ====================

// Tailwind Web-safe fonts:
// font-sans (padrão)
// font-serif (clássico)
// font-mono (código)

// Tamanhos de letra:
const textSizes = {
  micro: 'text-xs',      // 12px
  pequeno: 'text-sm',    // 14px
  normal: 'text-base',   // 16px
  grande: 'text-lg',     // 18px
  maior: 'text-xl',      // 20px
  grande2: 'text-2xl',   // 24px
  grande3: 'text-3xl',   // 30px
  grande4: 'text-4xl',   // 36px
  grande5: 'text-5xl',   // 48px
  grande6: 'text-6xl',   // 60px
};

// Pesos de fonte:
const fontWeights = {
  leve: 'font-light',        // 300
  normal: 'font-normal',     // 400
  meio: 'font-medium',       // 500
  semiBold: 'font-semibold', // 600
  bold: 'font-bold',         // 700
  extraBold: 'font-extrabold', // 800
  black: 'font-black',       // 900
};

// EXEMPLO - Títulos elegantes:
export function TitulosExemplo() {
  return (
    <div className="space-y-4">
      {/* Título principal */}
      <h1 className="text-6xl font-black text-blue-600">Título Principal</h1>
      
      {/* Subtítulo */}
      <h2 className="text-3xl font-bold text-gray-700">Subtítulo</h2>
      
      {/* Parágrafo */}
      <p className="text-lg text-gray-600 leading-relaxed">
        Um parágrafo bem espaçado e legível com leading-relaxed
      </p>
    </div>
  );
}

// ================== IMAGENS ====================

// 1️⃣ Imagem simples
export function ImagemSimples() {
  return (
    <img
      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
      alt="Descrição importante para SEO"
      className="w-full h-64 object-cover rounded-lg shadow-lg"
    />
  );
}

// 2️⃣ Imagem com Next/Image (OTIMIZADA)
import Image from 'next/image';

export function ImagemOtimizada() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
      alt="Estudar com qualidade"
      width={800}
      height={600}
      priority // Carrega primeiro
      className="w-full h-64 object-cover rounded-lg"
    />
  );
}

// 3️⃣ Card com imagem (PADRÃO PROFISSIONAL)
export function CardComImagem() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
      {/* Imagem */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src="/images/card-image.jpg"
          alt="Card com imagem"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Badge sobreposto */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
          Novo
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Título do Card</h3>
        <p className="text-gray-600 mb-6">Descrição breve do conteúdo aqui</p>
        
        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
          Mais Informações
        </button>
      </div>
    </div>
  );
}

// ================== SECTION COM BACKGROUND IMAGEM ====================

export function SecaoComBackground() {
  return (
    <section
      className="py-20 px-6 text-white"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.8)),
          url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
          Título com Fundo
        </h2>
        <p className="text-xl text-blue-100 drop-shadow-md">
          Descrição com efeito de sombra para legibilidade
        </p>
      </div>
    </section>
  );
}

// ================== LAYOUT RESPONSIVO ====================

export function LayoutResponsivo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* No mobile: 1 coluna
          Em tablet (md): 2 colunas
          Em desktop (lg): 3 colunas */}
      
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="bg-blue-100 p-6 rounded-lg">
          Card {item}
        </div>
      ))}
    </div>
  );
}

// ================== ANIMAÇÕES ====================

export function AnimacoesExemplo() {
  return (
    <div className="space-y-6">
      {/* Hover Scale */}
      <div className="bg-blue-500 p-4 rounded cursor-pointer hover:scale-110 transition-transform duration-300">
        Scale no Hover
      </div>

      {/* Hover Translate */}
      <div className="bg-green-500 p-4 rounded cursor-pointer hover:-translate-y-2 transition-transform duration-300">
        Translate no Hover
      </div>

      {/* Hover Opacity */}
      <div className="bg-purple-500 p-4 rounded cursor-pointer hover:opacity-75 transition-opacity duration-300">
        Opacity no Hover
      </div>

      {/* Hover Rotate */}
      <div className="bg-pink-500 p-4 rounded cursor-pointer hover:rotate-12 transition-transform duration-300">
        Rotate no Hover
      </div>
    </div>
  );
}

// ================== DICAS DE DESIGN ====================

/*
✅ BOAS PRÁTICAS:

1. CONTRASTE
   - Nunca use cores muito perto (ex: blue-300 com blue-400)
   - Use diferença de 300-500 entre os níveis

2. ESPAÇAMENTO
   - Não aperta tudo: use gaps e padding
   - Respire o conteúdo

3. TIPOGRAFIA
   - 1-2 fontes no máximo
   - Títulos 24px+
   - Corpo 16px (legível)

4. CORES
   - 1 cor primária
   - 1 cor secundária
   - 1 cor acentuada
   - Cinza para textos

5. IMAGENS
   - Qualidade 72dpi para web
   - Comprimir com TinyPNG
   - Usar Next/Image quando possível

6. RESPONSIVIDADE
   - Mobile first
   - Testar em celular de verdade
   - Usar breakpoints: sm, md, lg, xl

❌ ERROS COMUNS:

- Muitas cores diferentes
- Imagens muito grandes (>500KB)
- Texto pequeno demais
- Sem espaçamento
- Autoplay de vídeos
- Muitos cliques para ação importante
- Fonte extraída da web ruim
*/

// ================== EXEMPLO COMPLETO DE PÁGINA ====================

export default function PaginaExemploCompleta() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header com gradient */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-6 text-center text-white">
        <h1 className="text-6xl font-black mb-4">Página Bonita</h1>
        <p className="text-xl text-blue-100">Feita com Tailwind + imagens</p>
      </header>

      {/* Cards section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Conteúdo</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CardComImagem />
            <CardComImagem />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SecaoComBackground />
    </div>
  );
}
