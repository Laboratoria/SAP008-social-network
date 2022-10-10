import { addDocFirestore } from './../../lib/firestore.js';


export default () => {
  const container = document.createElement('div');
  container.classList.add('wrapper-feed');
  const template = `      
    <header>Picsfem</header>
    <label>
    <input id="post" class="post-container">
    </label>    
    
    `;

  container.innerHTML = template;

  const inputPost = container.querySelector("#post");

  inputPost.addEventListener("change", () => {
    const textPost = inputPost.value;
    addDocFirestore(textPost);
    //querySnapshot(textPost);

  });

  
  return container;
};