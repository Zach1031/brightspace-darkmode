var logoSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Purdue_Boilermakers_primary_mark_color_on-black.svg/2560px-Purdue_Boilermakers_primary_mark_color_on-black.svg.png";


var logoParent = document.querySelector('.d2l-navigation-s-header-logo-area');
var oldLogo = logoParent.querySelector('d2l-navigation-link-image');

if (!logoParent.querySelector('img')) {
  let logo = new Image();
  logo.src = logoSrc;
  logo.classList.add('logo');
  logoParent.insertBefore(logo, logoParent.querySelector('d2l-navigation-separator').nextSibling);

  if (oldLogo != null) {
    oldLogo.remove();
  }

}

