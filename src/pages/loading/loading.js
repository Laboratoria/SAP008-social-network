export default () => {
  const containerLoading = document.createElement('div');

  const loading = `
    <div id='allReady'><h1 class='title-loading'>tudo pronto...</h1></div>
    <div id='loading'></div>
  `;

  containerLoading.innerHTML = loading;

  return containerLoading;
};

// eslint-disable-next-line no-undef
$(document).ready(() => {
  // Esconde all ready
  // eslint-disable-next-line no-undef
  $(window).load(() => {
    // eslint-disable-next-line no-undef
    $('#allReady').fadeOut(2000);// 2000 é a duração do efeito (2 seg)
  });
});
