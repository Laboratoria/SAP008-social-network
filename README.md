# Vanellen

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Sobre o site](#2-sobre-o-site)
* [3. Personas](#3-personas)
* [4. Protótipo](#4-protótipo)
* [5. Funcionalidade](#6-funcionalidade)
* [7. Ferramentas utilizadas](#7-ferramentas-utilizadas)
* [8. Desenvolvedoras](#8-desenvolvedoras)


***

## 1. Prefácio

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. As redes sociais
invadiram nossas vidas. Nós as amamos ou odiamos, e muitas pessoas não conseguem
viver sem elas.

Há redes sociais de todo tipo para todos os tipos de interesse, e neste projeto realizamos a construção de uma rede social através da manipulação de dados através do banco de dados do firebase.
A estratégia para o desenvolvimento foi code review, divisão de tarefas no notion e retro.

Ao decorrer dos tópicos você obterá mais informações sobre o projeto.

Para rodar a aplicação [clique aqui](https://ellencavalcantebrito.github.io/SAP008-social-network/)
Email teste: vanellen@teste.com
Senha: 123456

## 2. Sobre o site

A rede social VANELLEN foi construída como parte do conteúdo de aprendizado do bootcamp da Laboratória, que visa desenvolver mulheres para o mercado tecnológico.

Com isso, estudamos sobre qual seria o tema da aplicação e os possíveis usuários e então desenvolvemos o site “VANELLEN” que tem como objetivo ajudar os usuários a escolherem filmes/séries com base na opinião de outras pessoas, a VANELLEN traz como recurso não apenas a opção de compartilhar opinião e ler opinião de outros usuários, mas também curtir ou não curtir tal publicação, desta forma, sendo mais fácil mensurar se determinado filme/série foi bem aceito pelo público.

## 3. Personas

<img src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/Feature-Ellen/src/img/Usu%C3%A1rios.png" alt="personas">

Necessidades e objetivos:

Acessar uma plataforma simples e direta;
Avaliar as publicações por curtir/não curti;
Criação de cadastro simples, sem pedir muitas informações e validações

Definição entregue:

Site desenvolvido em singlepage, onde faz com que a aplicação rode de forma mais rápida;
Criação de conta por meio do site Vanellen ou acesso pelo provedor google;
Login direto a página de postagens do usuário;
Opção de curtir ou não curtir determinada publicação;
Opçao de editar ou deletar postagens feitas pelo user.

## 4. Protótipo

Para o desenvolvimento do protótipo de alta fidelidade, foi usado o Figma, que é um editor gráfico de vetor e prototipagem de projetos de design.
Abaixo segue um gif ilustrando a navegação do usuário.

<img src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/feature-Vanessa/src/img/2022_10_06_005645.gif" alt="gif-navegação">

Protótipo web:
<img src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/feature-Vanessa/src/img/prototipo-web.jpg" alt="prototipo-web">

Protótipo mobile:
<img src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/feature-Vanessa/src/img/prototipo-mobile.jpg" alt="prototipo-mobile">


## 6. Funcionalidade

A rede social Vanellen inicia-se na página de login e o usuário tem duas opções de login sendo com e-mail e senha ou conta do Google. Quando autenticado, o usuário é redirecionado diretamente para a timeline. 
Caso o usuário ainda não tenha uma conta, há um link de "Cadastre-se!" e quando clicado o user é redirecionado para a página de registro.
Além disso, a aplicação conta com um link para resetar a senha, caso o usuário não se recorde.

Ao se logar na página o usuário verá no menu a: HOME, sobre e perfil.
A página de perfil consta o nome do usuário e foto vinculada ao provedor google, caso o usuário não possua foto ira aparecer um avatar personalizado do site.
A página sobre contém informações sobre o projeto e as desenvolvedoras.
A página HOME contém as postagens dos usuários e além disso dois links com as séries e filmes indicados pelos criadores do site Vanellen.
Para sair da aplicação o usuário pode clicar no botão"xxx" e será redirecionado a tela de login.

## 7. Ferramenta utilizadas

JavaScript
HTML5
CSS3
Firebase Hosting
Firebase Firestore
Firebase Auth
EsLint

## 8. Desenvolvedoras:

[Ellen Cavalcante](https://www.linkedin.com/in/ellencavalcantebrito/)
[Vanessa Bueck](https://www.linkedin.com/in/vanessa-bueck/)