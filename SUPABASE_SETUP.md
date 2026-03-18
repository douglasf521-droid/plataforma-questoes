# Instruções - Tabela Supabase

## Para criar a tabela `questoes` no Supabase, execute o SQL abaixo:

```sql
CREATE TABLE questoes (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  pergunta TEXT NOT NULL,
  opcao_a TEXT NOT NULL,
  opcao_b TEXT NOT NULL,
  opcao_c TEXT NOT NULL,
  opcao_d TEXT NOT NULL,
  resposta_correta TEXT NOT NULL,
  explicacao TEXT,
  materia TEXT NOT NULL,
  banca TEXT NOT NULL,
  nivel TEXT NOT NULL,
  fonte TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Criar índices para melhor performance
CREATE INDEX idx_questoes_materia_banca_nivel 
ON questoes(materia, banca, nivel);

CREATE INDEX idx_questoes_fonte 
ON questoes(fonte);
```

## Como fazer:

1. Acesse https://app.supabase.com
2. Selecione seu projeto
3. Vá para **SQL Editor**
4. Cole o SQL acima
5. Clique em **Run**

Pronto! A tabela está criada e a integração com OpenAI ✅ está funcionando.
