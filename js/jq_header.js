'use strict';

const menu=$('span.menu');

menu.on('click', function(e){
  $('.short-nav').css("right", "0")
})
$('span.out').on('click', function(e){
  $('.short-nav').css("right", "-800vw")

})