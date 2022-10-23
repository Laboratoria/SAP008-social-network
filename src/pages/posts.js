import { creatingPost, gettingPost } from "../firebase-services/firestore.js";

export function postFunction() {
  const postsCreating = document.createElement("div");

  gettingPost().then((docs) => {
    for (const post of docs.docs) {
      const postData = post.data();
      const posts = document.createElement("div");
      posts.classList.add("post-style");

      const templatePosts = `
      <div class="eachPost">
        <div class="infos-user">
          <img class="img-user-log" src=${postData.photoURL}>
          <h3 class="name-user-log">${
            postData.displayName
          }</h3>
          <time class="date-hour">${new Date().toLocaleString("pt-br")}</time>
        </div>
        <div class="post-infos">
          <p class="quote-posted">${postData.post}</p>
          <p class="author-name-log">${postData.author}, ${postData.book}</p>      
        </div>
        <div class="line">
        </div>
        <div class="user-reactions">
        <img clas="liked" src="${postData.likes}">
        <img class="read" src="${postData.read}">
        <img class="want-read" src="${postData.toRead}">
        </div>

    `;
      posts.innerHTML = templatePosts;
      postsCreating.appendChild(posts);
    }
  });
  return postsCreating;
}
