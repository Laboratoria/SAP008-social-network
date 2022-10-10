# Criando uma Rede Social

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Histórias do usuário](#3-historia-do-usuario)
* [4. Interface do usuário](#4-interface-do-usuario)
* [5. Estrutura lógica](#5-estrutura-logica)
* [6. Code Reviews](#6-code-review)
* [7. Entrega](#7-entrega)
* [8. Guias, dicas e leituras
  complementares](#8-guias-dicas-e-leituras-complementares)

***

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


### Estrutura lógica

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox em CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#pt-br)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

- [ ] **Routing (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando o histórico do navegador - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)
</p></details>

### JavaScript

- [ ] **Arrays (arranjos)**

  <details><summary>Links</summary><p>

  * [Arranjos](https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org//pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/05-objects/01-objects)
</p></details>

- [ ] **Diferenciar entre tipos de dados primitivos e não primitivos**

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/02-loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Testes assíncronos**

  <details><summary>Links</summary><p>

  * [Testando Código Assíncrono - Documentação oficial](https://jestjs.io/docs/pt-BR/asynchronous)
</p></details>

- [ ] **Uso de mocks e espiões**

  <details><summary>Links</summary><p>

  * [Simulações Manuais - Documentação oficial](https://jestjs.io/docs/pt-BR/manual-mocks)
</p></details>

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

- [ ] **Diferença entre expressões (expressions) e declarações (statements)**

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Função Callback - MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
</p></details>

- [ ] **Promessas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (em inglês)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

### Controle de Versões (Git e GitHub)

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**

### user-centricity

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### product-design

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### research

- [ ] **Planejar e executar testes de usabilidade**

### Firebase

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

## 4. Considerações gerais

* Este projeto deve ser desenvolvido em trios.

* A lógica do projeto deve estar implementada completamente em JavaScript
  (ES6+), HTML e CSS :smiley:. Para este projeto **não está permitido** o uso de
  _frameworks_ ou bibliotecas de CSS e JS.

* A divisão e organização do trabalho deve permitir, sem exceção, que **cada
  integrante** da equipe pratique a aprendizagem de tudo que está envolvido em
  **cada história**. _Não dividam o trabalho como em uma fábrica._

* Está avançando em seus projetos com alguma fluidez e sem grandes problemas?
  Seja generosa com suas parceiras, deixe-as aprender e praticar sem restrições,
  mesmo que demore um pouco mais. Aproveite para _mentorá-las_, para fazer _pair
  programming_. Uma das melhores formas de aprender é explicar verbalmente.

* Está sentindo dificuldade e para você é mais difícil de avançar? Não fique com
  as partes "fáceis" do projeto. Converse, negocie, busque sua oportunidade de
  praticar e aprender o que é mais difícil para você.

* Vocês apenas poderão trabalhar em uma história por vez. Não avancem para a
  próxima sem completar a anterior. As histórias apenas são concluídas quando se
  completam **todos** os critérios de aceitação + **toda** sua definição de
  pronto.

Para começar, você precisará criar um _fork_ e _clone_ deste repositório.

## 5. Critérios de aceitação mínimos do projeto

### 5.1 Boilerplate

Este projeto não inclui um _boilerplate_, portanto você terá que definir a
estrutura de pastas e escrever seus próprios testes unitários (_tests_). Para
isso, você pode guiar-se por meio de projetos anteriores.

### 5.2 Definição do produto

No `README.md`, conte-nos brevemente como você mapeou as necessidades dos seus
usuários e como você chegou à definição final do seu produto. É importante que
detalhe:

* Quem são os principais usuários do produto.
* Qual problema o produto resolve/para que ele serve para esses usuários.

### 5.3 Histórias de usuário

Depois de entender as necessidades de seus usuários, escreva as Histórias de
Usuário. Elas representam tudo o que ele precisa fazer/ver na Rede Social. Cada
uma de suas histórias de usuário deve possuir:

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

#### Criação e login de conta de usuário

* _Login_ com Firebase:
  - Para o _login_ e postagens na timeline, você pode usar o
    [Firebase](https://firebase.google.com/products/database/)
  - O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de
    e-mail e senha e também com uma conta do Google.
* Validações:
  - Somente usuários com contas válidas têm acesso permitido.
  - Não haver usuários repetidos.
  - A conta do usuário deve ser um email válido.
  - O que o usuário digita no campo de senha (_input_) deve ser secreto.
* Comportamento:
  - Quando o formulário de registro ou login é enviado, ele deve ser validado.
  - Se houver erros, mensagens descritivas devem ser exibidas para ajudar o
    usuário.

#### Timeline/linha do tempo

* Validações:
  - Ao publicar, deve ser validado se há conteúdo no _input_.
* Comportamento:
  - Ao recarregar o aplicativo, é necessário verificar se o usuário está
    _logado_ antes de exibir o conteúdo,
  - Conseguir publicar um _post_.
  - Poder dar e remover _likes_ em uma publicação. Máximo de um por usuário.
  - Visualizar contagem de _likes_.
  - Poder excluir uma postagem específica.
  - Solicitar confirmação antes de excluir um _post_.
  - Ao clicar em editar um _post_, você deve alterar o texto para um _input_ que
    permite editar o texto e salvar as alterações.
  - Ao salvar as alterações, você deve voltar ao texto normal, mas com a
    informação editada.
  - Ao recarregar a página, poder ver os textos editados.

### 5.7 Considerações técnicas sobre front-end

* Separar a manipulação do DOM da lógica (separação de responsabilidades).
* Ter várias telas. Para isso, seu aplicativo deve ser um [Single Page
  Application
  (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
* Alterar e persistir dados. Os dados que você adiciona ou modifica devem
  persistir por todo o aplicativo. Recomendamos que você use o
  [Firebase](https://firebase.google.com/) para isso também.

#### Testes unitários

* Lembre-se de que não há _setup_ de **testes** definido, isso dependerá da
  estrutura do seu projeto. Você não deve esquecer de pensar sobre os testes.
  Eles podem ajudar a definir a estrutura e sua lógica.

* Os testes de unidade devem cobrir no mínimo 70% de _statements_, _functions_,
  _lines_ e _branches_.

### 5.8 Considerações técnicas UX

* Faça pelo menos 2 entrevistas com os usuários.
* Faça um protótipo de baixa fidelidade.
* Verifique se a implementação do código segue as diretrizes do protótipo.
* Faça sessões de teste de usabilidade com o produto em HTML.

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

***

## 8. Guias, dicas e leituras complementares

### Mobile first

O conceito de [_mobile
first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) faz
referência a um processo de desenho e desenvolvimento que parte de como se vê e
como funciona uma aplicação primeiro em um dispositivo móvel e mais adiante se
analisa como adaptar a aplicação à telas progressivamente maiores. Esta é uma
contraposição ao modelo tradicional, no qual primeiro se desenha os websites (ou
webapps) para desktops e depois os adaptam para telas menores.

A motivação aqui é se assegurar que desde o começo sejam desenhadas telas
_responsivas_. Dessa forma, começamos com a aparência e o comportamento do
aplicativo em uma tela e ambiente móvel.

### Múltiplas telas

Em projetos anteriores, nossas aplicações eram compostas de apenas uma tela
_principal_ (uma só _página_). Neste projeto, precisaremos dividir nossa
interface em várias _views_ ou _pages_ e oferecer uma maneira de navegar entre
essas telas. Esse problema pode ser resolvido de várias maneiras: com arquivos
HTML independentes (cada um com seu próprio URL) e links tradicionais; mantendo
na memória e renderizando condicionalmente (sem atualizar a página);
[manipulando o histórico do
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_na_gador)
com
[`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
Neste projeto, convidamos você a explorar opções e decidir sobre uma opção de
implementação.

### Gravação de dados

Nos projetos anteriores, consumimos dados, mas ainda não tínhamos escrito dados
(salvar alterações, criar dados, excluir, etc). Neste projeto, você precisará
criar (salvar) novos dados, além de ler, atualizar e modificar os dados
existentes. Esses dados podem ser salvos remotamente usando o
[Firebase](https://firebase.google.com/).

Outras:

* [Mobile
  First](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/)
* [Mobile First Is NOT Mobile Only - Nielsen Norman
  Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
* [Flexbox - CSS
  Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Módulos:
  Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
* [Módulos:
  Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
