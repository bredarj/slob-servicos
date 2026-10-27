# SLOB_SERVIÇOS — Histórico da Sessão e Deploy

**Data:** 27 de Outubro de 2026  
**Status:** ✅ Produção Ativa e Atualizada

---

## 1. Permissões de Execução
- Configurado modo `always-proceed` para comandos e ferramentas no IDE.

## 2. Deploy na Vercel
- **Causa da falha anterior:** Versão descontinuada do `Node 20.x` no `package.json`.
- **Ajuste:** Atualizado `engines.node` para `"24.x"`.
- **Link Oficial em Produção:** https://slob-servicos.vercel.app

## 3. Atalho Windows
- Criado atalho na Área de Trabalho com suporte a modo App: `SLOB_SERVIÇOS.lnk`.

## 4. Nova Funcionalidade
- Implementada caixa de diálogo com a pergunta *"Deseja realmente duplicar este orçamento?"* antes de clonar qualquer orçamento na lista e na página de detalhes.

## 5. Próximos Deploys
- A Vercel CLI está autenticada localmente. Qualquer nova modificação será publicada diretamente com `npx vercel --prod --yes`.
