'use strict';
//const shortGnbSubUl=$('.short-gnb>ul>li>ul.sub');
const menu = $('span.short-menu');
const out = $('span.short-out');
const shortGnb = $('.short-gnb');
const shortGnbLi = $('.short-gnb>ul>li');
menu.on('click', function(e){
  shortGnb.css("visibility", "visible");
  shortGnb.css("width", "80vw");
  shortGnb.css("right", "0");
})
out.on('click', function(e){
  shortGnb.css("visibility", "hidden");
  shortGnb.css("width", "0");
  shortGnb.css("right", "-80vw");
})
shortGnbLi.on('click', function(e){
  e.stopPropagation();
  $(this).find('ul.sub').slideToggle()
})