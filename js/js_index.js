'use strict';
//section1
const sec1 = document.querySelector('section.sec1');
const gallery = sec1.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const arrowBtn = sec1.querySelector('.arrow-btn');
const arrowBtnSpan = arrowBtn.querySelectorAll('span');
const items = sec1.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsUlLi = itemsUl.querySelectorAll('li');

function autogo(num){
  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
  const goto = (-num * gap) + 'px';
  gallery.style.left = goto;
  gallery.style.transition = 500 + "ms";
}
function autoadd(num){
  itemsUlLi.forEach((el, idx) => {
    let startNum = num - 1;
    if (startNum == galleryUlLi.length - 2) {
      startNum = 0;
    } else if (startNum == -1) {
      startNum = itemsUlLi.length - 1;
    }
    if (startNum == idx) {
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }
  })
}
let i = 0;
function autoGallery() {
  i++;
  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
  const goto = (-i * gap) + 'px';
  if (i > galleryUlLi.length - 1) {
    gallery.style.left = "-" + galleryUlLi[1].offsetLeft + "px";
    gallery.style.transition = 0 + "ms";
    i = 1;
    setTimeout(autoGallery, 0);
  } else if (i <= 0) {
    gallery.style.left = "-" + galleryUlLi[3].offsetLeft + "px";
    gallery.style.transition = 0 + "ms";
    i = 0;
  } else {
    gallery.style.left = goto;
    gallery.style.transition = 500 + "ms";
  }
  autoadd(i);
}
let setIn = setInterval(autoGallery, 5000);
(() => {autoGallery()})();
itemsUl.addEventListener('mouseover', itemsmouseFn);
itemsUl.addEventListener('mouseout', itemsmouseFn);
function itemsmouseFn(e){
  if (e.type == 'mouseover'){
    itemsUlLi.forEach((el, idx) => {
      if (el == e.target) {clearInterval(setIn)}
    })
  } else if (e.type == 'mouseout') {
    itemsUlLi.forEach((el, idx) => {
      if (el == e.target) {setIn = setInterval(autoGallery, 5000);}
    })
  }
}
itemsUl.addEventListener('click', (e) => {
  itemsUlLi.forEach((el, idx) => {
    if (el == e.target) {
      el.classList.add('on')
      let idx2 = idx + 1;
      const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
      const goto2 = (-idx2 * gap) + 'px';
      gallery.style.left = goto2;
      gallery.style.transition = 300 + "ms";
      if (idx2 > itemsUlLi.length - 1) {
        idx2 = idx + 1;
      }
      i = idx2;
    } else {
      el.classList.remove('on');
    }
  })
})
arrowBtn.addEventListener('mouseover', arrowFn);
arrowBtn.addEventListener('mouseout', arrowFn);
function arrowFn(e){
  if(e.type=='mouseover'){
    arrowBtnSpan.forEach((el, idx) => {
      if (el == e.target) {clearInterval(setIn)}
    })
  }else if(e.type=='mouseout'){
    arrowBtnSpan.forEach((el, idx) => {
      if (el == e.target) {setIn = setInterval(autoGallery, 5000);}
    })
  }
}
arrowBtn.addEventListener('click', (e) => {
  arrowBtnSpan.forEach((el, idx) => {
    if (e.target == el) {
      if (idx === 0) {
        if (i >= galleryUlLi.length - 1) {
          gallery.style.left = "-" + galleryUlLi[1].offsetLeft + "px";
          gallery.style.transition = 0 + "ms";
          i = 0;
          setTimeout(autoGallery, 0);
        }
        i++;
        autogo(i)
        autoadd(i)
      } else if (idx === 1) {
        if (i <= 0) {
          gallery.style.left = "-" + galleryUlLi[3].offsetLeft + "px";
          gallery.style.transition = 0 + "ms";
          i = galleryUlLi.length - 2;
        }
        i--;
        autogo(i)
        autoadd(i)
      }
    }
  })
})

//section4
const sec4 = document.querySelector('section.sec4');
const leftarrow = sec4.querySelector('span.arrow.left-arrow');
const rightarrow = sec4.querySelector('span.arrow.right-arrow');
const thumItems = sec4.querySelector('.thum-items');
const thumItemsUl = thumItems.querySelector('ul');
const thumItemsUlLi = thumItemsUl.querySelectorAll('li');
const poster = sec4.querySelector('.poster');
const posterImg = poster.querySelector('img');
const reviews = sec4.querySelectorAll('.reviews');

leftarrow.addEventListener('click', ()=>{
  const firstChild=thumItemsUl.firstElementChild;
  thumItemsUl.appendChild(firstChild);
})
rightarrow.addEventListener('click', ()=>{
  const lastChild=thumItemsUl.lastElementChild;
  thumItemsUl.prepend(lastChild);
})
thumItemsUl.addEventListener('click', (e)=>{
  const parentLi=e.target.parentElement;
  thumItemsUlLi.forEach((el, idx)=>{
    if(el==parentLi){
      posterImg.setAttribute('src', `img/poster${idx}.jpg`);
      posterImg.setAttribute('alt', `poster${idx}`);
      reviews.forEach((el2, idx2)=>{
        if(idx2===idx){
          el2.classList.add('visible');
        }else{
          el2.classList.remove('visible');
        }
      })
    }
  })
})