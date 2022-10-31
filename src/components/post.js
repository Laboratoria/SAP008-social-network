
export default (post) => {
  console.log(post);
  const container = document.createElement('div');
  const template = `
    <div class="post">
        <h4>${post.name}</h4>
        <p>${post.text}</p>
    </div>
`;
  container.innerHTML = template;
  const postArea = document.getElementById('posts');

  postArea.innerHTML = '';
  postArea.appendChild(container);
};
