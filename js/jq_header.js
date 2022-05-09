'use strict';

const menu=$('span.menu');

menu.on('click', function(e){
  $('.short-nav').css("right", "0")
})
$('span.out').on('click', function(e){
  $('.short-nav').css("right", "-800vw")

})

const shortNavLi=$('.short-nav>ul>li');
const shortNavSubUl=$('.short-nav>ul>li>ul.sub');

shortNavLi.on('click', function(e){
  e.stopPropagation();

  $(this).find('ul.sub').slideToggle()
})