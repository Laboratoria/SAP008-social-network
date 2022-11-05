import post from '../components/post.js';
import { createPost, getPosts } from '../lib/firestore.js';
import { signOutUser } from '../lib/index.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <header class="nav-feed">
        <div class="div-menu">
            <button id="btn-menu"><img src="/img/menu.png" class="img-menu"</button>
        </div>
            <form class="conj-pesquisar">
                <input type="text" id="caixa-pesquisar" placeholder="Pesquisar">
                <button type="submit" id="submit-pesquisar"><img src="/img/pesquisar.png" alt="botão de pesquisa"></button>
            </form>
            <button type="button" id="logout">sair</button>
    </header>
    <main class="feed-desktop" id="feed">
        <section  id="section-pages">
            <ul>
                <li class="btn-pages">
                    <a href="/#perfil" class="link">Perfil</a>
                </li>
                <li class="btn-pages">
                    <a href="/#momentoCookie" class="link">Momento Cookie</a>
                </li>
                <li class="btn-pages">
                    <a href="/#bemEstar" class="link">Bem Estar</a>
                </li>
            </ul>
        </section>
        <section id="section-posts">
            <div class="criar-posts">
                <form class="form-post">
                    <input type="text" placeholder="Digite..." class="caixa-de-texto" id="caixa-de-post">
                    <button type="submit" id="submit-post">></button>
                </form>
            </div>
            <div class="posts" id="posts">

            </div>
        </section>
    </main>
            `;
  container.innerHTML = template;

  const caixaPost = container.querySelector('#caixa-de-post');
  const botaoPost = container.querySelector('#submit-post');
  const botaoLogout = container.querySelector('#logout');
  
  botaoPost.addEventListener('click', async (e) => {
    e.preventDefault();
    await createPost(caixaPost.value);
    const posts = await getPosts()
    post(posts);
    console.log(posts);
  });

  botaoLogout.addEventListener('click', async() =>{
    await signOutUser()
    .then(() => {
      window.location.hash = '#login';
    })
    .catch((error) => {
      msgErro.innerHTML= 'erro ao sair';
    });
});
  const menu = container.querySelector('#btn-menu');

  menu.addEventListener('click', () => {
    const feed = container.querySelector('#feed');
    feed.classList.toggle('active');
  });

  return container;
};
