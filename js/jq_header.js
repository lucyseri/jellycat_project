'use strict';

const shortMenu=$('span.menu');
const shortGnb=$('.short-gnb');
const shortOut=$('span.out');

const shortGnbLi=$('.short-gnb>ul>li');
const shortGnbSubUl=$('.short-gnb>ul>li>ul.sub');

shortMenu.on('click', function(e){
  shortGnb.css("right","0")
})
shortOut.on('click', function(e){
  shortGnb.css("right","-80vw")
})

shortGnbLi.on('click', function(e){
  e.stopPropagation();

  $(this).find('ul.sub').slideToggle()
})