import post from '../components/post.js';
import { createPost, getPosts,} from '../lib/firestore.js';
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
            <button type="button" id="logout" class="botaoLogout">sair</button>
    </header>
    <main class="feed-desktop" id="feed">
        <section  id="section-pages">
            <ul>
                <li class="btn-pages">
                    <a href="/#feed" class="link">Home</a>
                </li>
                <li class="btn-pages">
                    <a href="/#busqueAjuda" class="link">Busque Ajuda</a>
                </li>
            </ul>
        </section>
        <section id="section-posts">
            <div class="criar-posts">
                <form class="form-post">
                    <input type="text" placeholder="Digite..." class="caixa-de-texto" id="caixa-de-post">
                    <button type="submit" id="submit-post"><img src="img/seta-direita.png" alt="postar" class="seta-postar"></button>
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
  async function listPosts(){
    const posts = await getPosts()
    post(posts);
  }
  listPosts();

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
