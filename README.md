# Notas Fiscais               

![Captura de tela de 2023-01-03 17-21-39](https://user-images.githubusercontent.com/23152592/210440394-ca4d8c3f-32dd-45a1-ac50-553bff1990bd.png)

# Contexto
  Este projeto trata-se de uma aplicação web full stack, onde é possivel ver as notas fiscais criadas no banco de dados.
                        
## Técnologias usadas

Front-end:
> Desenvolvido usando: Vue, Vite, CSS3, TypeScript, Vitest

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, Typescript, Mocha, Chai, Sinon, Sequelize

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## Para rodar localmente:

#### Clone a aplicação

```
git clone git@github.com:Vitosoaresp/invoices.git
cd invoices/
```

## Instalando Dependências

> Backend
```bash
cd server/ 
npm install
``` 
> Frontend
```bash
cd web/
npm install
``` 
## Executando aplicação

* Para rodar o back-end:

  > Configure as variaveis de ambiente e rode a sql do banco de dados que esta no arquivo ---> server/database.sql

  ```
    cd server
    cp .env.example .env
    npm run dev
  ```

* Para rodar o front-end:

  ```
    cd web/ && npm run dev
  ```

## Executando Testes

* Para rodar os testes do back-end:

  ```
    cd server/ && npm test
  ```
* Para rodar os testes do front-end:

  ```
    cd web/ && npm test
  ```
