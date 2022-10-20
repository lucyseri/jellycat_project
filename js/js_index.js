'use strict';
//section01
{
  const gallery = document.querySelector('.gallery');
  const galleryUl = gallery.querySelector('ul');
  const galleryUlLi = galleryUl.querySelectorAll('li');
  const items = document.querySelector('.items');
  const itemsUl = items.querySelector('ul');
  const itemsUlLi = itemsUl.querySelectorAll('li');
  const centerBtn = document.querySelector('.center-btn.sec1');
  const arrow = centerBtn.querySelectorAll('span');

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

  function itemsmouseFn(e) {
    if (e.type == 'mouseover') {
      itemsUlLi.forEach((el, idx) => {
        if (el == e.target) {
          clearInterval(setIn)
        }
      })
    } else if (e.type == 'mouseout') {
      itemsUlLi.forEach((el, idx) => {
        if (el == e.target) {
          setIn = setInterval(autoGallery, 3000);
        }
      })
    }
  }
  
  /* 
  */
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

  centerBtn.addEventListener('mouseover', arrowFn);
  centerBtn.addEventListener('mouseout', arrowFn);

  function arrowFn(e){
    if(e.type=='mouseover'){
      arrow.forEach((el, idx) => {
        if (el == e.target) {
          clearInterval(setIn)
        }
      })
    }else if(e.type=='mouseout'){
      arrow.forEach((el, idx) => {
        if (el == e.target) {
          setIn = setInterval(autoGallery, 3000);
        }
      })
    }
  }

  centerBtn.addEventListener('click', (e) => {
    arrow.forEach((el, idx) => {
      if (e.target == el) {
        if (idx === 0) {
          console.log(i);
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
}

//section4
{
  const sec4top=document.querySelector('.sec4-top');
  const leftarrow=sec4top.querySelector('span.arrow.left')
  const rightarrow=sec4top.querySelector('span.arrow.right')
  const thumCon=document.querySelector('.thum-con')
  const thumConUl=thumCon.querySelector('ul')
  const thumConUlLi=thumConUl.querySelectorAll('li')
  const bottomLeft=document.querySelector('.bottom-left')
  const bottomImg=bottomLeft.querySelector('img')
  const bottomRight=document.querySelectorAll('.bottom-right')
  
  leftarrow.addEventListener('click', ()=>{
    const firstChild=thumConUl.firstElementChild;
    thumConUl.appendChild(firstChild);
  })
  rightarrow.addEventListener('click', ()=>{
    const lastChild=thumConUl.lastElementChild;
    thumConUl.prepend(lastChild);
  })
  
  thumConUl.addEventListener('click', (e)=>{
    const parentLi=e.target.parentElement;
    thumConUlLi.forEach((el, idx)=>{
      if(el==parentLi){
        bottomImg.setAttribute('src', `img/poster${idx}.jpg`);
        bottomImg.setAttribute('alt', `poster${idx}`);
        bottomRight.forEach((el2, idx2)=>{
          if(idx2===idx){
            el2.classList.add('view');
          }else{
            el2.classList.remove('view');
          }
        })
      }
    })
  })
}