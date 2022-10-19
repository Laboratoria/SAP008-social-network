![Rebulogogithub](./src/img/rebulogogif.gif)
# Rede social feita por mulheres, para mulheres.

## Índice

* [1. Resumo do Projeto](#1-resumo-do-projeto)
* [2. Definição do produto e escolha do tema](#2-definição-do-produto-e-escolha-do-tema)
* [3. Pesquisa de Usuário e Histórias de Usuários](#3-pesquisa-de-usuário-e-histórias-de-usuários)
* [4. Prototipação e testes de usabilidade](#4-prototipação-e-testes-de-usabilidade)
* [5. Estrutura e funcionalidades da SPA](#5-estrutura-e-funcionalidades-da-SPA)
* [6. Testes unitários e Testes assíncronos](#6-testes-unitários-e-assíncronos)
* [7. Ferramentas e Tech Skills](#7-ferramentas-e-tech-skills)
* [8. Considerações finais](#8-considerações-finais)

***

## 1. Resumo do Projeto

Social Network foi o terceiro projeto desenvolvido durante o bootcamp da turma SAP008 da Laboratória, no qual tivemos como principal objetivo a criação de uma rede social, devendo ser uma Single Page Application, através da qual fosse possível que os usuários se cadastrassem; fizessem  login; publicassem, editassem, deletassem e dessem likes em posts. 

O projeto foi desenvolvido em trio, por Clarissa, Fabiany e Joyce, dentro de 6 sprints. E as principais ferramentas utilizadas durante o processo foram: Notion, para o planning das sprints; Figma, para o processo de prototipação de alta fidelidade; Metroretro para as sessões de retrospectiva das sprints; Miro, para a escrita das histórias de usuários; Canva, para elementos de identidade visual (logo e mosaico de vídeos). 

Além disso, utilizamos o conjunto de serviços de hospedagem Firebase. Para manipularmos a parte de backend da aplicação, utilizamos os serviços Firebase Authentication - para fazer o processo de autenticação de usuários, e o Cloud Firestore - para a criação e manutenção do nosso banco de dados. 

Nossas sprints foram planejadas conforme as necessidades apresentadas em nossas histórias de usuário - as quais foram criadas com base na nossa pesquisa de usuário. Deste modo, definimos e trabalhamos no desenvolvimento das funcionalidades de nossa aplicação com base nas necessidades das usuárias. 

## 2. Definição do produto e escolha do tema

Sabemos que, infelizmente, mulheres são expostas, cotidianamente, a situações de discriminação, exclusão e abuso resultantes de uma sociedade misógina e intolerante. 
Para mulheres lésbicas, essas situações têm ainda o agravante da interseção entre misoginia e homofobia - a lesbofobia. Segundo pesquisa coordenada pelo [Lesbocenso Nacional (2021-2022)](https://lesbocenso.com.br/) - que mapeia o perfil sócio-demográfico e as vivências de mulheres lésbicas e sapatão no Brasil -, 78,6% das entrevistadas já sofreu lesbofobia, e 77,3% conhece alguma mulher lésbica que já foi vítima. 

Sendo assim, percebemos, na criação deste projeto, uma oportunidade para criar uma iniciativa que propõe solucionar o problema que é a escassez por espaços inclusivos e feitos exclusivamente para mulheres lésbicas, objetivando proporcionar a elas uma experiência online livre das diversas formas de preconceito que sofrem enquanto mulheres, casais e grupo social, cotidianamente. 

Fundamentando-nos em conceitos de UX, realizamos uma pesquisa de usuário com 20 mulheres lésbicas, através da qual buscamos entender se seria do interesse destas mulheres uma rede social exclusivamente feita para o uso desse público, e se elas já haviam utilizado uma rede social como a que propomos. Conforme os resultados obtidos, 100% das usuárias aprovaram a proposta, nenhuma tendo usado uma rede social como esta antes. A partir da apuração dos resultados, e considerando a problemática em questão, definimos nosso produto da seguinte forma: 

**Rebu é uma rede social destinada a mulheres lésbicas, possibilitando que elas compartilhem experiências, vivências e interesses,  para se conectarem e formar novos laços.**

Rebu surgiu como uma forma criativa e tecnológica de solucionar o problema que é a escassez por espaços inclusivos que sejam feitos e pensados exclusivamente para mulheres lésbicas. Sendo assim, o intuito por trás da criação deste projeto é disponibilizar um espaço online, seguro, acolhedor e afirmativo para essas mulheres se conectarem e interagirem. 

## 3. Pesquisa de Usuário e Histórias de Usuários

Nossa pesquisa de usuário se deu através da aplicação de um questionário para um grupo de 20 mulheres lésbicas. Buscamos entender a viabilidade da nossa proposta para nosso público; com quais termos elas se sentiam confortáveis; e quais funcionalidades elas julgavam ser importantes em uma rede social deste tipo. Os resultados obtidos inspiraram a criação de nossas histórias de usuários.

Durante nossas sprints, trabalhamos uma história de usuário por vez, desenvolvendo, implementando e testando as funcionalidades criadas para solucionar os problemas de cada história. Chegamos ao resultado de 4 diferentes histórias de usuários, como observadas a seguir:

![Histórias-de-usuários](./src/img/historiasdeusuarios.png)

### HISTÓRIA 1: 
Para a conclusão desta história, focamos em implementar as páginas de cadastro e login da página, e criar a lógica de cadastrar e logar com e-mail ou com gmail utilizando o Firebase como autenticador. 
 
### HISTÓRIA 2: 
Para atender à segunda história, criamos uma página de redefinição de senha e a lógica para recebimento de e-mail de redefinição de senha - utilizamos o Firebase. Além disso, trabalhamos na construção da lógica para validação dos inputs dos formulários e para tratar os erros do Firebase, transformando-os em mensagens user friendly que também são exibidas na tela em formato de aviso. 

### HISTÓRIA 3: 
Conforme a demanda desta história, trabalhamos na implementação das funcionalidades de criar, editar, deletar e curtir posts.

### HISTÓRIA 4: 
Incluímos filtragem e categorização de posts, possibilitando que a usuária categorize suas próprias postagens conforme determinados interesses, além de conseguir filtrar postagens exibidas no feed conforme os dados interesses. 

* **Critérios de aceitação:** tudo o que deve acontecer para satisfazer as
  necessidades do usuário.

* **Definição de pronto:** todos os aspectos técnicos que devem ser atendidos
  para que, como equipe, saibam que essa história está finalizada e pronta para
  ser publicada. **Todas** suas histórias de usuário (com exceções), devem
  incluir esses aspectos em sua definição de pronto (além de tudo o que precisa
  adicionar):

  - Ser uma SPA.
  - Ser _responsivo_.
  - Receber _code review_ de pelo menos uma parceira de outra equipe.
  - Fazer _tests_ unitários.
  - Fazer testes manuais buscando erros e imperfeições simples.
  - Fazer testes de usabilidade e incorporar o _feedback_ dos usuários como
    melhorias.
  - Fazer deploy do aplicativo e marcar a versão (git tag).

## 4. Prototipação e testes de usabilidade

Utilizamos o Figma para o processo de prototipação. Utilizando o conceito responsivo Mobile First, iniciamos com a construção do protótipo na versão mobile e construímos a versão desktop após a implementação da primeira. 

Nossos protótipos são de alta fidelidade e navegáveis, para telas:

 ### MOBILE:
 ![prototipomobile](./src/img/prototipomobile.png)

 ### DESKTOP:
 ![prototipodesktop](./src/img/prototipodesktop.png)

 ### TABLET:
 ![prototipotablet](./src/img/prototipotablet.png)

Após a implementação navegável, aplicamos nossos testes de usabilidade, que foram......

Pensamos nos protótipos com base nas histórias de usuário... 

## 5. Estrutura e funcionalidades da SPA

A aplicação foi desenvolvida como uma Single Page Application (SPA), utilizando routing. Sendo assim, foi dividida nas seções:

***#Homepage*** - PÁGINA INICIAL:
É a página principal do site, através da qual as usuárias iniciam navegação, podendo ser direcionadas a outras seções da aplicação (as páginas de about, login e cadastro).

***#About*** - SOBRE REBU:
Página que contextualiza a rede social, explicando sua definição e proposta.

***#Login e #Register*** - ENTRAR E CADASTRAR:
Nossas usuárias podem se cadastrar e entrar utilizando o método de login do Google, ou utilizando e-mail e senha. As usuárias recebem mensagens de apoio para realizar a etapa de registro e login, com validação de form.

***#reset-password*** - REDEFINIÇÃO DE SENHA:
Página para as usuárias recuperarem acesso a suas contas caso esqueçam a senha - após preenchimento do form sinalizando o e-mail cadastrado, elas recebem um e-mail com link para redefinir a senha. 

***#feed*** - FEED:
Página na qual nossas usuárias poderão publicar posts, categorizar seus posts para serem exibidos conforme a categoria selecionada, editar e deletar os próprios posts, além de dar like em posts de outras usuárias, e exibir apenas posts que correspondam a determinada categoria, através de um sistema de filtros. 

## 6. Testes unitários e Testes assíncronos

Os testes desse projeto foram desenvolvidos pra verificar a quantidade de chamada das funções do firebase e com quais parâmetros essas funções são chamadas.

Rebu foi nossa primeira experiência com mock de função. Usamos o framework Jest.

 ![Testes](./src/img/print_testes.png)


## 7. Ferramentas e Tech Skills

- Figma;
- Notion;
- Metroretro;
- Miro;
- Git e GitHub;
- HTML5;
- CSS;
- Javascript;
- Responsividade;
- Jest;
- Firebase.

## 8. Considerações finais
