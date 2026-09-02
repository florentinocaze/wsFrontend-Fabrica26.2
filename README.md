# Heróis do Overwatch

Aplicação web para consulta de personagens do jogo Overwatch, desenvolvida como projeto final do **Workshop Front-end 2026.2**, parte do projeto de extensão **Fábrica de Software**, vinculado ao **Centro Universitário de João Pessoa (UNIPÊ)**.
 
O projeto consome a [OverFast API](https://overfast-api.tekrop.fr/) para exibir imagem, nome e classe (role) de cada herói, com busca por nome, filtro por classe e paginação.

## 📌 Funcionalidades

- Listagem de heróis consumindo a OverFast API (imagem, nome e classe)
- Busca por nome em tempo real
- Filtro por classe (dano, suporte e tanque)
- Paginação da lista de resultados
- Layout responsivo (desktop, tablet e mobile)

## 💻 Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (v4)
- [OverFast API](https://overfast-api.tekrop.fr/) – dados dos heróis de Overwatch

## ⚙️ Como rodar localmente
 
Pré-requisito: [Node.js](https://nodejs.org/) instalado.
 
```bash
# Clone o repositório
git clone https://github.com/florentinocaze/herois-do-overwatch.git
 
# Acesse a pasta do projeto
cd herois-do-overwatch
 
# Instale as dependências
npm install
 
# Rode o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📁 Estrutura do projeto
 
```
src/
├── components/
│   ├── HeroesList.jsx    # Busca os dados, aplica filtros e paginação
│   ├── HeroCard.jsx      # Exibe imagem, nome e classe de um herói
│   ├── SearchBar.jsx     # Campo de busca por nome
│   ├── RolesFilter.jsx   # Checkboxes de filtro por classe
│   ├── Pagination.jsx    # Controles de navegação entre páginas
│   ├── Main.jsx          # Conteúdo inicial do projeto
│   └── Footer.jsx        # Rodapé com informações e contato
├── service/
│   └── HeroesService.js  # Requisição à OverFast API
├── App.jsx
├── main.jsx
└── index.css
```

## 👤 Autor
 
Desenvolvido por [Florentino Cazé](https://github.com/florentinocaze) como parte do projeto de extensão Fábrica de Software (UNIPÊ).
 
- [LinkedIn](https://www.linkedin.com/in/florentinocaze)
- [GitHub](https://github.com/florentinocaze)

## 📄 Licença
 
Projeto com fins educacionais, desenvolvido para o desafio seletivo do Workshop Front-end 2026.2 (Fábrica de Software/UNIPÊ).
