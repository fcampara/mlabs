# MLabs

## Tecnologias Utilizadas

- [React](https://pt-br.reactjs.org/)
- [Styled Components](https://www.styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Lerna](https://github.com/lerna/lerna)

Uma das dificuldades encontradas foi conseguir entregar todas as atividades com testes unitários, resolvi pagar esse débito técnico para conseguir fazer uma entrega de conteúdo. Algo que achei de grande valor  foi seperar os componentes de estilos em outro projeto, assim permitindo uma reutilização muito maior, e com a ajuda do yarn workspaces agregou uma grande facilidade de compartilhamento desses componentes entre as aplicações.

## Executando o projeto

Pré requisitos

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/)

Projeto está utilizando o modelo de yarn workspace com lerna, então é necessário utilizar o yarn. Primeiro é necessário instalar todas as dependências.

```bash
  yarn
```

## Estrutura

Projeto está divido em 3 pacotes sendo eles:

- Config: Está definido as configuração para os projetos (ui e frontend).
- Ui: Está todos os componentes utilizados para o projeto
- Frontend: Está nossa página principal do site

## TODO

[ ] - Testes unitário UI
[ ] - Testes unitário frontend
[ ] - Testes de integração frontend
[ ] - Criação de tokens de estilos para o frontend
[ ] - Enriquecer a documentação dos componentes
[X] - Selecionar uma rede social por vez para realizar o agendamento
[X] - O preview do post não deverá conter scroll horizontal
[X] - A tabela de agendametos deve exibir somente informações do post que acabou de agendar
[X] - Queremos saber como você lida com consumo de conteúdo via request. Para isso, use nossos exemplos de JSON na seção API logo mais abaixo para consumi-lá e exibir informações previamente na interface
[X] - Não precisa ser uma API sendo consumida por uma URL externa, indicamos que faça isso consumindo diretamente do JSON no projeto, porém, esperamos que toda a implementação de consumo desses dados sejam feitos da mesma forma que faria se estivesse consumindo externamente
[X] - Use AJAX, axios, fetch o que achar melhor
[X] - Não esperamos persistência desses dados em um Banco de Dados, porém, esperamos alguma persistência a nível de usuário
[X] - As redes sociais disponíveis e seu status deverão ser consumidos de um JSON (modelo logo abaixo na seção API)
[X] - Selecionar mais de uma rede social para realizar um agendamento
[X] - Se houver mais de uma rede social selecionada, o preview do post deverá permitir um scroll horizontal para visualizar as demais simulações de posts
[X] - O campo de data deverá abrir um componente de calendário funcional (pode criar um do zero ou usar qualquer um disponível)
[X] - No campo "texto do post" deverá ser possível adicionar emojis através de um widget na própria tela (pode criar do zero ou usar qualquer um disponnível)
[X] - Na coluna "Ações", ao clicar em "Preview" deverá abrir uma simulação de como ficou aquele post pra cada rede social que ele foi marcado
[X] - A tabela de agendametos deve exibir informações de posts passados que deverão ser consumidas de um JSON (modelo logo abaixo na seção API)
[X] - O post atual agendado deverá ser exibido na mesma tabela e espera-se que ele seja persistido de alguma forma para o usuário ver na tela
[X] - Essa tabela deve ser responsiva
[X] - Deverá ser possível ordenar a tabela por data e status
[X] - A informação sobre o campo status deverá ser consumido de um JSON (modelo abaixo na seção API) para um cruzamento de informação do statu no post com sua respectiva descrição
[X] - Quando o usuário clicar em "Cancelar", verificar se algum dado foi preenchido no form de agendamento e caso tenha sido, informar ao usuário que ele perderá essas informações se desejar prossseguir
[X] - Ao clicar no botão "Salvar rascunho", sua aplicação deverá persistir os dados desse post de alguma forma em que seja possível fecharmos a aba, ir novamente a tela inicial da sua aplicação, clicar em "Agendar post" e as informações salvas em Rascunho daquele último post deverão aparecer ali
[ ] - Implemente um componente que filtre a tabela por status, possibilitando o usuário exibir, por exemplo, somente os posts com status "Não aprovado". O design desse componente fica livre para sua escolha.
