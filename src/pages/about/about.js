export default () => {
  const sectionAbout = document.createElement('div');
  const contentAbout = `
    <div>
      <header>
        <img src="img/logo.png" class="logoAbout" alt="Logo Wanderlust">
        <button class="Entrar" type="submit">ENTRAR</button>
      </header>
      <main>
        <p>O Wanderlust chega para revolucionar o modo que as mulheres viajam, 
        fazendo com que mais e mais mulheres tenham a possibilidade de conhecer novos lugares de um modo econômico.</p>
        <img src="" class="fotoHost" alt="hospedagem">
        <img src="" class="fotoHost" alt="hospedagem">
        <p>Este local é para que mulheres que tem um sofá, 
        uma cama a mais em sua casa possam oferecer, para mulheres de outros locais poderem se hospedar.
        </p>
        <img src="" class="fotoHost" alt="hospedagem">
        <img src="" class="fotoHost" alt="hospedagem">
        <p>
        Tornando assim a experiência de troca de experiências culturais mais segura e enriquecedora para ambas.
        </p> 
        <img src="" class="fotoHost" alt="hospedagem">
        <p>&copy;2022 Criado e Desenvolvido por Aghatha, Andresa e Ariane para o Bootcamp SAP008 Laboratoria
        <img src="img/logoLab" class="logoAbout" alt="Logo Wanderlust"></p>
      </main>
    </div>`;
  sectionAbout.innerHTML = contentAbout;
  return sectionAbout;
};
