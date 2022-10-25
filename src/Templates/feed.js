import post from '../components/post.js';
import { createPost } from '../lib/firestore.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <header>
        <ul class="nav">
            <li class="btn-nav">
                <a href="/#Perfil" class="link">Perfil</a>
            </li>
            <li class="btn-nav">
                <a href="/#Momento Cookie" class="link">Momento Cookie</a>
            </li>
            <li class="btn-nav">
                <a href="/#Bem Estar" class="link">Bem Estar</a>
            </li>
        </ul>
    </header>
    <main>
        <div class="criar-posts">
            <form>
                <input type="text" placeholder="Digite" class="caixa-de-texto" id="caixa-de-post">
                <button type="submit" id="submit-post">></button>
            </form>
        </div>
        <div class="posts" id="posts">

        </div>
    </main>
            `;
  container.innerHTML = template;

  const caixaPost = container.querySelector('#caixa-de-post');
  const botaoPost = container.querySelector('#submit-post');

  botaoPost.addEventListener('click', async (e) =>{
    e.preventDefault();
    await createPost(caixaPost.value)
    post(caixaPost.value)
  });
  return container;
};

