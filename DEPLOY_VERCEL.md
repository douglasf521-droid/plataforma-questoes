# 🚀 VERCEL DEPLOY RÁPIDO

## Pré-requisitos:
- GitHub account
- Vercel account
- Seu código no GitHub

## Passo 1: Preparar GitHub

```bash
# Na sua máquina:
cd C:\Users\Douglas\plataforma-questoes

# Iniciar Git se não tiver
git init
git add .
git commit -m "Projeto pronto para deploy"

# Criar repositório no GitHub
# Depois:
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git branch -M main
git push -u origin main
```

## Passo 2: Deploy na Vercel

1. Acesse: https://vercel.com
2. Clique em "Sign Up" → "GitHub"
3. Autorize Vercel
4. Clique em "New Project"
5. Selecione seu repositório
6. Clique em "Deploy"
7. **PRONTO!** Site ao vivo em ~2 minutos

## Passo 3: Variáveis de Ambiente (IMPORTANTE!)

Em Vercel → Settings → Environment Variables, adicione:

```
GOOGLE_API_KEY=sua_chave_gemini_aqui
SUPABASE_URL=sua_url_supabase
SUPABASE_KEY=sua_chave_supabase
SUPABASE_ANON_KEY=sua_chave_anon
```

## Passo 4: Conectar Domínio (Opcional)

Em Vercel → Settings → Domains:
1. Adicione seu domínio
2. Copie DNS records
3. Configure no provedor
4. Aguarde ativação

## Deploy Automático

A partir daí, toda vez que você faz `git push`, o site atualiza automaticamente! 🎉

---

## Deploy Alternativo: Railway

1. Acesse: https://railway.app
2. Sign up → GitHub
3. New Project → Existing repository
4. Selecione seu repo
5. Configure variáveis
6. Deploy!

Railway fornece URL automática.

---

## Comandos Úteis

```bash
# Verificar build localmente
npm run build

# Se der erro, debugar:
npm run dev

# Push para GitHub (automático redeploy)
git add .
git commit -m "Melhorias"
git push
```

---

## Custos

- **Vercel**: GRÁTIS até 100GB/mês
- **Railway**: 5$ de crédito/mês (geralmente suficiente)
- **Netlify**: GRÁTIS com publicidade opcional
- **Hostinger**: R$45+/mês (com domínio)

---

## Troubleshooting

❌ **"Build failed"**
→ Execute `npm run build` localmente para ver o erro

❌ **"API key não funciona"**
→ Verifique variáveis de ambiente em Settings

❌ **"Banco de dados vazio após deploy"**
→ Normal! Banco local reset. Use Supabase para produção.

---

**Dúvidas? Avise!** 🚀
