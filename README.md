# Vanellen

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Sobre o site](#2-sobre-o-site)
* [3. Personas](#3-personas)
* [4. Protótipo](#4-protótipo)
* [5. Funcionalidade](#5-funcionalidade)
* [6. Teste de usabilidade](#6-teste-de-usabilidade)
* [7. Ferramentas utilizadas](#7-ferramentas-utilizadas)
* [8. Desenvolvedoras](#8-desenvolvedoras)


***

## 1. Prefácio

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. As redes sociais
invadiram nossas vidas. Nós as amamos ou odiamos, e muitas pessoas não conseguem
viver sem elas.

Há redes sociais de todo tipo para todos os tipos de interesse, e neste projeto realizamos a construção de uma rede social através da manipulação do banco de dados do firebase.
A estratégia para o desenvolvimento foi code review, divisão de tarefas no notion e retro.

Ao decorrer dos tópicos você obterá mais informações sobre o projeto.

<b>Para rodar a aplicação [clique aqui](https://ellencavalcantebrito.github.io/SAP008-social-network/)</b>
- Email: vanellen@teste.com
- Senha: 123456

Abaixo segue um gif ilustrando a navegação do usuário.

<img src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/Feature-Ellen/src/img/navegacao-vanellen.gif%20(1).gif" alt="gif-navegação">

## 2. Sobre o site

A rede social <b id="vanellen">VANELLEN</b> foi construída como parte do bootcamp da Laboratória, que visa desenvolver mulheres para o mercado tecnológico. <br/> <br/>
Com isso, estudamos sobre qual seria o tema da aplicação e os possíveis usuários e então desenvolvemos o
site <b id="vanellen">VANELLEN</b> que tem como objetivo
ajudar os usuários a escolherem filmes/séries com base na opinião de outras pessoas, a <b id="vanellen">VANELLEN</b> traz como recurso não apenas a opção de compartilhar a sua opnião e ler a dos outros usuários, mas também curtir ou não curtir tal publicação, desta forma, sendo mais fácil mensurar se determinado filme/série foi bem aceito pelo público.

## 3. Personas

<img src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/Feature-Ellen/src/img/Usu%C3%A1rios.png" alt="personas">

- Quem são os usuários? Pessoas que gostam de filmes e séries e buscam por opniões de outros usuários sobre determinado filme/série.
- O que os usuários precisam? De uma aplicação com fácil cadastro e de simples interação.
- Por quê? Para que os usuários possam conhecer opniões de outras pessoas sobre determinado filme/série além de compartilhar informações sobre filmes e séries que já assistiram.

<b><h3>Necessidades e objetivos:</h3></b>

- Acessar uma plataforma simples e direta;
- Avaliar as publicações por curtir/não curti;
- Criação de cadastro simples, sem pedir muitas informações e validações.

<b><h3>Definição entregue:</h3></b></br>
<b>Criação e login de conta de usuário</b>

- Site desenvolvido em singlepage, onde faz com que a aplicação rode de forma mais rápida;
- Criação de conta por meio do site Vanellen ou acesso pelo provedor google;
- Cadastro simples, solicitando apenas o nome, e-maile  senha de acesso;
- Somente usuários com contas válidas têm acesso permitido;
- Não contém usuários duplicados (validamos se o e-mail já existe ao realizar o registro);

<b>Timeline/linha do tempo</b>

- Login direto a página de postagens do usuário;
- Ao publicar é validado se há conteúdo no input;
- Opção de curtir ou não curtir determinada publicação;
- Opçao de editar ou deletar postagens feitas pelo próprio user. 

## 4. Protótipo

Para o desenvolvimento do protótipo de alta fidelidade, foi usado o Figma, que é um editor gráfico de vetor e prototipagem de projetos de design.

Protótipo web:
<img src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/feature-Vanessa/src/img/prototipo-web.jpg" alt="prototipo-web">

Protótipo mobile:
<img src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/feature-Vanessa/src/img/prototipo-mobile.jpg" alt="prototipo-mobile">

## 5. Funcionalidade

A rede social Vanellen inicia-se na página de login e o usuário tem duas opções de login sendo com e-mail e senha ou conta do Google. Quando autenticado, o usuário é redirecionado diretamente para a timeline. 
Caso o usuário ainda não tenha uma conta, há um link de "Cadastre-se!" e quando clicado o user é redirecionado para a página de registro.
Além disso, a aplicação conta com um link para resetar a senha, caso o usuário não se recorde.

Ao se logar na página o usuário verá no menu a: HOME, sobre e perfil.
A página de perfil consta o nome do usuário e foto vinculada ao provedor google, caso o usuário não possua foto ira aparecer um avatar personalizado do site.
A página sobre contém informações sobre o projeto e as desenvolvedoras.
A página HOME contém as postagens dos usuários e além disso dois links com as séries e filmes indicados pelos criadores do site Vanellen.
Para sair da aplicação o usuário pode clicar no botão"xxx" e será redirecionado a tela de login.

## 6. Teste de usabilidade 

- Incluimos no menu um botão "Home", antes ficava um ícone de "+" e os usuários disseram não ser intuitivo.
- Colocamos na caixa de envio de texto um placeholder indicando as informações que devem ser preenchidas, os usuários alegaram que sentiram falta desta informação.
- Incluimos na página de registro um botão para voltar na página anterior, os usuários disseram que era mais funcional do que retornar a página direto pelo navegador.

## 7. Ferramenta utilizadas

- `JavaScript`
- `HTML5`
- `CSS3`
- `Firebase Hosting`
- `Firebase Firestore`
- `Firebase Auth`
- `EsLint`

## 8. Desenvolvedoras:

| [<img src="./img/ellen.png" width=115 alt="foto-ellen"><br><sub>Ellen Cavalcante</sub>](https://www.linkedin.com/in/ellencavalcantebrito/) |  [<img src="./img/vanessa.png" width=115 alt="foto-vanessa"><br><sub>Vanessa Bueck</sub>]https://www.linkedin.com/in/vanessa-bueck/) |
| :---: | :---: | 

...