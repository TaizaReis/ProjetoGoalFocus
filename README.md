# GoalFocus - Planejamento e Acompanhamento de Metas Pessoais

## Descrição do Projeto

O **GoalFocus** é uma aplicação voltada para o planejamento e acompanhamento de metas pessoais, utilizando a metodologia SMART e dividindo as metas em tarefas diárias, com acompanhamento semanal. O objetivo é facilitar a organização de metas pessoais, promovendo o foco e a motivação para atingi-las.

---

## Objetivos

### Objetivo Geral
Facilitar a organização e o acompanhamento de metas pessoais por meio de uma plataforma que utiliza a metodologia SMART.

### Objetivos Específicos
- Permitir a criação de metas baseadas na metodologia SMART.
- Dividir as metas em tarefas diárias com acompanhamento semanal.
- Enviar lembretes para as tarefas e metas.
- Exibir um painel de progresso que mostre o avanço semanal.

---

## Tecnologias Utilizadas

- **JavaScript**: Para o desenvolvimento do front-end (React.js) e back-end (Node.js).
- **Node.js** (Express.js): Framework back-end para gerenciar rotas, autenticação e lógica de negócios.
- **PostgreSQL**: Banco de dados relacional para armazenar dados de usuários, metas e progresso.
- **Docker**: Para criar contêineres que isolam o ambiente de desenvolvimento e facilitam a implantação em produção.
- **Vercel**: Hospedagem do front-end, proporcionando deploy contínuo e rápido.
- **Render**: Hospedagem do back-end e banco de dados.
- **Figma**: Design da interface de usuário e prototipagem.
- **Visual Studio Code (VSCode)**: Ambiente de desenvolvimento com extensões e ferramentas que facilitam o processo de codificação.

---

## Funcionalidades do MVP

- **Criação de Metas SMART**: Interface para definir metas baseadas em critérios SMART.
- **Divisão de Metas em Tarefas Diárias**: Permite que os usuários dividam suas metas em tarefas diárias e acompanhem o progresso semanal.
- **Painel de Progresso**: Visualização do progresso das metas e tarefas.
- **Interface Simples e Intuitiva**: Foco na usabilidade e navegação fácil.

---

## Configuração do Projeto

### Requisitos
- **Node.js** (versão 16.x ou superior)
- **Docker** (para rodar contêineres)
- **PostgreSQL** (banco de dados, configurado via Docker)

### Passos para Configuração

1. **Clone o repositório**  
   Clone este repositório para o seu ambiente local utilizando o comando:
   ```bash
   git clone https://github.com/TaizaReis/ProjetoGoalFocus.git
   cd ProjetoGoalFocus

2. **Instalar dependências do Docker**
    Certifique-se de que você tenha o Docker instalado. Crie um arquivo docker-compose.yml com a configuração do PostgreSQL:

    Exemplo de configuração para o Docker:
     ```yaml

    version: '3'
    services:
      db:
        image: postgres:latest
        environment:
          POSTGRES_USER: user
          POSTGRES_PASSWORD: password
          POSTGRES_DB: goalfocus
        ports:
          - "5432:5432"


3. **Iniciar o Docker Compose**
    Para subir o contêiner do PostgreSQL:
    ```bash
    docker ps

4. **Gerar o banco de dados e rodar migrações**
    Execute o Drizzle Kit para gerar o esquema de banco de dados e migrações:
     ```bash
     npx drizzle-kit generate
     npx drizzle-kit migrate



5. **Rodar o seed**
    Crie um arquivo seed.ts para popular o banco com dados iniciais. Em seguida, execute o comando para rodar o seed:
      ```bash
      npm run seed


6. **Iniciar o ambiente de desenvolvimento**
    Finalmente, inicie o servidor de desenvolvimento para rodar o projeto localmente:
     ```bash
     npm run dev



Agora, o GoalFocus deve estar rodando localmente no seu ambiente! 🌟

Se tiver algum problema durante a configuração ou execução, consulte os logs do Docker com:
  ```bash
  docker logs <id_do_container>


     



   



