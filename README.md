![Integrando seu projeto React com APIs](thumbnail.png)

# Organo

O Organo é aplicação desenvolvida no curso <a href="https://cursos.alura.com.br/course/react-desenvolvendo-javascript" target="_blank">React: desenvolvendo com JavaScript</a>. 
Foi pensado e idealizado para ser o primeiro projeto em contato com o React.

<img src="screencapture.png" alt="Imagem do Organo" width="50%">


## 🔨 Funcionalidades do projeto

Você pode passear <a href="https://cursos.alura.com.br/course/react-desenvolvendo-javascript" target="_blank">no figma</a> para entender a arte conceitual do projeto.

## ✔️ Técnicas e tecnologias utilizadas

Se liga nessa lista de tudo que usaremos nessa formação:

- `React`
- `React Hooks`
- `TypeScript`

E muito mais!

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, execute `npm i` para instalar as dependências e `npm start` para inicar o projeto.

Depois, acesse <a href="http://localhost:3000/">http://localhost:3000/</a> no seu navegador.


### Passando o projeto para se usar com o Typescript

Após fazer o fork do projeto, devemos baixar as dependências do mesmo, para isso rodamos o comando `npm install`

Logo após, vamos de fato fazer as implementações do TS, começando com a instalação de sua lib, `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

- `@types/node` Usado para ter os tipos de variaveis do node
- `@types/react` Ter os tipos de variaveis do react
- `@types/react-dom` Ter os tipos de variaveis do react dom
- `@types/jest` Lib que vai nos auxiliar na criação de testes

Eu poderia estar fazendo apenas a implementação do Ts com o `npm install --save typescript`, e conforme a necessidade de algumas libs eu só fosse chamando ao decorrer do projeto, mas como estou seguindo um curso e ele já demanda elas logo de início, então já fazemos a instalação logo de início. 

maravilha, agora que temos o Ts instalado, devemos configura-lo para ele fluir da melhor maneira, algo muito próximo do conceito do arquivo Package.json(node), porem para o TS, para fazermos isso devemos rodar o comando `npx  tsc --init` ou `npm tsc --init`, dessa forma ele vai criar o tsconfig.json, já com todas as configs iniciais e algumas outras mais complexas para caso queiramos usar no futuro devido a alguma necessídade.


### alterando uma estrutura já existente para o .tsx

Bom...Agora temos um arquivo em react com seus componentes funcionando normalmente, a questão que temos é, como passar para ts sem alterar em nada por hora. Bora lá

[] - Alterar a extensão do arquivo para .tsx (extensão pode ser liga como typescript + react)
[] - Alterar no tsconfig.json, no setor "language and environment" a propriedade "jsx": "preserve", para / "jsx": "react", e descomenta-lá
[] - Fazer o `import React from 'react'` para todos os componentes
[] - Criar uma interface dentro do componente e declarar os tipos das variaveis que esta usando no momento:

```
    interface BotaoProps {
        children: ReactElement
    }
```

Dessa forma podemos "tipar" as props que chegam do front-end com a interface:

```
    const Botao = (props: BotaoProps) => ...
```

E então usa-lá dentro da function

```
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
```


