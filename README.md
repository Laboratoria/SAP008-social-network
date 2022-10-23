<div align="center">

  <img alt="Logo" src="https://github.com/brunalimxst/SAP008-social-network/blob/main/src/imagens/logo.png" style="height: 200px;">

  # **Espectro:** _A rede social que conecta vivências com o TEA!_
  
  <br>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node.js" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" style="height: 40px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="height: 40px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style="height: 40px;"/>

  <br>

  **Status do Projeto:** 60% - Em progresso
    
  A rede social *Espectro* pode ser visitada [aqui](https://)!
</div>

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Definição de pronto](#3-definição-de-pronto)
* [4. Web Aplicação](#4-web-aplicação)
* [5. Repositório](#5-repositório)
* [6. Deploy](#6-deploy)
* [7. Checklist](#7-checklist)
***

## 1. Prefácio

Rede social é uma estrutura social composta por pessoas ou organizações, conectadas por um ou vários tipos de relações, que compartilham valores e objetivos comuns. Como exemplo, temos o Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. É um fato que as redes sociais hoje, atuam além de uma plataforma de entretenimento, a possibilidade de conectar-se com outras pessoas, histórias, produtos, informações cria uma rede de negócio. Passou a atribuir valor e credibilidade para uma marca, o bom uso de um perfil no instagram, por exemplo. 

<img alt="imagem-redes-sociais" src="https://github.com/brunalimxst/SAP008-social-network/blob/main/src/imagens/redes.png" style="height: 150px;">

## 2. Resumo do projeto

Dado contexto, foi desenvolvido pelo nosso trio, uma Single Page Application (SPA) voltada para pessoas que vivem no Transtorno do Espectro Autista (TEA), a fim de impactar a vida dessas pessoas positivamente atráves de informação e rede apoio para pais, familiares e amigos. Essa rede social tem como objetivo criar um espaço de acolhimento, trocas, relatos entre pessoas que, de alguma forma, tem vivência com o TEA. Na rede Espectro, apostamos em um layout limpo, simples e intuitivo. Nossos usuários vão deparar-se com a tela de login e a opção de criar uma conta, assim que acessar a página. Após criar uma conta, nossos usuários terão um perfil com acesso ao feed, onde poderão criar postagens, curtir, descurtir e comentar postagens de outros usuários. Além de ter uma segunda aba de "Blog", que é destinada a artigos, matérias e outros documentos de cunho informativo à respeito do autismo.



A rede Espectro veio como necessidade de ser desenvolvida, a partir de dores pessoais ao deparar-se com o diagnóstico de alguém próximo e não ter muitos canais informativos como respaldo neste primeiro momento. Em suma, esse rede social tem como meta alcançar familiares e amigos que buscam uma rede de apoio após um recém diagnóstico, mas também tem o intuito de trazer artigos, matérias e informações mais assertivas sobre o tema, partindo do ideal que a informação é um presente e pode impactar na qualidade de vida e no desenvolvimento cognitivo de pessoas no espectro autista, uma vez que essas estarão cercadas por familiares e amigos informados. 

![Espectro](https://i.pinimg.com/564x/d3/67/5c/d3675c0ff9a54ef17118d9895abac79d.jpg)

## 3. Definição de produto

A partir de um [formulário](https://docs.google.com/forms/d/e/1FAIpQLScen5FTO1-LLcTDpTtDH3oMjBpC3NO8kGkmqbdb4q_ntTqDuA/viewform) com o intuito de coletar dados de nossos potenciais usuários para entender o processo desde o diagnóstico de alguém próximo no TEA, até a vivência diária, entendemos que a falta de informações e de redes de apoio é uma necessidade para auxiliar familiares e amigos de pessoas que vivem no espectro autista, e também que esse acesso à informação impacta diretamente na qualidade de vida de quem vive no TEA. Dado contexto, definimos alguns pontos principais para a construção dessa rede social: 

  * Criação de uma conta e login com um perfil exclusivo para acessar a rede
  * Um feed para compartilhar histórias, informações, criar publicações, ler outras, curtir, descurtir e comentar
  * Opção de "deslogar" da conta
  * Um aba "about us" contando brevemente o intuito da rede social e apresentando brevemente as desenvolvedoras
  * Possibilidade de editar o próprio perfil com foto
 
 ## Histórias de Usuário
 
 A primeira história de usuário foi definida pensando numa pessoa que foi diagnosticada tardiamente e está no espectro autista de nível 1:
 
 ![História de usuário 1](https://i.pinimg.com/236x/ed/e3/26/ede3265b77c5d626feb95e6709717fbd.jpg)
 
 A partir dessa história, foi definido os critérios de aceitação voltado ao processo de encontrar uma rede social e se cadastrar. 
*Critérios de aceitação:* Ao entrar na primeira página da rede social, o usuário poderá escolher dinamicamente entre se logar diretamente caso já tenha uma conta, ou se cadastrar. Na página "Cadastre-se", deverá inserir nome completo, nome de usuário, e-mail e senha, e clicar no botão "Cadastrar". Além disso, o usuário deve conseguir escolher entre criar uma nova conta ou se logar por meio de uma conta Google, associado a um Gmail.

A definição de pronto foi estabelecida a partir de recursos mínimos e obrigatórios que o usuário precisa conseguir fazer pautado nessa primeira história de usuário.

*Definição de pronto:* O usuário só conseguirá se cadastrar se preencher todos os campos corretamente com nome completo, e-mail e senha.
<br>
A segunda história de usuário foi definida pensando em pais que tiveram o diagnóstico do filho pequeno recentemente e estão aflitos, buscando informações e uma rede de apoio para que possam entender melhor todo o contexto: 

![História de usuário 2](https://i.pinimg.com/736x/a0/0a/46/a00a46ae7e3c48d0075c7431cfe07285.jpg)

A partir dessa segunda história de usuário, foi definido os critérios de aceitação pautado numa rede social já existente em que o usuário crie sua conta e tenha acesso ao feed da rede, a qual terão publicações de outros usuários que também vivem próximos a realidade do espectro autista e utilizam aquele espaço para trocas em geral, sejam de teor informativo, desabafos pessoais, relato de algum acontecimento recente e todos guiados pelo desejo de se apoiarem e se informarem. 

A definição de pronto foi estabelecida pensando no recursos essenciais para retratar a funcionalidade de uma rede social.

*Definição de pronto:* O usuário só terá a opção de editar e deletar uma postagem se o mesmo tiver criado a publicação. O usuário poderá criar publicações, curtir e comentar outras desde que tenha uma conta criada na rede _Espectro_.

*Critérios de aceitação:* Ao cadastrar/logar na rede social, o usuário terá acesso à página principal no modelo "feed" ao qual o possibilitará de criar publicações, ler relatos de outros usuários, curtir postagens e comentar postagens. Além disso, o usuário deve ter a possbilidade de editar e deletar as suas próprias postagens. Deve também ter a opção de incluir uma foto de perfil para seu usuário e conseguir deslogar da página a qualquer momento desejado.

## 4. Web Aplicação


## 5. Repositório

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

### 5.4 Desenho da Interface de Usuário (protótipo de baixa fidelidade)

Você deve definir qual será o fluxo que o usuário seguirá dentro do seu
aplicativo e, com isso, criar a interface do usuário (UI) que siga este fluxo.

### 5.5 Responsivo

Deve funcionar bem em dispositivos de tela grande (computadores, laptops etc.) e
pequena (_tablets_, telefones celulares etc.). Sugerimos seguir a técnica
_`mobile first`_ (mais detalhes sobre essa técnica ao final).

### 5.6 Considerações sobre o comportamento da Interface do Usuário (UI)

Essas considerações ajudarão você a escrever as definições de pronto de sua
H.U.:

## 6. Deploy



## 7. Checklist


