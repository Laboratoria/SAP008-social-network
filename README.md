# #03 Projeto Laboratória - Social Network

## Prefácio
* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Organização de trabalho](#2-organização-de-trabalho)
* [3. Definição do produto - BatePrato](#3-definição-do-produto---bateprato)
* [4. Aplicação](#4-aplicação)
* [5. Repositório](#5-repositório)
* [6. Deploy](#6-deploy)
* [7. Checklist](#7-checklist)
* [8. Desenvolvedoras](#8-desenvolvedoras)

## 1. Resumo do projeto

Sabemos que há redes sociais de todo tipo para todos os tipos de interesse, as redes invadiram nossas vidas. Nós as amamos ou odiamos, e muitas pessoas não conseguem viver sem elas.
Para além dos objetivos e características principais já conhecidas das redes como conectar-se com amigos, familiares, clientes e pessoas que compartilham interesses em comum, hoje também são muitos utilizadas como ferramenta profissional dentro dos mais variados setores e é um dos principais meios de comunicação, útil para buscar informações e já tem um impacto direto nas relações modernas.
Este projeto é sobre construir uma rede social, utilizando a metodologia Single-page Application (SPA), responsiva (com mais de uma tela/ página) na qual seja possível ler e escrever dados.

Neste projeto, foi criada a terceira aplicação web do bootcamp Laboratória , de interface intuitiva, acessível, possui contraste, botões principais em evidência e com visual limpo para facilitar a leitura. Nela, os cadastrados na rede podem publicar a respeito de suas experiências relacionadas ao tema (Críticas gastronômicas), visualizar e interagir através desta circulação de informações entre os usuários, permite criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar likes em publicações. 

### Críticas gastronômicas
Uma rede social voltada às experiências em bares e restaurantes, na qual é possível compartilhar críticas, dicas e recomendações gastronômicas, além de outros aspectos vivenciados nestes locais, como atendimento, ambiente, valores, entre outros.

## 2. Organização de trabalho

## 3. Definição do produto - BatePrato
Com base em uma [pesquisa](https://docs.google.com/forms/d/1GojhH3_rROENVXIHXOlSyFf4zn8yAIgSSKrj4rNo9I0/viewform?edit_requested=true) que conta com 21 respostas, informadas por intermédio do Google Form, 95,2% dos participantes dizem ter o costume de recomendar restaurantes que frequentam a amigos e familiares. Dentre os participantes, 66,7% levam em consideração a opnião de terceiros ao escolher um restaurante ou bar para conhecer, enquanto 23,8% considera tal opinião muito importante, sendo o fator decisivo na escolha de um estabelecimento. A partir disso, conclui-se que as informações mais interessantes para acessar e satisfazer esse público são:

- o nome do estabelecimento;
- o endereço do estabelecimento;
- a avaliação do estabelecimento;
- a nota atribuída ao estabelecimento;
- o nome do usuário que dá a crítica.

Tais informações podem ser entregues ao usuário por intermédio da aplicação web BatePrato, que conta com timeline na qual é possível escrever uma crítica a um restaurante ou bar e que cujo conteúdo é passível de receber likes.

### História do usuário
Foram definidas 02 histórias de usuário para este projeto:
  01. A fim de receber dicas de bons restaurantes (e restaurantes para evitar), como um novo morador de São Paulo, quero poder ler e curtir o que os clientes andam dizendo sobre os estabelecimentos aos quais vão.
  02. Como uma influenciadora, eu posso dar meu review e, se necessário, editá-lo, acerca dos pratos que comer nos restaurantes que visitar para que outras pessoas possam conhecer novos estabelecimentos e experiências gastronômicas.

### Definição de pronto
A fim de definir a aplicação, a partir das histórias de usuário, obtem-se a definição de pronto referente a cada uma delas
01. Para que esta história seja atendida, é necessário:
  - página sign in
  - página log in
  - timeline com posts de outros usuários
  - button de like (1x) nos posts

02. Para que esta história seja atendida, é necessário:
  - página sign in
  - página log in
  - input texto para escrever post
  - contagem de likes nos posts
  - button de edição que abre input de texto

## 4. Aplicação 
Neste projeto foi primordialmente idealizada uma timeline contendo críticas de usuários da rede social BatePrato que, para melhor estarem acomodadas na aplicação, possuem "Ler mais" como um _call to action_ para acessar a crítica integralmente. Na mesma página, cada crítica tem a possibilidade de ser "curtida", clicando no coração ao lado. Além disso, a pessoa que escreve a crítica pode atribuir uma nota, que fica visível logo acima do ícone de _likes_ na publicação. Caso o usuário deseje editar seu post, é possível clicar no ícone de lápis, abaixo do ícone _likes_; mas, se desejar excluir a publicação, basta clicar no ícone de lixeira. 
Com os ícones de `"menu"`, `"home"` e `"likes"`, o usuário pode fazer _log out_, acessar a página inicial e acessar as críticas curtidas, respectivamente. Já na parte inferior, com os ícones de `soma`, a `logo` da rede social BatePrato e um ícone de `seta para cima`, o usuário pode criar um novo post, acessar a página inicial pela logo e, caso role a página, poder voltar ao topo com o ícone de seta. 
A primeira tela vista é a de convite para cadastrar-se. Se a pessoa já tiver conta, pode clicar em "Entrar" e acessar com seu e-mail e senha. Se, porém, não for cadastrado, pode escolher preencher um formulário com nome, e-mail, senha e confirmação de senha. Também é possível acessar a conta com o Google Accounts.
As tipografias escolhidas foram "Roboto Condensed", para títulos e textos pequenos e "Roboto Slab", para textos extensos, por possuir serifa e facilitar a leitura.

### Prototipagem
O processo de prototipagem foi dividido em duas etapas, a partir do conceito de _mobile first_:
  - Baixa fidelidade - sketches
  [mobile_low_prototype]!(https://github.com/nunesisabela/SAP008-social-network/blob/main/external/prototypes_social_network/low_prototype_mobile.jpeg?raw=true)
  - Alta fidelidade - ferramenta Figma
  [mobile_high_prototype]!(https://github.com/nunesisabela/SAP008-social-network/blob/main/external/prototypes_social_network/mobile_prototype.gif?raw=true)
  [web_high_prototype]!(https://github.com/nunesisabela/SAP008-social-network/blob/main/external/prototypes_social_network/web_prototype.gif?raw=true)
### Paleta de cores
A paleta de cores foi feita por intermédio da ferramenta [Adobe Color](https://color.adobe.com/pt/create/color-wheel) e resultou no seguinte:
[paleta_de_cores]!(https://github.com/nunesisabela/SAP008-social-network/blob/main/external/paleta_social_network.jpeg)

## 5. Repositório
O repositório é o espaço digital que armazena um código e as versões que podem advir dele. Neste caso, o repositório está hospedado no GitHub, onde é possível criar um perfil - um espaço próprio do usuário para guardar códigos. O ideal é ter um repositório por projeto. Para tanto, é possível criar um repositório e nomeá-lo ou forkar um repositório já existente (de outro perfil) para fazer as próprias mudanças sem alterar o arquivo original. No caso de um novo repositório criado, é importante acessar a pasta do computador onde o repositório está por meio do terminal e usar o comando `git init` (no caso de GitBash, terminal do Linux, terminal do Ubuntu). Para este repositório cujo README vos fala, isso não é necessário.

### Fork
`Fork` é a ação de bifurcar um repositório, ou seja, é como se o repositório original fosse um bonde com passageiros dentro (códigos) que trilha um caminho que, em dado momento, é bifurcado (fork) e agora segue dois caminhos distintos, porém com um passado em comum. Da mesma forma, o repositório disponibilizado por um Usuário A possui arquivos e códigos que, quando "forkados" por outro Usuário B, seguem o caminho que o Usuário B determinar sem afetar o repositório original, disponibilizado pelo Usuário A. Para acessar este repositório, cujo README vos fala, é preciso forká-lo. Para isso, basta clicar em `Fork`, no canto direito superior da página deste repositório no GitHub.

### Clone
`Clone` é a ação de clonar o repositório forkado para a máquina na qual o(s) código(s) é(são) alterado(s). Clonar o repositório forkado permite que o computador acesse todos os arquivos dentro do repositório clonado. Para clonar o repositório forkado, que, agora, pertence ao usuário que forkou, basta:
- Clicar no botão `Code` **na página do repositório do usuário que forkou**;
- Copiar a url-do-repositório ali disponibilizado; 
- Abrir o Terminal;
- Acessar a pasta para onde deseja clonar o repositório;
- Rodar o comando `git clone <url-do-repositório>`.

### Fork and Knife
No caso deste projeto, que foi realizado em dupla, o `fork` foi feito por apenas uma das partes da dupla. Após somente a integrante Isabela forkar, ela e a integrante Érica clonaram o mesmo [repositório](https://github.com/nunesisabela/SAP008-social-network) para suas respectivas máquinas. A integrante Érica não precisou forkar o [repositório](https://github.com/Laboratoria/SAP008-social-network) advindo da página da Laboratória no GitHub.

## 6. Deploy
`Deploy` é a ação de colocar o código no ar. Quando um código/aplicação é "deployado", significa que ele já está disponível para ser acessado como qualquer outro site, por intermédio da URL colocada na barra de endereço do navegador. Para "deployar", basta:
- Acessar a pasta com os arquivos a serem adicionados no Terminal;
- Rodar o comando `npm run deploy` no Terminal.

## 7. Checklist objetivos de aprendizagem alcançados
* [✓]
* [✓]
* [✓]
## 8. Desenvolvedoras
Projeto desenvolvido por Érica Lopes e Isabela Nunes - Laboratória SAP-008 - 2022
<table>
  <tr>
    <td alig="center">
      <a href="https://github.com/blericalopes">
        <img align="center" src="https://avatars.githubusercontent.com/u/108770517?v=4" width="100px" alt="Foto de Érica Lopes"/><br>
        <sub>
          <b>Érica Lopes</b>
        </sub>
      </a>
    </td>
    <td alig="center">
      <a href="https://github.com/nunesisabela">
        <img align="center" src="https://avatars.githubusercontent.com/u/107049807?v=4" width="100px" alt="Foto de Isabela Nunes"/><br>
        <sub>
          <b>Isabela Nunes</b>
        </sub>
      </a>
    </td>
  </tr>
</table>