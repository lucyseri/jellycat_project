'use strict';
const bestProduct = document.querySelector('.best-product');
const cardGallery = bestProduct.querySelector('.card-gallery');
const cardGalleryUl = cardGallery.querySelector('ul');
const cardGalleryUlLi = cardGalleryUl.querySelectorAll('li');
const bottomItems = document.querySelector('.bottom-items');
const bottomItemsUl = bottomItems.querySelector('ul');
const bottomItemsUlLi = bottomItemsUl.querySelectorAll('li');

let i = -1;

function autoCard() {
  if (i >= cardGalleryUlLi.length / 4 - 1) {
    i = -1;
  }

  i++;

  const gap = cardGalleryUlLi[1].offsetLeft - cardGalleryUlLi[0].offsetLeft;
  const goto = (-i * 4 * gap) + 'px';

  cardGallery.style.left = goto;
  cardGallery.style.transition = 500 + "ms";


  bottomItemsUlLi.forEach((el, idx) => {
    if (idx === i) {
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }
  })


  if (i >= cardGalleryUlLi.length / 4 - 1) {
    i = -1;
  }

}

let setIn = setInterval(autoCard, 5000);

(() => {
  autoCard()
})();

bottomItemsUl.addEventListener('mouseover', bottomBtnFn)
bottomItemsUl.addEventListener('mouseout', bottomBtnFn)
bottomItemsUl.addEventListener('click', bottomBtnFn)

function bottomBtnFn(e) {
  if (e.type == 'mouseover') {
    bottomItemsUlLi.forEach((el, idx) => {
      if (e.target == el) {
        clearInterval(setIn);
      }
    })
  } else if (e.type == 'mouseout') {
    bottomItemsUlLi.forEach((el, idx) => {
      if (e.target == el) {
        setIn = setInterval(autoCard, 5000);
      }
    })
  } else if (e.type == 'click') {
    bottomItemsUlLi.forEach((el, idx) => {
      if (e.target==el) {
        el.classList.add('on');

        i=idx;
        
        const gap = cardGalleryUlLi[1].offsetLeft - cardGalleryUlLi[0].offsetLeft;
        const goto = (-i * 4 * gap) + 'px';
        
        cardGallery.style.left = goto;
        cardGallery.style.transition = 500 + "ms";
        
      }else{
        el.classList.remove('on');
      }
    })
  }
}

const sec3nav=document.querySelector('.section3-nav')
const underline=sec3nav.querySelector('.underline')
const sec3navUl=sec3nav.querySelector('ul')
const sec3navUlLi=sec3navUl.querySelectorAll('li')
const sec3product=document.querySelector('.product-list')
const sec3productUl=sec3product.querySelector('ul')
const sec3productImg=sec3productUl.querySelectorAll('img')
const sec2productTxt=sec3productUl.querySelectorAll('p')
const sec3productUlLi=sec3productUl.querySelectorAll('li')
const product=['animal', 'amuseables', 'books', 'accessories']
const productTitle={
  animal: ['[오션 라이프]오징어', '[오션 라이프]문어', '[오션 라이프]게', '[오션 라이프]바닷가재', '[오션 라이프]랍스타', '[오션 라이프]홍합', '[오션 라이프]가리비', '[오션 라이프]새우', '[오션 라이프]아기문어'],
  amuseables: ['[숲속 라이프]살구버섯', '[숲속 라이프]갓버섯', '[숲속 라이프]참나무잎', '[숲속 라이프]너도밤나무잎', '[숲속 라이프]소나무', '[숲속 라이프]도토리', '[숲속 라이프]솔방울', '[숲속 라이프]개암나무열매', '[숲속 라이프]그물버섯'],
  books: ['[동물 프렌즈]내가 유니콘이라면', '[채소 프렌즈]아이엠어콘', '[채소 프렌즈]아이엠어캐럿', '[채소 프렌즈]아이엠어아보카도', '[동물 프렌즈]내가 조랑말이라면', '[하루하나]즐거운 색깔들', '[하루하나]즐거운 숫자들', '[비밀 친구]행복한 계란', '[비밀 친구]나의 토끼 친구'],
  accessories: ['[가방]공룡백팩', '[가방]코끼리백팩', '[가방]하마백팩', '[가방]가지크로스백', '[가방]식빵크로스백', '[베이비블랭킷]아보카도', '[베이비블랭킷]데이지', '[베이비블랭킷]해바라기', '[베이비블랭킷]개구리'],
}
underline.style.width=sec3navUlLi[0].offsetWidth+"px";
underline.style.left=sec3navUlLi[0].offsetLeft+"px";
underline.style.top=sec3navUlLi[0].offsetTop+sec3navUlLi[0].offsetHeight +"px";

sec3navUl.addEventListener('click', (e)=>{
  sec3navUlLi.forEach((el, idx)=>{
    if(e.target==el){
      underline.style.transition=300+"ms";
      underline.style.width=el.offsetWidth+"px";
      underline.style.left=el.offsetLeft+"px";
      underline.style.top=el.offsetTop+el.offsetHeight+"px";

      sec3productImg.forEach((el2, idx2)=>{
        el2.setAttribute('src', "img"+"/"+product[idx]+idx2+".jpg")
        el2.setAttribute('alt', product[idx]+idx2)
      })
      
      sec2productTxt.forEach((el3, idx3)=>{
        if(idx==0){
          el3.innerText=productTitle.animal[idx3]
        }else if(idx==1){
          el3.innerText=productTitle.amuseables[idx3]
        }else if(idx==2){
          el3.innerText=productTitle.books[idx3]
        }else if(idx==3){
          el3.innerText=productTitle.accessories[idx3]
        }
      })
    }
  })
})