export default () => {
    const container = document.createElement('div');
    const template = `<section>
    <nav class= "moblieTopIcons iconsContainer">
      <img class= "iconsSize" src= "https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/menu-icon.svg"/>
      <img class= "iconsSize" src= "https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/home-icon.svg"/>
      <img class= "iconsSize" src= "https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/heart-icon.svg"/>
    </nav>
    <hr class= "colorful"/>
    <div>
      <p class= "enterUser">Olá, ! Esta é a Página Inicial!</p>
    </div>
    <hr class= "colorful"/>
    <section class= "timelineContainer">
      <div class= "posts"></div>
    </section>  
      <hr class= "colorful"/>
      
        <nav class= "mobileFooterIcons iconsContainer">
          <img class= "iconsSize" src= "https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/plus-icon.svg"/>
          <img class= "iconsSize" src= "https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/heart-icon.svg"/>
          <img class= "iconsSize" src= "https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/chevron-up-icon.svg"/>
        </nav>
      
    </d>
  </section>`;
  container.innerHTML = template;
  return container;
}