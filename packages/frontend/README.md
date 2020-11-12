# MLabs - Frontend

## Executando o projeto

Pré requisitos

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/)

Primeiro é necessário instalar todas as dependências. (Caso já tenha instalado na raiz do projeto não é mas necessário). É necessário fazer o build dos componentes do storybook.

```bash
  yarn
```

## Desenvolvimento

Para executar o projeto em desenvolvimento, necessário fazer um copia do .env.dev gerando um novo .env, preencher todas as informações no arquivo (são conexão com o firebase para poder subir images). Depois executar o JSON server.

```bash
  cp .env.dev .env
  yarn dev
  yarn server
```

Projeto será iniciado na URL [http://localhost:3000/](http://localhost:3000/) e o servidor na URL [http://localhost:3001/](http://localhost:3001/)

## Deploy

Projeto está hospedado no [firebase hosting](https://mlabs-59479.web.app/), caso queira fazer o deploy basta executar o seguinte comando. (Necessário ter o [firebase cli](https://firebase.google.com/docs/cli))

```bash
  firebase deploy
```
