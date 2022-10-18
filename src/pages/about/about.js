export default () => {
  const sectionAbout = document.createElement('div');
  const contentAbout = `
    <div>
      <header class="headerBack">
        <img src="img/logo.png" class="logoWand" alt="Logo Wanderlust">
        <a href="index.html" class="butnBack">voltar</a>
      </header>
      <main>
        <p class="texto1">
        O Wanderlust chega para revolucionar o modo que as mulheres viajam, fazendo com que mais e mais mulheres tenham a possibilidade de conhecer novos lugares de um modo econômico.
        </p>
        <img src="img/casa1.jpg" class="foto1" alt="hospedagem">
        <img src="img/casa2.png" class="foto2" alt="hospedagem">
        <p class="texto2">
        Este local é para que mulheres que tem um sofá, uma cama a mais em sua casa possam oferecer, para mulheres de outros locais poderem se hospedar.
        </p>
        <img src="img/casa3.jpg" class="foto3" alt="hospedagem">
        <img src="img/mulheres1.jpg" class="foto4" alt="hospedagem">
        <p class="texto3">
        Tornando assim a experiência de troca de experiências culturais mais segura e enriquecedora para ambas.
        </p> 
        <img src="img/casa4.jpg" class="foto5" alt="hospedagem">
      </main>
      <footer>
        <p class="footer">&copy;2022 Criado e desenvolvido por <a href="https://www.linkedin.com/in/andresa-vieira/" target="tela">Andresa </a>,<a href="https://www.linkedin.com/in/arianecmachado/" target="tela">Ariane </a> e <a href="https://www.linkedin.com/in/aghatha-silva/" target="tela"> Aghatha</a></p>
        <br>
        <img src="img/logoLab.png" class="logoLab" alt="Logo Wanderlust"></p>
      </footer>
    </div>`;
  sectionAbout.innerHTML = contentAbout;
  return sectionAbout;
};
