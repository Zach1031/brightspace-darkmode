var checkExist = setInterval(function() {

   //if (document.getElementsByClassName(".d2l-inline")) {
  console.log(document.getElementsByClassName('.d2l-navigation-link-image-container'));

    if (document.querySelector('img[src="/d2l/lp/navbars/6824/theme/viewimage/270925/view?v=20.23.11.19491"]')) {
    var el1 = document.getElementsByClassName(".d2l-inline");
    console.log(el1);
    
    var el2 = document.querySelector('img[src="/d2l/lp/navbars/6824/theme/viewimage/270925/view?v=20.23.11.19491"]');

    console.log("El2", el2);
    


   }
}, 100);
