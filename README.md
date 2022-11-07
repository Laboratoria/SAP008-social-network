acesse nosso Deploy:

# SHOW +

Acesse o deploy aqui!

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Histórias do usuário](#3-histórias-do-usuário)
* [4. Interface do usuário](#4-interface-do-usuário)
* [5. Planejamento](#5-planejamento)
* [6. Code Reviews](#6-code-reviews)
* [7. Processo do Desenvolvimento do Produto](#7-processo-do-desenvolvimento-do-produto)
* [8. Objetivos de aprendizagem](#8-objetivos-de-aprendizagem)
* [9. Boilerplate e Testes Unitários](#9-boilerplate-e-testes-unitários)
* [10. Firebase e Firestore](#10-firebase-e-firestore)
* [11. Implementações Futuras](11-#implementações-futuras)
* [12. Entrega](#12-entrega)
* [13. Desenvolvedoras](#13-desenvolvedoras)


# 1. Prefácio

Seja em palcos gigantescos ou em uma roda de samba na praça, seja em um festival milionário ou na rua da sua casa, pode ter acontecido ontem ou há muitos anos atrás, alguns shows marcam nossas vidas para sempre e se tornam inesquecíveis. 

Criamos este espaço para compartilharmos esses momentos, aqui, você pode contar um pouco do que viveu, encontrar pessoas que assistiram os mesmos shows ou conhecer um pouco de outras vivências sonoras.

Que bom te ver por aqui, agora conta pra gente quais foram os seus Shows + inesquecíveis.


# 2. Resumo do projeto

Quem são os principais usuários do produto?
Pessoas que curtem a vibe e a adrenalina de estar numa multidão ou em uma apresentação intimista curtindo o mesmo som ou descobrindo novas sonoridades.

Quais são os objetivos do usuário em relação com o produto?
Se conectar com outras pessoas com o objetivo de compartilhar experiências vividas em shows e conhecer novas aventuras sonoras.

Como você acredita que o produto está resolvendo os problemas do usuário?
Em outras redes sociais, a música é só mais um tema, onde as experiências acabam se diluindo no meio de tantos assuntos, dificultando um acesso mais próximo com outras pessoas com o mesmo perfil.
Queremos possibilitar que o público de shows possa indicar, fazer uma análise, guardar,  compartilhar memórias  e sentimentos em depoimentos sobre suas vivências.


# 3. Histórias do usuário

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


# 4. Interface do Usuário

Protótipo de baixa fidelidade
!.[images].(image.png)

Protótipo de alta fidelidade / mobile first
O protótipo foi desenvolvido no Figma.
!.[images].(mobilefirst.PNG)
!.[images].(mobilesecond.PNG)

Paleta de cores
A paleta de cores foi definida utilizando a ferramenta Adobe Color. A foto abaixo foi a escolhida para representar nossa escolha. 
!.[images].(paletadecores.PNG)


# 5. Planejamento

O planejamento foi realizado utilizando a metologia ágil (SCRUM) e a metodologia Kanban, sendo a ferramenta escolhido o Trello.

Cada sprint teve a duração de 01 semana, onde a equipe analisava o desenvolvimento de cada etapa e realizava os ajustes necessários para um melhor aproveitamento do tempo individual e coletivo.

O projeto foi realizado em 09 sprints.


# 6. Code Reviews

Foram realizados pela equipe code reviews periodicos conforme o desenvolvimento do projeto.


# 7. Processo do Desenvolvimento do Produto

- Escolha do tema,
- Levantamento de problemas do usuário,
- Levantamento de informações e dados sobre a proposta escolhida,
- Definição das histórias do usuário,
- Planejamento por sprint,
- Protótipo do projeto,
- Criação de Logo,
- Desenvolvimento do código,
- Implementação do Firebase e Firestore,
- Testes unitários,
- Deploy.


# 8. Objetivos de aprendizagem

Construir uma Single-page Application (SPA) responsiva (com mais de uma tela/ página) na qual seja possível ler e escrever dados.

- HTML
- CSS
- Web APIs
- JavaScript
- Controle de Versões (Git e GitHub)
- User-Centricity
- Product-Design
- Research
- Firebase


# 9. Boilerplate e Testes Unitários

Este projeto não incluiu um boilerplate, portanto definimos a estrutura de pastas e escrevemos nossos próprios testes unitários (tests).
!.[images].(boilerplate.PNG)
!.[images].(testesunitarios.PNG)


# 10. Firebase e Firestore

Foram utilizados os seguintes metodos e funções:

Firebase
* initializeApp,
* getAuth,
* signInWithEmailAndPassword,
* createUserWithEmailAndPassword,
* GoogleAuthProvider,
* signInWithRedirect,
* onAuthStateChanged,
* sendPasswordResetEmail,
* updateProfile

Firestore
* getFirestore,
* collection,
* addDoc,
* getDocs,
* doc,
* updateDoc,
* deleteDoc,
* getDoc


# 11. Implementações Futuras

* Criar posts com imagens,
* Criar um campo de pesquisa para procurar usuários,
* Criar filtros de pesquisa por artista, data e local,
* Adicionar e excluir "amigos",
* Definir a privacidade de _posts_ (público ou apenas para amigos),
* Permitir ver na linha do tempo de usuários "não amigos" apenas os posts
  públicos,
* Permitir comentar ou responder a uma postagem,
* Editar perfil.


# 12. Entrega

O projeto foi entregue subindo o código no GitHub (`commit` /`push`) e a
interface foi hospedada usando o GitHub pages.


# 13. Desenvolvedoras

O projeto foi desenvolvido em trio por:

* Andrea dos Santos .[GitHub].(https://github.com/Canzua) / .[Linkedin].(https://www.linkedin.com/in/andreasiqueiradossantos/)
* Angelica Melo .[GitHub].(https://github.com/AngelMelo12) / .[Linkedin].(https://www.linkedin.com/in/angellmelo/)
* Clareana Ribeiro .[GitHub].(https://github.com/ClareanaRibeiro) / .[Linkedin].(https://www.linkedin.com/in/clareanaribeiro/)



