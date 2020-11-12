# MLabs - UI

## Executando o projeto

Pré requisitos

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/)

Primeiro é necessário instalar todas as dependências. (Caso já tenha instalado na raiz do projeto não é mas necessário).

```bash
  yarn
```

## Desenvolvimento

Para executar o projeto em desenvolvimento, basta rodar o seguinte comando

```bash
  yarn dev
```

Projeto será iniciado na URL: [http://localhost:6006/](http://localhost:6006/)

## Build componentes

Caso queira utilizar os componentes no frontend ou em outra pacote é necessário buildar o mesmo, para isso basta rodar o seguinte comando.

```bash
  yarn build
```

Assim irá gerar a pasta dist com os componentes. Processo de build está com uma pequena falha, ele não faz a cópia dos assests para a pasta build, então necessário fazer manualmente.

## Build storybook

Caso queira fazer o build para produção basta executar o seguindo comando

```bash
  yarn build:storybook
```

Assim ele irá gerar a pasta build, lá estara o storybook disponível para o deploy

## Deploy

Projeto está hospedado no [firebase hosting](https://mlabs-storybook.web.app/), caso queira fazer o deploy basta executar o seguinte comando. (Necessário ter o [firebase cli](https://firebase.google.com/docs/cli))

```bash
  firebase deploy
```
