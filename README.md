# FastFeet-RS

<h1 align="center">
  <img alt="FastFeet" height="215" title="FastFeet" src=".github/logo.svg" />
</h1>

<p align="center">Este codigo representa a minha solução do desafio do Bootcamp GoStack 10.0</p>

<p align="center">
 <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#computer-instalação-execução-e-desenvolvimento">Instalação, execução e desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-como-contribuir">Como contribuir</a>
</p>

<strong>Links dos desafios:</strong>

- [Etapa 1](https://github.com/EliasGcf/fastfeet/blob/master/server/ETAPA_01.md)
- [Etapa 2](https://github.com/EliasGcf/fastfeet/blob/master/server/ETAPA_02.md)
- [Etapa 3](https://github.com/EliasGcf/fastfeet/blob/master/web/ETAPA_03.md)
- [Etapa 4](https://github.com/EliasGcf/fastfeet/blob/master/mobile/ETAPA_04.md)

### Backend

:wrench: Técnologias usadas:
----------------------
Esta é a api restfull desenvolvida para o projeto: 

- [**Insomnia**](https://insomnia.rest/)
- [**NodeJS**](https://nodejs.org/en/)
- [**ExpressJS**](https://expressjs.com/)
- [**Nodemon**](https://nodemon.io/)
- [**Docker**](https://www.docker.com/)
- [**PostgreSQL**](https://www.postgresql.org/)
- [**Redis**](https://redis.io/)
- [**Sequelize**](https://sequelize.org/)
- [**Yup**](https://github.com/jquense/yup)
- [**jwt**](https://www.npmjs.com/package/jsonwebtoken/)
- [**bcryptJS**](https://www.npmjs.com/package/bcryptjs)
- [**multer**](https://github.com/expressjs/multer)
- [**date-fns**](https://date-fns.org/docs/Getting-Started)

## :computer: Instalação, execução e desenvolvimento

Faça um clone desse repositório. [Aqui](https://github.com/toguvr/FastFeet-RS.git)

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)



# Created Postgree Docker container
$ docker run --name database -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=fastfeet -p 5432:5432 -d postgres

# Created Mongo Docker container
$ docker run --name mongo -p 27017:27017 -d -t mongo

# Created Redis Docker container
$ docker run --name redisDesafioFastFeet -p 6379:6379 -d -t redis:alpine

- A partir da raiz do projeto, entre na pasta rodando `cd back`;
- Rode `yarn` para instalar sua dependências;
- Coloque os seus dados no .env referente a cada campo
- Rode `yarn sequelize db:migrate` para executar as migrations;
- Para executar a seed de criação de um admin rode o comando `yarn sequelize db:seed:all`
- Rode `yarn dev` para rodar o servidor
- Rode `yarn queue` para o rodar o Queue

[Doc da api] (https://web.postman.co/collections/8474054-eed7d4a0-1c3f-449b-90ef-e934703982ee?version=latest&workspace=c625e0cf-6c6c-42c7-898c-47c8aecf0fdd)

### Frontend
:wrench: Tecnologias Usadas:
----------------------
A aplicação web representa a versão do administrador da transportadora, ele poderá cadastrar atualizar e excluir, remetentes, entregadores e encomendas, e também ver problemas com as entregas e cancela-las:

- [**ReactJS**](https://reactjs.org/)
- [**Redux**](https://redux.js.org/)
- [**Redux Saga**](https://redux-saga.js.org/)
- [**Styled Components**](https://styled-components.com/)
- [**React Select**](https://react-select.com/async)
- [**React Icons**](https://react-icons.netlify.com/#/)
- [**React Toastify**](https://github.com/fkhadra/react-toastify)
- [**Axios**](https://github.com/axios/axios)
- [**Unform**](https://unform.dev/)
- [**date-fns**](https://date-fns.org/docs/Getting-Started)
- [**Eslint**](https://eslint.org/)
- [**Prettier**](https://prettier.io/)
- [**EditorConfig**](https://editorconfig.org/)

## :information_source: Como rodar o projeto:
Parar clonar este projeto, precisará de Git, NodeJS e Yarn.

Agora siga os comandos:

```bash
# Clone this repository
$ git clone https://github.com/toguvr/FastFeet-RS.git

# Go into the repository
$ cd front

# Install dependencies
$ yarn

# Run the app
$ yarn start
```
## Login Credentials
<p>Email: admin@fastfeet.com</p>
<p>Password: 123456</p>


### Mobile
:wrench: Técnologias Usadas:
----------------------
A aplicação mobile representa o entregador, podendo se entrar pelo seu código de registro (id), tendo acesso as suas encomendas entregues e pendentes, podendo reportar problemas, visualiza-los e também concretizar a entrega tirando uma foto da assinatura do destinatário: 

- [**React Native**](https://reactnative.dev/)
- [**Redux**](https://redux.js.org/)
- [**Redux Saga**](https://redux-saga.js.org/)
- [**React Native Camera**](https://react-native-community.github.io/react-native-camera/)
- [**React Native Camera Hooks**](https://github.com/reime005/react-native-camera-hooks)
- [**Styled Components**](https://styled-components.com/)
- [**React Native Vector Icons**](https://oblador.github.io/react-native-vector-icons/)
- [**Axios**](https://github.com/axios/axios)
- [**date-fns**](https://date-fns.org/docs/Getting-Started)
- [**Eslint**](https://eslint.org/)
- [**Prettier**](https://prettier.io/)
- [**EditorConfig**](https://editorconfig.org/)


## :information_source: HComo usar o projeto:
Para clonar e rodar você precisará de Git, NodeJS, Yarn e React Native. 

You just need to run the following commands:

```bash

# Go into the repository
$ cd mobile

# Install dependencies
$ yarn

# Run the app
$ react-native run-ios
```


Make sure you have the [**REST API**](https://github.com/riltonfranzonee/fastfeet-api) up and running.
## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`;

---

Feito com ♥ by [Augusto](https://www.linkedin.com/in/augusto-telles-471102136/)
