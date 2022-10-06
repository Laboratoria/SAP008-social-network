import { addDocFirestore } from './../../lib/firestore.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('wrapper-login');
  const template = `    
    <div>
    <input id="post">
    </input>
    </div>
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