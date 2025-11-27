var main = document.querySelector('.carousel-main');
var nav = document.querySelector('.carousel-nav');

var flktyMain = new Flickity(main, {
  wrapAround: true,
  pageDots: true
});

var flktyNav = new Flickity(nav, {
  asNavFor: main,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true  // ADD THIS
});
