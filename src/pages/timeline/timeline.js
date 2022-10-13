export default () => {
	const container = document.createElement('div');

	const template = `
				<figure>
            <img class='logo-timeline' src='./imagens/logo-mobile.png' alt='logo'>
        </figure>
				
				<header>
				<img src="" alt="" id="icon-logout">
				<button id="logout-btn"><img class="logout-icon" src='./imagens/logout.svg' alt="signout-icon"></button>
				<header>

        <form method='post' id="create-post" class='page-home'>
        <div id="icon-div">
        <img src="" alt="" class="" class="user-icon-post">
        </div>
      
        <textarea name="" id="text-post" cols="30" rows="10" style="resize:none" maxlength="200"></textarea>
				<input type='file'>iconeAqui</input>
       
        <button id="publish-btn">Publicar</button>
        </form>

   			<section id="feed-post"></section>
      	<div id="fade" class="none"></div>
      <div id="modal-delete" class="none">
        <span class="close-modal">X</span>
        <span>Tem certeza que deseja deletar?</span>
        <button class="btn-delete">Deletar</button>
      </div>
    `;

	container.innerHTML = template;
	return container;
};