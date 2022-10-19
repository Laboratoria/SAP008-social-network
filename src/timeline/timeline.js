import {
  signOut, getAllPosts, getUserId, editPost, // getUserId foi criada para recolher o UID do usuário
} from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const userId = getUserId();
  /* assim que a pagina é carregada, eu pego o UID do usuário
  para validar se ele é o dono do post na hora de mapear os
  templates dos posts na funtion showPosts() */
  const container = document.createElement('div');
  const template = `  
        <div class="container-timeline">
            <div class="container-logo">
                <img class="logo-img" src="./images/logo_02_blue_081E26.png"alt="logo do título">
            </div>
            <nav class="navbar">
                    <ul class="navbar-list"> 
                        <li class="navbar-item-button">
                            <button type="button" id="navbar-button">BOTÃO</button>
                        </li>
                        <li class="navbar-item">
                            <a href='#post'>Publicar Post</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#aboutus'>Sobre Nós</a>
                        </li>
                        
                        <li class="navbar-item" id="logout">
                            <a>Sair</a>
                        </li>
                    </ul>
                </nav>
               <section id="show-timeline"></section>
        </div>     
    `;

  container.innerHTML = template;
  const menu = container.querySelector('#navbar-button');

  const showPosts = async () => {
    const groupArr = await getAllPosts();
    const postsTemplate = groupArr.map((post) => {
      /* dentro deste map, foi aberto as chaves `{}`. Isso foi necessário
      pois agora há a necessidade de validar algumas informações antes
      de retornar o template */

      /* inicialmente, não haverá botáo de editar escrito no
      template (por isso está uma string vazia ''), pois ele
      só irá aparecer no template, se o usuário logado for o autor deste post.
      foi criado um let pois ele pode mudar de valor, uma const
      não pode ter o seu valor alterado */
      let editBtnTemplate = '';

      /* aqui está sendo validado se o usuário logado é o
      autor do post atual dentro do map */
      if (userId === post.author) {
        /* se o id de usuário for o mesmo do autor do post,
        aí sim, o meu template de botão será escrito na variavel */

        /* as propriedades data-author-id e data-post-id são padrões de
        propriedades customizadas, elas foram necessárias pois quando o
        usuário clicar no botão de editar, eu consigo recolher os valores
        do id do autor, e também do id do post (isso será necessário para
        editar o post no firestore)
        Para entender melhor, acesse https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes
        https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-* */
        editBtnTemplate = `<div class="btns-post-container">
          <button class="btn-edit" id="btn-edit" data-author-id=${post.author} data-post-id=${post.id}>Editar</button>
          <button class="btn-edit" id="btn-save" data-save=${post.id}>Salvar</button>
          <button class="btn-edit" id="btn-delete" data-author-id=${post.author} data-delete=${post.id}>Excluir</button>
        </div>`;
      }

      /* coloquei o template dentro de uma constante, pois
      o map precisa de um retorno obrigatório, por isso no final
      deste map, está escrcito return postTemplate */
      const postTemplate = `
            <div class="post">
            <section class="box-post-timeline">
              <p id="user-name">${post.name}</p>
              <p id="artist-name">${post.artist}</p>
              <p id="show-location">${post.location}</p>
              <p id="show-date">${post.date}</p>
              <p id="text-post">${post.text}</p>
              ${editBtnTemplate} 
            </section>
        </div>
        </br>
      `;
      /* na linha 85 eu insiro o meu botão de editar, ele pode tanto
      estar vazio, quanto escrito (se passar na validação) */
      return postTemplate;
    }).join('');
    container.querySelector('#show-timeline').innerHTML += postsTemplate;

    /* este querySelectorAll buscará todos os botões de edição que
    estão escritos na nossa timeline, para cada um dos botões (uso do forEach),
    será adicionado um eventlistener de click, onde iremos realmente
    começar a editar o post.
    lembrando que estes botões só aparecerão se o usuário logado
    for o dono do post */
    container.querySelectorAll('#btn-edit').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        /* aqui, estou recolhendo o ID do post, para enviar esta
        informação pro firestore. o e.currentTarget significa
        o botão que foi clickado, o 'e' é o parâmetro do eventListener.
        O dataset.postId é parte do padrão que foi descrito na linha 66 e 67. */
        const postId = e.currentTarget.dataset.postId;

        /* para entender o atributo contenteditable, ver a doc
        https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/contentEditable */
        const artist = container.querySelector('#artist-name');
        artist.setAttribute('contenteditable', 'true');

        const showLocation = container.querySelector('#show-location');
        showLocation.setAttribute('contenteditable', 'true');

        const showDate = container.querySelector('#show-date');
        showDate.setAttribute('contenteditable', 'true');

        const textPost = container.querySelector('#text-post');
        textPost.setAttribute('contenteditable', 'true');

        /* inseri um eventlistener no botao de Salvar, lembrando
        que este eventListener só poderá ser ativado após o
        usuário ter clicado no botão Editar, isso previne que
        o botão Salvar funcione para qualquer outro post exceto
        o que está sendo editado
        Abaixo, também estou removendo atributo contenteditable, já
        que não há mais necessidade de editar as informações após salvar.
        Eh passado para o editPost() os valores innerText, pois é assim
        que se acessa o conteúdo de texto dentro de uma tag <p> */
        const btnSave = container.querySelector(`[data-save="${postId}"]`);
        btnSave.addEventListener('click', (e2) => {
          e2.preventDefault();

          artist.removeAttribute('contenteditable');
          showLocation.removeAttribute('contenteditable');
          showDate.removeAttribute('contenteditable');
          textPost.removeAttribute('contenteditable');

          editPost(
            postId,
            artist.innerText,
            showLocation.innerText,
            showDate.innerText,
            textPost.innerText,
          );
        });
      });
    });
  };

  menu.addEventListener('click', () => {
    const items = container.querySelectorAll('.navbar-item');
    items.forEach((item) => {
      item.classList.toggle('hide');
    });
    console.log(items);
  });

  container.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    redirect('');
  });

  showPosts();

  return container;
};
