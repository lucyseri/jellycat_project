'use strict';
//section2
const sec2 = document.querySelector('section.sec2');
const slideCon = sec2.querySelector('.slide-con');
const slideItems = sec2.querySelector('.slide-items');
const slideItemsUl = slideItems.querySelector('ul');
const slideItemsUlLi = slideItemsUl.querySelectorAll('li');
const btnItems = sec2.querySelector('.items');
const btnItemsUl = btnItems.querySelector('ul');
const btnItemsUlLi = btnItemsUl.querySelectorAll('li');

let i = -1;
function autoCard() {
  if (i >= slideItemsUlLi.length / 4 - 1) i = -1;
  i++;
  const gap = slideCon.offsetWidth + slideItemsUlLi[1].offsetLeft - slideItemsUlLi[0].offsetLeft - slideItemsUlLi[0].offsetWidth;
  const goto = (-i * gap) + 'px';
  slideItems.style.left = goto;
  slideItems.style.transition = 500 + "ms";
  btnItemsUlLi.forEach((el, idx) => {
    if (idx === i) {
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }
  })
  if (i >= slideItemsUlLi.length / 4 - 1) i = -1;
}
let setIn = setInterval(autoCard, 5000);
(() => {autoCard()})();

btnItemsUl.addEventListener('mouseover', bottomBtnFn)
btnItemsUl.addEventListener('mouseout', bottomBtnFn)
btnItemsUl.addEventListener('click', bottomBtnFn)
function bottomBtnFn(e) {
  if (e.type == 'mouseover') {
    btnItemsUlLi.forEach((el, idx) => {
      if (e.target == el) {
        clearInterval(setIn);
      }
    })
  } else if (e.type == 'mouseout') {
    btnItemsUlLi.forEach((el, idx) => {
      if (e.target == el) {
        setIn = setInterval(autoCard, 5000);
      }
    })
  } else if (e.type == 'click') {
    btnItemsUlLi.forEach((el, idx) => {
      if (e.target == el) {
        el.classList.add('on');
        i = idx;
        const gap = slideCon.offsetWidth + slideItemsUlLi[1].offsetLeft - slideItemsUlLi[0].offsetLeft - slideItemsUlLi[0].offsetWidth;
        const goto = (-i * gap) + 'px';
        slideItems.style.left = goto;
        slideItems.style.transition = 500 + "ms";
      } else {
        el.classList.remove('on');
      }
    })
  }
}

//section3
const sec3 = document.querySelector('section.sec3');
const sec3nav = sec3.querySelector('.sec3-nav');
const underline = sec3nav.querySelector('.underline');
const sec3navUl = sec3nav.querySelector('ul');
const sec3navUlLi = sec3navUl.querySelectorAll('li');
const lisetItems = sec3.querySelector('.list-items');
const lisetItemsUl = lisetItems.querySelector('ul');
const lisetItemsUlLi = lisetItemsUl.querySelectorAll('li');
const lisetItemsImg = lisetItemsUl.querySelectorAll('img');
const lisetItemsTxt = lisetItemsUl.querySelectorAll('p')
const productRange = ['animal', 'amuseables', 'books', 'accessories']
const productName = {
  animal: ['[오션 라이프]오징어', '[오션 라이프]문어', '[오션 라이프]게', '[오션 라이프]바닷가재', '[오션 라이프]랍스타', '[오션 라이프]홍합', '[오션 라이프]가리비', '[오션 라이프]새우', '[오션 라이프]아기문어'],
  amuseables: ['[숲속 라이프]살구버섯', '[숲속 라이프]갓버섯', '[숲속 라이프]참나무잎', '[숲속 라이프]너도밤나무잎', '[숲속 라이프]소나무', '[숲속 라이프]도토리', '[숲속 라이프]솔방울', '[숲속 라이프]개암나무열매', '[숲속 라이프]그물버섯'],
  books: ['[동물 프렌즈]내가 유니콘이라면', '[채소 프렌즈]아이엠어콘', '[채소 프렌즈]아이엠어캐럿', '[채소 프렌즈]아이엠어아보카도', '[동물 프렌즈]내가 조랑말이라면', '[하루하나]즐거운 색깔들', '[하루하나]즐거운 숫자들', '[비밀 친구]행복한 계란', '[비밀 친구]나의 토끼 친구'],
  accessories: ['[가방]공룡백팩', '[가방]코끼리백팩', '[가방]하마백팩', '[가방]가지크로스백', '[가방]식빵크로스백', '[베이비블랭킷]아보카도', '[베이비블랭킷]데이지', '[베이비블랭킷]해바라기', '[베이비블랭킷]개구리'],
}
underline.style.width = sec3navUlLi[0].offsetWidth + "px";
underline.style.left = sec3navUlLi[0].offsetLeft + "px";
underline.style.top = sec3navUlLi[0].offsetTop + sec3navUlLi[0].offsetHeight + "px";
sec3navUl.addEventListener('click', (e) => {
  sec3navUlLi.forEach((el, idx) => {
    if (e.target == el) {
      underline.style.transition = 300 + "ms";
      underline.style.width = el.offsetWidth + "px";
      underline.style.left = el.offsetLeft + "px";
      underline.style.top = el.offsetTop + el.offsetHeight + "px";
      lisetItemsImg.forEach((el2, idx2) => {
        el2.setAttribute('src', "img" + "/" + productRange[idx] + idx2 + ".jpg")
        el2.setAttribute('alt', productRange[idx] + idx2)
      })
      lisetItemsTxt.forEach((el3, idx3) => {
        if (idx == 0) {
          el3.innerText = productName.animal[idx3]
        } else if (idx == 1) {
          el3.innerText = productName.amuseables[idx3]
        } else if (idx == 2) {
          el3.innerText = productName.books[idx3]
        } else if (idx == 3) {
          el3.innerText = productName.accessories[idx3]
        }
      })
    }
  })
})