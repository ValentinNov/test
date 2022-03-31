$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.section-three__link').on('click', function () {
    $('.section-three__inner').toggleClass('section-three__inner--active');
  });
  

});