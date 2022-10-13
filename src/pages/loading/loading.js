export default () => {
  const containerLoading = document.createElement("div");

  const loading = `
    <div id="allReady"><h1 class="title-loading">tudo pronto...</h1></div>
    <div id="loading"></div>
  `;

  containerLoading.innerHTML = loading;

  return containerLoading;
};

$(document).ready(function(){

  //Esconde all ready
  $(window).load(function(){
      $('#allReady').fadeOut(2000);//2000 é a duração do efeito (2 seg)
  });

});
