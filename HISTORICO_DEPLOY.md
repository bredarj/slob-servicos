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

## 4. Novas Funcionalidades Recentes
- **Relatório Completo de Serviços e Pagamentos Parciais (18/11/2026):**
  - **Filtros Avançados:** Filtro por cliente específico ou todos os clientes; status do serviço (ativos, concluídos ou todos); situação financeira (com saldo pendente / pagamentos parciais, quitados ou todos); e opção de buscar todo o histórico sem limite de datas.
  - **Visualização com Linhas Expansíveis:** Cada serviço na tabela exibe Valor Total, Já Pago e Saldo Devedor. Ao clicar ou expandir a linha, é exibido o histórico detalhado de cada pagamento recebido com Data (`dd/MM/yyyy`), Forma de Pagamento (PIX, Dinheiro, Cartão, Outro com ícones), Valor e Observações.
  - **Exportação em PDF Completa:** Gera documento formatado profissionalmente contendo cabeçalho da empresa (SLOB Serviços, CNPJ, contatos), resumo financeiro consolidado, tabela geral de serviços e uma seção detalhada com as subtabelas de pagamentos parciais de cada serviço.
  - **Compartilhamento no WhatsApp:** Cria mensagem formatada para WhatsApp contendo resumo financeiro e listagem completa dos serviços com histórico de pagamentos e saldo devedor. Se um cliente com telefone estiver selecionado, permite envio direto com 1 clique para o número dele.
- Implementada caixa de diálogo com a pergunta *"Deseja realmente duplicar este orçamento?"* antes de clonar qualquer orçamento na lista e na página de detalhes.
- **Orçamentos Recentes Clicáveis:** No painel principal (dashboard), os itens de "Orçamentos Recentes" agora são interativos/clicáveis e abrem diretamente a visualização do orçamento (`/orcamentos/[id]`). Também foi adicionado botão *"Ver todos"* no cabeçalho do card.
- **Orçamentos Clicáveis em Relatórios:** Na aba Relatórios do dashboard, cada linha da tabela agora é clicável e navega diretamente para os detalhes do orçamento (`/orcamentos/[id]`), além de contar com uma nova coluna de ação contendo o botão *"Ver"*.

## 5. Deploys Realizados
- **Último Deploy em Produção:** `dpl_GfN7ThzYVAj22EgYnQP3MGgXvwo1` (27/10/2026 - Relatórios Clicáveis)
- **Deploy Anterior:** `dpl_37TMjdnTvhMYMhXAz31CcpgrJuWK` (27/10/2026 - Orçamentos Recentes Clicáveis)
- **Status:** ✅ Sucesso
- **URL Produção:** [https://slob-servicos.vercel.app](https://slob-servicos.vercel.app)


