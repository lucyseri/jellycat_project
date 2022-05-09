'use strict';

//section1
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');

const items=document.querySelector('.items');
const itemsUl=items.querySelector('ul');
const itemsUlLi=itemsUl.querySelectorAll('li');

const gap1 = galleryUlLi[3].offsetLeft - galleryUlLi[2].offsetLeft;

const arrBg = [];

for (let i = 0; i < galleryUlLi.length; i++) {
  arrBg.push(`url(img/b${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i]
}


let i = 0;

function autoGallery() {
  i++;

  const goto = (-i * gap1) + 'px';

  if (i > galleryUlLi.length - 2) {

    gallery.style.left = "-" + galleryUlLi[1].offsetLeft + "px";
    gallery.style.transition = 0 + "ms";

    i = 1;
    setTimeout(autoGallery, 0);

  } else {
    gallery.style.left = goto;
    gallery.style.transition = 300 + "ms";
  }

  
  itemsUlLi.forEach((el, idx)=>{
    let startNum=i-1;
    if(i==galleryUlLi.length-2){
      startNum=0;
    }
    if(startNum==idx){
      el.classList.add('on');
    }else{
      el.classList.remove('on');
    }
  })
  
}

let setIn = setInterval(autoGallery, 3000);

(() => {
  autoGallery()
})();


itemsUl.addEventListener('mouseover', itemEvent);
itemsUl.addEventListener('mouseout', itemEvent);
itemsUl.addEventListener('click', itemEvent);

function itemEvent(e){
  if(e.type=='mouseover'){
    itemsUlLi.forEach((el, idx)=>{
      if(el==e.target){
        clearInterval(setIn)
      }
    })
  }else if(e.type=='mouseout'){
    itemsUlLi.forEach((el, idx)=>{
      if(el==e.target){
        setIn=setInterval(autoGallery, 3000);
      }
    })
  }else if(e.type=='click'){
    itemsUlLi.forEach((el, idx)=>{
      if(el==e.target){
        el.classList.add('on')

          let idx2=idx+1;

          const goto = (-idx2 * gap1) + 'px';

          gallery.style.left = goto;
          gallery.style.transition = 300 + "ms";

        if(idx2>itemsUlLi.length-1){
          idx2=idx+1;
        }

          i=idx2;

      }else{
        el.classList.remove('on')
      }
    })
  }
};



const leftArrow = document.querySelector('span.left')
const rightArrow = document.querySelector('span.right')

const slideGallery = document.querySelector('.slide-gallery');
const slideGalleryUl = slideGallery.querySelector('ul');
const slideGalleryUlLi = slideGalleryUl.querySelectorAll('li');

const sec2Items = document.querySelector('.sec2-items');
const sec2ItemsUl = sec2Items.querySelector('ul');
const sec2ItemsUlLi = sec2ItemsUl.querySelectorAll('li');

function sec2Go(num){
  const sec2gap = slideGalleryUlLi[5].offsetLeft - slideGalleryUlLi[0].offsetLeft;
  const sec2goto = (-num * sec2gap) + 'px';
  slideGallery.style.left = sec2goto;
  slideGallery.style.transition = 'all 0.3s';
}

//sec2
let i2 = 0;

leftArrow.addEventListener('click', () => {
  if (i2 >= 2) i2 = -1;

  i2++;

  sec2Go(i2);

})
rightArrow.addEventListener('click', () => {
  if (i2 <= 0) i2 = 3;

  i2--;

  sec2Go(i2);

})


sec2ItemsUl.addEventListener('click', (e) => {
  sec2ItemsUlLi.forEach((el, idx) => {
    if (el == e.target) {
      el.classList.add('on');

      const sec2gap = slideGalleryUlLi[4].offsetLeft - slideGalleryUlLi[0].offsetLeft;
      const sec2goto = (-idx * sec2gap) + 'px';
      slideGallery.style.left = sec2goto;
      slideGallery.style.transition = 'all 0.3s';

    } else {
      el.classList.remove('on');
    }
  })
})

const sec4=document.querySelector('.section.sec4');
const sec4ArrowLeft=sec4.querySelector('span.arrow.left')
const sec4ArrowRight=sec4.querySelector('span.arrow.right')

const sec4Thum=document.querySelector('.thum-icon')
const sec4ThumUl=sec4Thum.querySelector('ul');
const sec4ThumUlLi=sec4ThumUl.querySelectorAll('li');

const poster=document.querySelector('.poster');
const posterImg=poster.querySelector('img');
const rightCon=document.querySelectorAll('.right-con');

const shortThum=document.querySelector('.short-thum')
const shortCon=document.querySelector('.short-con')
const shortConUl=shortCon.querySelector('ul')
const shortConUlLi=shortConUl.querySelectorAll('li')

const shortBcon=document.querySelector('.short-bcon')
const shortBconUl=shortBcon.querySelector('ul')
const shortBconUlLi=shortBconUl.querySelectorAll('li')


sec4ArrowLeft.addEventListener('click', ()=>{

  const sec4Gap=sec4ThumUlLi[1].offsetLeft-sec4ThumUlLi[0].offsetLeft;
  const sec4Goto=(-sec4Gap) + 'px';
  sec4Thum.style.left=sec4Goto;
})
sec4ArrowRight.addEventListener('click', ()=>{

  sec4Thum.style.left=0;
})

sec4ThumUl.addEventListener('click', (e)=>{
  const parentTarget=e.target.parentElement;

  sec4ThumUlLi.forEach((el, idx)=>{
    if(el==parentTarget){
      posterImg.setAttribute('src', `img/poster${idx}.jpg`)
      
      rightCon.forEach((el2, idx2)=>{
        if(idx2==idx){
          el2.classList.add('click');
        }else{
          
          el2.classList.remove('click');
        }
      })
    }
  })
})
shortConUl.addEventListener('click', (e)=>{
  const parentTarget=e.target.parentElement;

  shortConUlLi.forEach((el, idx)=>{
    if(el==parentTarget){
      posterImg.setAttribute('src', `img/poster${idx}.jpg`)
      
      rightCon.forEach((el2, idx2)=>{
        if(idx2==idx){
          el2.classList.add('click');
        }else{
          el2.classList.remove('click');
        }
      })
    }
  })
})

shortBconUl.addEventListener('click', (e)=>{
  shortBconUlLi.forEach((el, idx)=>{
    if(el==e.target){
      if(idx===1){
        shortCon.style.top='-' + (shortConUlLi[0].offsetHeight*5) +'px';
        shortCon.style.transition='all 0.2s'
        shortBconUlLi[1].classList.add('on')
        shortBconUlLi[0].classList.remove('on')
      }else if(idx===0){
        shortCon.style.top='0' +'px';
        shortCon.style.transition='all 0.2s'
        shortBconUlLi[0].classList.add('on')
        shortBconUlLi[1].classList.remove('on')
      }
    }
  })
})