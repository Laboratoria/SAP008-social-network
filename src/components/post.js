export default (post) => {
  console.log(post);
  const container = document.createElement('div');
  const template = post.map(pt => {
    return `
    <section id="section-postado" class="section-postado">
      <div class="postado">
        <form class="form-postado">
          <h4>Enviado por: ${pt.name}</h4>
          <p>${pt.text}</p><br>
          </form>
      </div>
     </section>
`;
  }).join("");

  container.innerHTML = template;
  const postArea = document.getElementById('posts');

  postArea.innerHTML = '';
  postArea.appendChild(container);
};
