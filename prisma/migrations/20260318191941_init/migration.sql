-- CreateTable
CREATE TABLE "Questao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pergunta" TEXT NOT NULL,
    "opcaoA" TEXT NOT NULL,
    "opcaoB" TEXT NOT NULL,
    "opcaoC" TEXT NOT NULL,
    "opcaoD" TEXT NOT NULL,
    "respostaCorreta" TEXT NOT NULL,
    "explicacao" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "banca" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "fonte" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pontuacao" INTEGER NOT NULL DEFAULT 0,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Resposta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "questaoId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "respostaDada" TEXT NOT NULL,
    "acertou" BOOLEAN NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Resposta_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "Questao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resposta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Questao_materia_idx" ON "Questao"("materia");

-- CreateIndex
CREATE INDEX "Questao_banca_idx" ON "Questao"("banca");

-- CreateIndex
CREATE INDEX "Questao_nivel_idx" ON "Questao"("nivel");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
