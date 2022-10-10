acesse nosso Deploy:

# SHOW +

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Histórias do usuário](#3-historia-do-usuario)
* [4. Interface do usuário](#4-interface-do-usuario)
* [5. Estrutura lógica](#5-estrutura-logica)
* [6. Code Reviews](#6-code-review)
* [7. Processo do Desenvolvimento do Produto](#7-processo-do-desenvolvimento-do-produto)
* [8. Objetivos de aprendizagem](#8-objetivos-de-aprendizagem)
* [9. Testes](#9-testes)
* [10. Firebase e Firestore](#10-firebase-e-firestore)


## 1. Prefácio / Introdução sobre o projeto

Seja em palcos gigantescos ou em uma roda de samba na praça, seja em um festival milionário ou na rua da sua casa, pode ter acontecido ontem ou há muitos anos atrás, alguns shows marcam nossas vidas para sempre e se tornam inesquecíveis. 

Criamos este espaço para compartilharmos esses momentos, aqui, você pode contar um pouco do que viveu, encontrar pessoas que assistiram os mesmos shows ou conhecer um pouco de outras vivências sonoras.

Que bom te ver por aqui, agora conta pra gente quais os seus Shows + inesquecíveis.

## 2. Resumo do projeto

Quem são os principais usuários do produto?
Pessoas que curtem a vibe e a adrenalina de estar numa multidão ou em uma apresentação intimista curtindo o mesmo som ou descobrindo novas possibilidades.

Quais são os objetivos do usuário em relação com o produto?
Se conectar com outras pessoas com o objetivo de compartilhar suas experiências vividas em shows e conhecer novas aventuras sonoras.

Como você acredita que o produto está resolvendo os problemas do usuário?
Em outras redes sociais, a música é só mais um tema, onde as experiências acabam se diluindo no meio de tantos assuntos, dificultando um acesso mais próximo com outras pessoas com o mesmo perfil.
Queremos possibilitar que o público de shows possa indicar, fazer uma análise, guardar,  compartilhar memórias  e sentimentos em depoimentos sobre suas vivências.


## 3. Histórias do usuário

História do usuário 1: 
"Como potencial usuário, quero ter a opção de criar uma conta onde crio meu login e senha ou utilizo meu email, para acessar a plataforma"

História do usuário 2: 
"Como potencial usuário, quero utilizar minha conta google para acessar o site e evitar gastar tempo cadastrando uma nova conta."

História do usuário 3: 
"Como usuário quero saber se as informações que preencho no cadastro ou login estão sendo validadas e autenticadas, para eu acessar o site."

História do usuário 4: 
"Como amante de música quero poder acessar a plataforma, postar e compartilhar depoimentos de shows que foram inesquecíveis na minha vida"

Historia do usuário 5:
"Como usuário eu quero que o site me alerte caso eu tente postar algo sem conteúdo, para que todos os meus posts tenham um texto escrito."

Historia do usuário 6:
"Como usuário quero ter liberdade de modificar o que escrevi e poder editar um post, caso eu perceba algum erro ortográfico, e quero que sinalize quais posts foram alterados"

Historia do usuário 7:
"Como usuário do site, gostaria de poder excluir algum post que não deu tanto engajamento, mas quero ser avisado se tenho certeza caso eu mude de ideia na hora."

Historia do usuário 8:
"Como amante de música quero interagir com outros usuários que possuem os mesmo gostos que eu, dando ou removendo like nas postagens"

Historia do usuário 9:
"Como usuário quero saber quantas pessoas gostaram do meu post, pois é importante pra mim saber o impacto do meu conteúdo."


### Interface do Usuário

Protótipo de baixa fidelidade
(foto da clare)

Protótipo de alta fidelidade
(unir todas as fotos pelo menos das pages de login, cadastro e timeline, sendo em mobile e desktop).

Paleta de cores
A paleta de cores foi definida utilizando a ferramenta Adobe Color. A foto abaixo foi a escolhida para representar nossa escolha. 
(imagem)

Responsividade

Mobile first

### Estrutura lógica

- Os filtros (buttons) devem apresentar na página os personagens correspondentes a cada uma das categorias.
Deve ser possível cruzar as características dos filtros (ex: espécie + gênero + status).
- O filtro de episódios deve apresentar uma lista dos episódios correspondentes.
- A partir da filtragem devem ser apresentados os personagens participantes do episódio filtrado.
- Os personagens devem ter a possibilidade de ser apresentados em ordem alfabética de A - Z e de Z - A.
- Na pesquisa (input) deve ser possível procurar pelo nome da personagem.
- Os personagens são apresentados em formato de cards.
- Os cards devem ser dinâmicos e virar quando o usuário passar o mouse em cima da figura, apresentando informações complementares atrás.
- A responsividade do site deve se adequar proporcionalmente ao tamanho de cada mídia.


### Code Reviews

obs.: Colocar os dois resumos da Cla - digitar e colocar em formato de link.

### Processo do Desenvolvimento do Produto

- Escolha do tema
- Levantamento de problemas
- Levantamento de informações e dados sobre o problema escolhido
- Definição das histórias do usuário
- Planejamento por sprint,
- Protótipo do projeto;
- Criação de Logo;
- Desenvolvimento do código;
- Testes unitários;
- Deploy.

### Objetivos de aprendizagem
Copiar o que já está no trello

### Testes

realização os testes

### Firebase e Firestore

- [ ] **Firebase Auth**

  <details><summary>Links</summary><p>

  * [Primeiros passos com o Firebase Authentication em sites - Documentação oficial](https://firebase.google.com/docs/auth/web/start?hl=pt-BR)
  * [Gerenciar usuários no Firebase (onAuthStateChanged) - Documentação oficial](https://firebase.google.com/docs/auth/web/manage-users?hl=pt-BR)
</p></details>

- [ ] **Firestore**

  <details><summary>Links</summary><p>

  * [Firestore - Documentação oficial](https://firebase.google.com/docs/firestore?hl=pt-BR)
  * [Regras de segurança do Firebase - Documentação oficial](https://firebase.google.com/docs/rules?hl=pt-BR)
  * [Receber atualizações em tempo real com o Cloud Firestore - Documentação oficial](https://firebase.google.com/docs/firestore/query-data/listen?hl=pt-BR)
</p></details>

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se **você terminou** e
cumpriu todos os requisitos acima e sobrou tempo, tente concluí-las. Dessa
forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem do
projeto.

* Criar posts com imagens.
* Procurar usuários, adicionar e excluir "amigos".
* Definir a privacidade de _posts_ (público ou apenas para amigos).
* Permitir ver na linha do tempo de usuários "não amigos" apenas os posts
  públicos.
* Permitir comentar ou responder a uma postagem.
* Editar perfil.

## 7. Entrega

O projeto será entregue subindo seu código no GitHub (`commit` /`push`) e a
interface será hospedada usando o GitHub pages ou outro serviço de hospedagem
que você pode ter encontrado ao longo do caminho.



