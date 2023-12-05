var logoSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Purdue_Boilermakers_primary_mark_color_on-black.svg/2560px-Purdue_Boilermakers_primary_mark_color_on-black.svg.png";
  

var test = document.querySelector('d2l-navigation-main-header');
  var test2 = test.querySelector('.d2l-navigation-header-left');
  var test3 = test2.querySelector('.d2l-navigation-s-header-logo-area');
  var test4 = test3.querySelector('d2l-navigation-link-image');
  let logo = new Image();
  logo.src = logoSrc;
  logo.classList.add('logo');
  if (test4 != null)
    test4.remove();
  //test3.appendChild(logo);
  test3.insertBefore(logo, test3.querySelector('d2l-navigation-separator').nextSibling);

