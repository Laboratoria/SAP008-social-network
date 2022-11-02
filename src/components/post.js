
export default (post) => {
  console.log(post);
  const container = document.createElement('div');
  const template = post.map(pt =>{
    return `
    <div class="post">
        <h4>Enviado por: ${pt.name}</h4>
        <p>${pt.text}</p><br>
    </div>
`;
 }).join("");
 
  container.innerHTML = template;
  const postArea = document.getElementById('posts');

  postArea.innerHTML = '';
  postArea.appendChild(container);
};
