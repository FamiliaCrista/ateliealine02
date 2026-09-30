# Procedimento de Edição e Personalização - Atelier Aline Schueng

Este documento detalha os procedimentos técnicos e orientações para realizar futuras manutenções, edições, adições de novos modelos e personalizações no site do **Atelier Aline Schueng**.

---

## 1. Visão Geral da Arquitetura do Projeto

O projeto foi construído utilizando as seguintes tecnologias modernas:
- **Framework**: React 19 com TypeScript
- **Bundler**: Vite
- **Estilização**: Tailwind CSS v4 (com variáveis de fontes e cores customizadas em `src/index.css`)
- **Animações**: Motion (Framer Motion)
- **Ícones**: Lucide React
- **Dados Estáticos**: `src/data/atelierData.ts` (contém catálogo de roupas, depoimentos e número do WhatsApp)

---

## 2. Estrutura de Pastas e Arquivos Principais

```text
/
├── index.html                  # Arquivo HTML principal (Metatags, Título e Fontes Google)
├── package.json                # Dependências do projeto
├── metadata.json               # Metadados do app
├── src/
│   ├── App.tsx                 # Componente principal que unifica todas as seções
│   ├── main.tsx                # Ponto de entrada do React
│   ├── index.css               # Estilos globais e tema Tailwind v4 (@theme)
│   ├── data/
│   │   └── atelierData.ts      # Dados do catálogo, depoimentos, passos e número de WhatsApp
│   └── components/
│       ├── Navbar.tsx          # Cabeçalho responsivo e menu mobile
│       ├── Hero.tsx            # Seção de boas-vindas / Banner principal
│       ├── ModelsCatalog.tsx   # Carrossel interativo e grade de modelos com filtros
│       ├── ModelModal.tsx      # Modal detalhado de cada peça do catálogo
│       ├── About.tsx           # Seção "Sobre o Ateliê" (História da Aline)
│       ├── HowItWorks.tsx      # Passo a passo visual de encomenda (5 etapas)
│       ├── Testimonials.tsx    # Carrossel de depoimentos de clientes
│       ├── OrderCalculator.tsx # Gerador interativo de orçamento via WhatsApp
│       ├── Footer.tsx          # Rodapé com informações de contato e links
│       └── FloatingWhatsApp.tsx# Botão flutuante fixo do WhatsApp
```

---

## 3. Procedimentos Comuns de Manutenção

### 3.1. Alterar o Número do WhatsApp
Para atualizar o número de WhatsApp para onde as encomendas e dúvidas são direcionadas:
1. Abra o arquivo `src/data/atelierData.ts`.
2. Localize a constante `WHATSAPP_NUMBER`:
   ```typescript
   export const WHATSAPP_NUMBER = "5521988887777"; // Substitua pelo número real com DDI e DDD
   ```
3. Salve o arquivo. Todos os links do site ("Falar no WhatsApp", "Quero uma personalizada igual", gerador de orçamento) atualizarão automaticamente.

### 3.2. Adicionar ou Editar Modelos no Catálogo
Para adicionar um novo vestido ou conjunto ao portfólio:
1. Abra o arquivo `src/data/atelierData.ts`.
2. Localize o array `CLOTHING_MODELS`.
3. Adicione um novo objeto seguindo o formato:
   ```typescript
   {
     id: '9',
     title: 'Nome do Novo Modelo',
     category: 'vestidos', // Opções: 'vestidos', 'batizado', 'conjuntos', 'recemnascido', 'daminhas'
     age: '2 a 5 anos',
     image: 'URL_DA_IMAGEM_UNSPLASH_OU_FOTO_REAL',
     description: 'Descrição detalhada da peça...',
     details: ['Detalhe 1', 'Detalhe 2', 'Detalhe 3'],
     fabrics: ['Algodão Sateen', 'Tule Macio'],
     tag: 'Novo'
   }
   ```
4. Salve o arquivo. O carrossel, as categorias e a grade de modelos se atualizarão sozinhos.

### 3.3. Alterar Cores e Tipografia
- **Cores e Fontes**: Editadas no arquivo `src/index.css` dentro da diretiva `@theme`:
  ```css
  @theme {
    --font-serif: "Playfair Display", serif;
    --font-sans: "Plus Jakarta Sans", sans-serif;
    --color-atelier-rose: #fce7ec;
    /* Adicione ou ajuste cores conforme necessário */
  }
  ```

---

## 4. Comandos Úteis para Desenvolvimento

- **Instalar novas dependências**:
  ```bash
  npm install <nome-do-pacote>
  ```
- **Compilar e verificar erros**:
  ```bash
  npm run build
  ```
- **Verificar erros de TypeScript**:
  ```bash
  npx tsc --noEmit
  ```
