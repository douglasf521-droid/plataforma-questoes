# 🚀 GUIA: Melhorar Layout + Hospedar o Site

## 1️⃣ ADICIONAR IMAGENS

### Método 1: Imagens Online (Recomendado para começar)
```tsx
import Image from 'next/image'

<Image 
  src="https://images.unsplash.com/..."
  alt="Descrição"
  width={400}
  height={300}
  priority
/>
```

### Método 2: Imagens Locais (Mais profissional)

**Passo 1:** Coloque suas imagens em `public/images/`
```
plataforma-questoes/
  public/
    images/
      banner.jpg
      logo.png
      card-1.jpg
```

**Passo 2:** Use no código
```tsx
import Image from 'next/image'

<Image 
  src="/images/banner.jpg"
  alt="Meu banner"
  width={1200}
  height={300}
/>
```

---

## 2️⃣ EDITAR PÁGINAS

### Exemplos de edições comuns:

#### Mudar cores
```tsx
// Antes:
className="bg-slate-800"

// Depois:
className="bg-orange-600"
```

#### Adicionar imagem a card
```tsx
<div className="bg-white rounded-lg overflow-hidden">
  <img src="/images/card.jpg" alt="Card" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3>Título</h3>
    <p>Descrição</p>
  </div>
</div>
```

#### Mudar tipografia
```tsx
// Tamanhos:
text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl

// Peso:
font-light, font-normal, font-semibold, font-bold
```

---

## 3️⃣ HOSPEDAGENS RECOMENDADAS

### ✅ GRATUITAS

#### 🟦 **Vercel** (MELHOR para Next.js)
- Deploy automático do GitHub
- Domínio grátis `.vercel.app`
- Até 3 membros grátis
- https://vercel.com

**Como fazer:**
1. Push seu código para GitHub
2. Acesse vercel.com → Sign up
3. Clique em "New Project"
4. Conecte seu repositório
5. Pronto! Faz deploy automático

#### 🟩 **Netlify**
- Também suporta Next.js
- Deploy por GitHub
- Domínio grátis `.netlify.app`
- https://netlify.com

#### 🟦 **Railway**
- Excelente para projetos Node.js
- 5$ de crédito grátis/mês
- https://railway.app

---

### 💰 PAGAS (Baratas)

#### **Hostinger**
- R$ 45-60/mês
- Suporta Node.js
- Domínio próprio incluído

#### **Heroku** (Descontinuado - evite)

#### **DigitalOcean**
- $5-6/mês (Droplet básico)
- Controle total (Linux)
- Mais técnico

---

## 4️⃣ DEPLOY PASSO A PASSO (VERCEL)

### Preparo local:
```bash
# 1. Verificar se roda sem erros
npm run build

# 2. Se der erro, verificar console
npm run dev
```

### No GitHub:
```bash
# 1. Criar repositório
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

### Em Vercel:
```
1. Acesse vercel.com
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Deixar settings padrão
5. Clique em "Deploy"
6. Aguarde (2-3 min)
7. Pronto! Site ao vivo 🎉
```

---

## 5️⃣ COMPRAR DOMÍNIO PRÓPRIO

### Provedores:
- **Namecheap** - Barato, suporta bem
- **Google Domains** - Integrado com Google
- **Hostinger** - Incluso no plano anual
- **UOL** - Brasileiro, atendimento em PT

### Conectar domínio à Vercel:
1. Em Vercel → Project Settings → Domains
2. Adicione seu domínio
3. Copie os DNS records
4. Vá ao provedor (ex: Namecheap)
5. Paste os DNS
6. Aguarde 24-48h para ativar

---

## 6️⃣ EXEMPLO: Melhorias Rápidas de Layout

### Adicionar logo
```tsx
<div className="flex items-center gap-2 mb-8">
  <img src="/logo.png" alt="Logo" className="h-12" />
  <h1 className="text-4xl font-bold">Meu Site</h1>
</div>
```

### Card com imagem (antes/depois)
```tsx
// ANTES: Sem imagem
<div className="bg-white p-8">
  <h3>Título</h3>
  <p>Descrição</p>
</div>

// DEPOIS: Com imagem
<div className="bg-white rounded-xl overflow-hidden shadow-lg">
  <img src="/image.jpg" alt="Card" className="w-full h-40 object-cover" />
  <div className="p-8">
    <h3 className="text-xl font-bold">Título</h3>
    <p className="text-gray-600">Descrição</p>
  </div>
</div>
```

### Seção com background
```tsx
<section 
  className="py-20 px-6"
  style={{
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <h2 className="text-4xl font-bold text-white text-center">Título</h2>
</section>
```

---

## 7️⃣ CHECKLIST PRÉ-DEPLOY

- [ ] Testar localmente (`npm run dev`)
- [ ] Build sem erros (`npm run build`)
- [ ] Remover console.log()
- [ ] Verificar links internos
- [ ] Testar no celular
- [ ] Adicionar favicon (`public/favicon.ico`)
- [ ] Revisar titles e descriptions
- [ ] Variables de ambiente configuradas (.env.local)

---

## 8️⃣ PRÓXIMOS PASSOS

1. **Personalização:** Adicione seu logo, cores, imagens
2. **SEO:** Melhore metas de descrição
3. **Banco de dados:** Migre para Supabase ou MongoDB
4. **Autenticação:** Adicione login de usuários
5. **Analytics:** Instale Google Analytics

---

## 💡 DICAS FINAIS

- Use `Next/Image` para imagens otimizadas
- Comprima imagens antes de upload (https://tinypng.com)
- Use Tailwind para responsividade
- Teste em mobile
- Mantenha código limpo

---

**Precisa de ajuda com alguma dessas etapas? Avise! 🚀**
