# Tutorial para rodar o projeto

## Pré-requisitos

### frontend
* Node.js e NPM instalados.
* Angular CLI instalado.

### API json-server 
* Node.js e NPM instalados.

### API Express
* Node.js e NPM instalados.
* MongoDB instalado e rodando

### API em Laravel
* Composer.
* PHP instalado e configurado.
* POSTGRESQL instalado e configurado. (obs: instale o pgAdmin para conseguir gerenciar o banco na interface gráfica)

## Passo 1 - Rodando o projeto frontend -> Angular

* dentro da pasta frontend, rode o comando: "npm install" (para instalar as dependências do projeto)
* comando "npm start" inicializa o frontend.
* para mudar a api, abra o arquivo src/environments/environment.development.ts e descomente a linha da url da api que deseja utilizar...
```javascript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/', //express
  // apiUrl: 'http://localhost:3001/', //json-server
  // apiUrl: 'http://localhost:8000/api/', //laravel;
  apiKey: '54321'
};
```
* projeto rodando em http://localhost:4200 🔥

## Passo 2 - Rodando a API json-server (API Fake)
* entre na pasta do projeto: $ cd api-json-server
* rode o comando: $ npm start
* API rodando em http://localhost:3001 🔥

## Passo 3 - Rodando a API Express
* entre na pasta do projeto express: $ cd api-express
* rode o comando: npm install (para instalar as dependências do projeto)
* faça uma cópia do arquivo .env.example com nome de .env e adicione as seguintes configurações
```
DB_USER=cavalcante
DB_PASS=cjx3WFXg8d4orZKh
SECRET=abdia8s7d6g3dny3v278hdn6tcb326nexydh2n378
```
* rode o comando: $ npm start
* API rodando em http://localhost:3000 🔥

## Passo 4 - Rodando a API em Laravel
* Para o Postgres -> No PGADMIN, crie um banco de dados chamado 'sisg'.
* No Projeto Laravel:
* Entre na pasta do projeto: $ cd api-express
* rode o comando: $ composer install (para instalar as dependências do projeto)
* crie uma cópia do arquivo .env.example com o nome de .env, substituia as configurações do seu bd...(driver, database, username, password)
* rode o comando: $ php artisan key:generate para gerar a chave de seguranç da aplicação. (Será gerada no final do arquivo .env)
* rode o comando: $ php artisan migrate (para criar a estrutura do banco de dados)
* rode o comando: $ php artisan serve (inicializa a API)
* API rodando em http://localhost:8000/api 🔥

## Observações

* Se o banco de dados não estiver criado, após o comando "php artisan migrate", o laravel não criará as tabelas necessárias para operação correta da API.
