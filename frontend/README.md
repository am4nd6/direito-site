# Site para Escritório de Advocacia

Um portal moderno, responsivo e de alta performance desenvolvido para um escritório de direito. O site tem como objetivo apresentar os serviços jurídicos, a equipe de advogados, os diferenciais do escritório e facilitar o contato com clientes através de uma interface elegante e profissional.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as melhores e mais modernas ferramentas do ecossistema front-end:

*   **[React 18](https://react.dev/)**: Biblioteca JavaScript para construção da interface.
*   **[Vite](https://vitejs.dev/)**: Bundler extremamente rápido para desenvolvimento.
*   **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e escalabilidade do código.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização ágil e responsiva.
*   **[shadcn/ui](https://ui.shadcn.com/)** & **[Radix UI](https://www.radix-ui.com/)**: Componentes de interface acessíveis e altamente customizáveis.
*   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones modernos e leves.
*   **[React Router DOM](https://reactrouter.com/)**: Navegação entre as páginas do site.
*   **[Vitest](https://vitest.dev/)** & **[Playwright](https://playwright.dev/)**: Ferramentas de testes unitários e end-to-end (E2E) garantindo a confiabilidade da aplicação.

## 📂 Estrutura do Projeto

*   `src/components/`: Contém todos os componentes visuais reutilizáveis do site (Hero, Footer, NavBar, Seção de Áreas, etc).
*   `src/components/ui/`: Componentes base de interface (gerados via shadcn/ui).
*   `src/assets/`: Imagens estáticas e recursos visuais.
*   `public/`: Arquivos estáticos servidos diretamente.

## 🛠️ Pré-requisitos

Para rodar este projeto na sua máquina, você vai precisar do **Node.js** (versão 18 ou superior) e de um gerenciador de pacotes como o **npm**, **yarn**, **pnpm** ou **bun**.

## 💻 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/direito-site.git
   cd direito-site
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou yarn install / pnpm install / bun install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou yarn dev / pnpm dev / bun dev
   ```

4. O projeto estará rodando localmente, geralmente em `http://localhost:8080` (ou a porta informada no terminal).

## 📜 Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes comandos:

*   `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
*   `npm run build`: Compila o projeto e gera os arquivos otimizados para produção na pasta `dist`.
*   `npm run preview`: Inicia um servidor local para visualizar a build de produção gerada.
*   `npm run lint`: Executa o ESLint para encontrar problemas no código.
*   `npm run test`: Executa a suíte de testes com o Vitest.

## 📱 Responsividade e Design

O design foi cuidadosamente pensado para transmitir seriedade e confiança (características essenciais na área jurídica), utilizando tons sofisticados (como o dourado) e tipografia elegante. A interface é totalmente adaptável (mobile-first), garantindo uma excelente experiência de navegação em celulares, tablets e computadores.
