# Projeto Link Alarmes - Cronograma e Status das Atividades

Este arquivo serve como o painel de controle e acompanhamento (Task Tracker) liderado pelo Maestro para a criação do website e Landing Pages da Link Alarmes.

---

## 🎨 Diretrizes Globais de Design e Estilo
*   **Tema:** Dark Mode Sofisticado (Fundo `#0f172a` / `#1e293b`).
*   **Acentos:** Azul Elétrico Neon (`#2563eb` ou `#3b82f6`) e Ciano/Teal (`#06b6d4`).
*   **Fontes:** Geist Sans (padrão) e Geist Mono.
*   **CTA WhatsApp:** `https://wa.me/5577999302140?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.`
*   **Destaque de Autoridade:** Profissionais com **+15 anos de experiência** no segmento de segurança eletrônica e redes corporativas.

---

## 📋 Lista de Tarefas (Task List)

### 💻 Fase 1: Infraestrutura e Estilização Global
- [x] Configuração do Design System no `src/app/globals.css` sob a diretiva `@theme` (TailwindCSS v4) <!-- id: 1.1 -->
- [x] Criação do layout global comum em `src/app/layout.tsx` (Cabeçalho e Rodapé completos e responsivos) <!-- id: 1.2 -->
- [x] Otimizações iniciais de metadados de SEO global <!-- id: 1.3 -->

### 🏠 Fase 2: Páginas Institucionais e Legais
- [x] **Home** (`src/app/page.tsx`) com Hero persuasivo, serviços, autoridade (+15 anos), seção de Avaliações Google interativa e CTA <!-- id: 2.1 -->
- [x] **A Empresa** (`src/app/a-empresa/page.tsx`) com história, missão, visão, valores e aprofundamento na experiência da equipe <!-- id: 2.2 -->
- [x] **Localização** (`src/app/localizacao/page.tsx`) com área de cobertura (Oeste da Bahia - Barreiras, LEM, etc.) e mapa interativo <!-- id: 2.3 -->
- [x] **Atendimento** (`src/app/atendimento/page.tsx`) com formulário de contato integrado e canais rápidos <!-- id: 2.4 -->
- [x] **Termos de Uso** (`src/app/termos/page.tsx`) formatado semanticamente <!-- id: 2.5 -->
- [x] **Política de Privacidade / LGPD** (`src/app/privacidade/page.tsx`) <!-- id: 2.6 -->

### ✍️ Fase 3: Blog e Conteúdo (SEO)
- [x] **Página Principal do Blog** (`src/app/blog/page.tsx`) com listagem de artigos, categorias e barra de busca visual <!-- id: 3.1 -->
- [x] **Artigo Modelo Dinâmico** (`src/app/blog/[slug]/page.tsx`) renderizando o conteúdo de forma impecável e otimizada para SEO <!-- id: 3.2 -->

### 🚀 Fase 4: Landing Pages de Alta Conversão (`src/app/lps/`)
- [x] **LP Residencial** (`src/app/lps/residencial/page.tsx`) - Alarme, sensores, e proteção perimetral para famílias <!-- id: 4.1 -->
- [x] **LP Câmeras** (`src/app/lps/cameras/page.tsx`) - CFTV inteligente, monitoramento por app, gravação em nuvem <!-- id: 4.2 -->
- [x] **LP Controle de Acesso** (`src/app/lps/controle-acesso/page.tsx`) - Biometria, reconhecimento facial, catracas e condomínios <!-- id: 4.3 -->
- [x] **LP Redes & Wi-Fi** (`src/app/lps/redes-wifi/page.tsx`) - Redes corporativas, cabeamento estruturado, Wi-Fi 6 de alta performance <!-- id: 4.4 -->
- [x] **LP Plantão 24h** (`src/app/lps/plantao/page.tsx`) - Suporte emergencial de rede/alarme, manutenção preventiva/corretiva <!-- id: 4.5 -->

### 🔍 Fase 5: Revisão, Otimização de SEO e Testes de Build
- [x] Validação de Tags de SEO (Meta titles, descriptions, OpenGraph) em todas as rotas <!-- id: 5.1 -->
- [x] Teste de Build do Next.js para garantir que não há erros de tipagem TypeScript ou de compilação <!-- id: 5.2 -->

---

## 🗂️ Estrutura de Arquivos Criada/Planejada

```
src/
├── app/
│   ├── a-empresa/
│   │   └── page.tsx
│   ├── atendimento/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── localizacao/
│   │   └── page.tsx
│   ├── lps/
│   │   ├── cameras/
│   │   │   └── page.tsx
│   │   ├── controle-acesso/
│   │   │   └── page.tsx
│   │   ├── plantao/
│   │   │   └── page.tsx
│   │   ├── redes-wifi/
│   │   │   └── page.tsx
│   │   └── residencial/
│   │       └── page.tsx
│   ├── privacidade/
│   │   └── page.tsx
│   ├── termos/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```
